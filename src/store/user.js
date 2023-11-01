import { defineStore } from "pinia";
import { reactive, ref, computed } from "vue";
import { HTTP } from "@/axios/index.js";
import { useVuelidate } from "@vuelidate/core";
import { minLength, required } from "@vuelidate/validators";

export const useUserStore = defineStore("user", () => {
  const customRules = reactive({
    required: {
      $validator: (value) => !!value,
      $message: "Обязательное поле",
    },

    checkEmail: {
      $validator: (value) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      },
      $message: `Не верный формат E-mail`,
    },
    minLength: {
      $validator: (value) => value.length >= 4,
      $message: "Минимальная длина 8 символов",
    },
  });

  const rules = computed(() => {
    return {
      email: { required: customRules.checkEmail },
      username: { required },
      password: { required: customRules.minLength },
      first_name: { required },
      last_name: { required },
    };
  });

  const userState = reactive({
    username: ref(""),
    email: ref(""),
    password: ref(""),
    first_name: ref(""),
    last_name: ref(""),
  });

  const v$ = useVuelidate(rules, { userState });

  async function registration() {
    const result = await v$.value.$validate();
    console.log(v$.value);
    if (result)
      HTTP.post("/reg", { user: userState })
        .then((responce) => {
          console.log(responce);
        })
        .catch((error) => {
          console.log(error);
        });
  }
  return {
    userState,
    registration,
  };
});
