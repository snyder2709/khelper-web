<template>
  <kh-form :arrayInput="formState" title="Регистарция">
    <kh-button @click="registration" label="Зарегестрироваться" />
  </kh-form>
  <pre>
  {{ userState }}
 </pre
  >
</template>

<script setup>
import AccountCircle from "@/components/icons/AccountCircle.vue";
import { reactive, ref, h, render, computed, onMounted } from "vue";
import { renderIcon } from "@/helper/rendericon.js";
import KhButton from "@/components/UI/KhButton.vue";
import KeyIcon from "@/components/icons/KeyIcon.vue";
import KhForm from "@/components/UI/KhForm.vue";
import { useUserStore } from "@/store/user";
const { userState, registration } = useUserStore();

const formState = ref([
  {
    key: "username",
    model: computed({
      get() {
        return userState.username;
      },
      set(newValue) {
        userState.username = newValue;
      },
    }),
    type: "text",
    placeholder: "Логин",
    icon: renderIcon(AccountCircle),
  },
  {
    key: "email",
    model: computed({
      get() {
        return userState.email;
      },
      set(newValue) {
        userState.email = newValue;
      },
    }),
    type: "text",
    placeholder: "Почта",
    icon: renderIcon(AccountCircle),
  },

  {
    key: "first_name",
    model: computed({
      get() {
        return userState.first_name;
      },
      set(newValue) {
        userState.first_name = newValue;
      },
    }),
    type: "text",
    placeholder: "Имя",
    icon: renderIcon(AccountCircle),
  },
  {
    key: "last_name",
    model: computed({
      get() {
        return userState.last_name;
      },
      set(newValue) {
        userState.last_name = newValue;
      },
    }),
    type: "text",
    placeholder: "Фамилия",
    icon: renderIcon(AccountCircle),
  },
  {
    key: "password",
    model: computed({
      get() {
        return userState.password;
      },
      set(newValue) {
        userState.password = newValue;
      },
    }),
    type: "password",
    placeholder: "Пароль",
    icon: renderIcon(KeyIcon),
  },
]);
</script>

<style lang="scss" scoped></style>
