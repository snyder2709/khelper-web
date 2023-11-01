<template>
  <div class="auth">
    <swiper
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
  >
    <swiper-slide>    <kh-form :arrayInput="formStateReg" title="Регистрация">
      <kh-button @click="registration" label="Зарегестрироваться" />
    </kh-form></swiper-slide>
    <swiper-slide>    <kh-form :arrayInput="formStateLog" title="Войти">
      <kh-button @click="registration" label="Войти" />
    </kh-form></swiper-slide>
  </swiper>


  </div>
</template>

<script setup>
import AccountCircle from "@/components/icons/AccountCircle.vue";
import { reactive, ref, h, render, computed, onMounted } from "vue";
import { renderIcon } from "@/helper/rendericon.js";
import KhButton from "@/components/UI/KhButton.vue";
import KeyIcon from "@/components/icons/KeyIcon.vue";
import KhForm from "@/components/UI/KhForm.vue";
import { useUserStore } from "@/store/user";
import { getMessageForError } from "../helper/getMessageForError"
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
const { userStateReg, registration,v$ } = useUserStore();
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
    error:computed(()=> getMessageForError(v$,'username'))
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
    error:computed(()=>getMessageForError(v$,'email'))
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
    error:computed(()=>getMessageForError(v$,"first_name"))
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
    error:computed(()=>getMessageForError(v$,"last_name"))
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
    error:computed(()=>getMessageForError(v$,"password"))
  },
]);

const formStateLog = ref([
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
    error:computed(()=> getMessageForError(v$,'username'))
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
    error:computed(()=>getMessageForError(v$,"password"))
  },
]);
</script>

<style lang="scss" scoped>
.auth{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  width: 80%;
}
</style>
