<template>
  <kh-form :arrayInput="formStateLog" title="Войти">
    <kh-button @click="login" label="Войти" />
  </kh-form>
</template>

<script setup>
import { HTTP } from "@/axios/index.js";
import { useVuelidate } from "@vuelidate/core";
import { customRules } from "@/helper/rules";
import AccountCircle from "./icons/AccountCircle.vue";
import KeyIcon from "./icons/KeyIcon.vue";
import { renderIcon } from "@/helper/rendericon";
import KhForm from "./UI/KhForm.vue";
import KhButton from "./UI/KhButton.vue";
import { getMessageForError } from "@/helper/getMessageForError";
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const userStateLog = reactive({
  email: ref(""),
  password: ref(""),
});
const rules = computed(() => {
  return {
    email: { required: customRules.required },
    password: { required: customRules.required },
  };
});

const v$ = useVuelidate(rules, userStateLog);
const formStateLog = ref([
  {
    key: "email",
    model: computed({
      get() {
        return userStateLog.email;
      },
      set(newValue) {
        userStateLog.email = newValue;
      },
    }),
    type: "text",
    placeholder: "Email",
    icon: renderIcon(AccountCircle),
    error: computed(() => getMessageForError(v$, "email")),
  },
  {
    key: "password",
    model: computed({
      get() {
        return userStateLog.password;
      },
      set(newValue) {
        userStateLog.password = newValue;
      },
    }),
    type: "password",
    placeholder: "Пароль",
    icon: renderIcon(KeyIcon),
    error: computed(() => getMessageForError(v$, "password")),
  },
]);
async function login() {
  const result = await v$.value.$validate();
  if (result) {
    HTTP.post("/login", { user: userStateLog })
      .then((responce) => {
        console.log(responce);
        localStorage.setItem("t", JSON.stringify(responce.data.user.token));
        if (responce.status == 200) {
          router.push({ name: "Main" });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<style lang="scss" scoped></style>
