<template>
  <kh-form :arrayInput="formStateReg" title="Регистрация">
    <kh-button @click="registration" label="Зарегистрироваться" />
  </kh-form>
</template>

<script setup>
import { HTTP } from "@/axios/index.js";
import { useVuelidate } from "@vuelidate/core";
import AccountCircle from "./icons/AccountCircle.vue";
import KeyIcon from "./icons/KeyIcon.vue";
import { customRules } from "@/helper/rules";
import { renderIcon } from "@/helper/rendericon";
import { getMessageForError } from "@/helper/getMessageForError";
import KhForm from "./UI/KhForm.vue";
import { computed, reactive, ref } from "vue";
import KhButton from "./UI/KhButton.vue";
const rules = computed(() => {
  return {
    email: { required: customRules.checkEmail },
    username: { required: customRules.required },
    password: { required: customRules.minLength },
    first_name: { required: customRules.required },
    last_name: { required: customRules.required },
  };
});
const userStateReg = reactive({
  username: ref(""),
  email: ref(""),
  password: ref(""),
  first_name: ref(""),
  last_name: ref(""),
});

const v$ = useVuelidate(rules, userStateReg);

const formStateReg = ref([
  {
    key: "username",
    model: computed({
      get() {
        return userStateReg.username;
      },
      set(newValue) {
        userStateReg.username = newValue;
      },
    }),
    type: "text",
    placeholder: "Логин",
    icon: renderIcon(AccountCircle),
    error: computed(() => getMessageForError(v$, "username")),
  },
  {
    key: "email",
    model: computed({
      get() {
        return userStateReg.email;
      },
      set(newValue) {
        userStateReg.email = newValue;
      },
    }),
    type: "text",
    placeholder: "Почта",
    icon: renderIcon(AccountCircle),
    error: computed(() => getMessageForError(v$, "email")),
  },

  {
    key: "first_name",
    model: computed({
      get() {
        return userStateReg.first_name;
      },
      set(newValue) {
        userStateReg.first_name = newValue;
      },
    }),
    type: "text",
    placeholder: "Имя",
    icon: renderIcon(AccountCircle),
    error: computed(() => getMessageForError(v$, "first_name")),
  },
  {
    key: "last_name",
    model: computed({
      get() {
        return userStateReg.last_name;
      },
      set(newValue) {
        userStateReg.last_name = newValue;
      },
    }),
    type: "text",
    placeholder: "Фамилия",
    icon: renderIcon(AccountCircle),
    error: computed(() => getMessageForError(v$, "last_name")),
  },
  {
    key: "password",
    model: computed({
      get() {
        return userStateReg.password;
      },
      set(newValue) {
        userStateReg.password = newValue;
      },
    }),
    type: "password",
    placeholder: "Пароль",
    icon: renderIcon(KeyIcon),
    error: computed(() => getMessageForError(v$, "password")),
  },
]);
async function registration() {
  const result = await v$.value.$validate();
  if (result)
    HTTP.post("/reg", { user: userStateReg })
      .then((responce) => {
        console.log(responce);
      })
      .catch((error) => {
        console.log(error);
      });
  console.log(formStateReg);
}
</script>

<style lang="scss" scoped></style>
