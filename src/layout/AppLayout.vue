<template>
  <div class="wrapper">
    <the-header></the-header>
    <main class="main">
      App
      <router-view></router-view>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script setup lang="ts">
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
</script>

<style scoped></style>
