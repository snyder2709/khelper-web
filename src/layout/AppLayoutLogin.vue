<template>
  <div class="form">
    <div class="form__container">
      <kh-input
        v-model:value="formState.login"
        type="text"
        :icon="renderIcon(AccountCircle)"
      />
      <kh-input
        v-model:value="formState.password"
        type="password"
        :icon="renderIcon(KeyIcon)"
      />
      <kh-button label="Вход" />
    </div>
    <pre>
      {{ formState }}
    </pre>
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
const formState = userStore.formState
let value = ref("");


</script>

<style lang="scss" scoped>
.form {
  width: 90%;
  max-width: 800px;
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0px 10px;
  }
}
</style>
