<template>
  <div class="form">
    <h2 class="form__title">
      {{ $props.title }}
    </h2>

    <div class="form__container">
      <kh-input
        v-for="(inputData, index) in props.arrayInput"
        :key="index"
        v-model:value="inputData.model"
        :type="inputData.type"
        :placeholder="inputData.placeholder"
        :icon="inputData.icon"
        :error="inputData.error"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import AccountCircle from "@/components/icons/AccountCircle.vue";
import { reactive, ref, h, render, onMounted } from "vue";
import KhButton from "@/components/UI//KhButton.vue";
import KhInput from "@/components/UI/KhInput.vue";
import { renderIcon } from "@/helper/rendericon.js";
import KeyIcon from "@/components/icons/KeyIcon.vue";

const props = defineProps({
  arrayInput: {
    type: Array,
    default: [
      {
        model: "",
        type: "text",
        placeholder: "default",
        icon: renderIcon(AccountCircle),
        error: Function,
      },
    ],
  },
  title: { type: String, default: "Форма" },
});
onMounted(() => {
  console.log(props.arrayInput);
});
</script>

<style lang="scss" scoped>
.form {
  width: 90%;
  width: 100%;
  &__title {
    font-size: 2rem;
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
