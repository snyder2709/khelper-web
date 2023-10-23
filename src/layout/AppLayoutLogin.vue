<template>
  <div class="form">
    <h2 class="form__title">
      {{ $props.title }}
    </h2>
    <div class="form__container">
      <kh-input
        v-model:value="userState.username"
        type="text"
        placeholder="Придумайте логин"
        :icon="renderIcon(AccountCircle)"
      />
      <kh-input
        v-model:value="userState.firts_name"
        type="text"
        placeholder="Имя"
        :icon="renderIcon(AccountCircle)"
      />
      <kh-input
        v-model:value="userState.last_name"
        type="text"
        placeholder="Фамилия"
        :icon="renderIcon(AccountCircle)"
      />
      <kh-input
        v-model:value="userState.password"
        type="password"
        placeholder="Пароль"
        :icon="renderIcon(KeyIcon)"
      />
      <kh-button label="Вход" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AccountCircle from "../components/icons/AccountCircle.vue";
import { reactive, ref, h, render } from "vue";
import KhButton from "../components/UI/KhButton.vue";
import KhInput from "../components/UI/KhInput.vue";
import { renderIcon } from "../helper/rendericon.js";
import KeyIcon from "../components/icons/KeyIcon.vue";
import { useUserStore } from "../store/user"
const userStore = useUserStore()
const userState = userStore.userState
const props = defineProps({
  title:{ type:String,default:"Форма"}
})
let value = ref("");


</script>

<style lang="scss" scoped>
.form {
  margin-top: 120px;
  width: 90%;
  max-width: 600px;
  &__title{
    font-size: 3rem;
    text-align: center;
    margin: 20px;
    letter-spacing: 3px;
  }
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0px 20px;
    gap: 7px;
  }
}
</style>
