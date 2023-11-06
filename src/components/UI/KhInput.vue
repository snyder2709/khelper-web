<template>
  <div :class="['input', `input-${$props.size}`]">
    <input
      class="input__default"
      v-bind="$attrs"
      @input="handleInput"
      :value="value"
    />
    <component :is="$props.icon"></component>
    <div v-html="$props.error"></div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: String,
    size: {
      type: String,
      default: "2xl",
    },
    icon: Object,
    error: String,
  },

  setup(props, { emit }) {
    const handleInput = (e) => {
      let value = e.target.value;
      emit("update:value", value);
    };
    return {
      handleInput,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/colors.scss";
.input {
  padding: 5px;
  position: relative;
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
    width: 100%;
  }
}
.input__default {
  padding: 5px 30px;
  font-size: 1rem;
  border: 1px solid $secondary;
  border-radius: 3px;
  width: 100%;
  transition: all 0.2s ease-in;
  &:focus {
    box-shadow: 0px 0px 1px 1px $tertiary;
  }
  &:disabled {
  }
}
</style>
