<template>
  <kh-form :arrayInput="formState" title="Регистарция" />
</template>

<script setup >
import AccountCircle from "@/components/icons/AccountCircle.vue";
import { reactive, ref, Ref, h, render } from "vue";
// import KhButton from "./KhButton.vue";
import KhButton from "@/components/UI//KhButton.vue";
import { v4 as uuid } from "uuid";
import KhInput from "@/components/UI/KhInput.vue";
import { renderIcon } from "@/helper/rendericon.js";
import KeyIcon from "@/components/icons/KeyIcon.vue";
import KhForm from "@/components/UI/KhForm.vue";
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
const userState = userStore.userState;
const formState: Input[] = [
  {
    key: "username",
    model: userState.username,
    type: "text",
    placeholder: "default",
    icon: renderIcon(AccountCircle),
  },
];
</script>

<style lang="scss" scoped></style>
