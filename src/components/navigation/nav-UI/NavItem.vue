<template>
  <li>
    <router-link v-bind="$attrs">
    <span>{{ $props.title }}</span>
    </router-link>
  </li>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    title: String,
  },
  setup(props) {},
};
</script>

<style lang="scss" scoped></style>
