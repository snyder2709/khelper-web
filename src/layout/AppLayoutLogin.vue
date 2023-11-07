<template>
  <div class="auth">
    <Presence>
      <Motion
        :key="current"
        :initial="{ opacity: 0 }"
        :animate="{
          opacity: 1,
          x: 0,
          transition: { delay: 0.1 },
        }"
        :exit="{ opacity: 0, transition: { delay: 0.1 } }"
        class="absolute tw-flex tw-flex-col tw-items-center tw-gap-2"
      >
        <Registration v-if="current === 'registration'" />
        <Login v-else />
        <kh-button
          mode="link"
          size="md"
          @click="toggleForm"
          :label="labelcomp"
        />
      </Motion>
    </Presence>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { Motion, Presence } from "motion/vue";
import Login from "@/components/Login.vue";
import Registration from "@/components/Registration.vue";
import KhButton from "@/components/UI/KhButton.vue";
const current = ref("registration");
const labelcomp = computed(() =>
  current.value === "registration" ? "Войти" : "Зарегистрироваться",
);
const toggleForm = () => {
  current.value = current.value === "registration" ? "login" : "registration";
};
</script>

<style lang="scss" scoped>
.auth {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.absolute {
  position: absolute;
  top: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.65s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from {
  transform: translateX(320px);
}

.slide-fade-leave-to {
  transform: translateX(-320px);
}
</style>
