<template>
  <button
    :class="['button', `button-${$props.size}`, `button-${$props.mode}`]"
    v-bind="$attrs"
  >
    <span>{{ $props.label }}</span>
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "Кнопка",
    },
    size: {
      type: String,
      default: "2xl",
    },
    mode: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/colors.scss";
.button-default {
  position: relative;
  padding: 10px;
  transition: all 0.1s ease-in;
  border-radius: 4px;
  font-size: 18px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  background: $secondary;
  &-sm {
    width: 15%;
  }
  &-md {
    width: 25%;
  }
  &-lg {
    width: 50%;
  }
  &-xl {
    width: 75%;
  }
  &-2xl {
    width: 99%;
  }
  &:focus {
    box-shadow:
      0px 2px 3px 0px rgba(0, 0, 0, 0.3),
      0px 6px 10px 4px rgba(0, 0, 0, 0.15);
  }

  &:after {
    content: "";
    background: $tertiary;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }
  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
  &:hover {
    background: $focus;
    box-shadow:
      0px 2px 3px 0px rgba(0, 0, 0, 0.3),
      0px 6px 10px 4px rgba(0, 0, 0, 0.15);
  }
}
.button-link {
  background: none;
  font-size: 1rem;
  width: max-content;
  color: blue;
  border-radius: 0px;
  border-bottom: 1px solid;
  &:hover {
    box-shadow: 0px 6px 4px -8px blue;
  }
}
</style>
