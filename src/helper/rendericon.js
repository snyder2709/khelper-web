import { h } from "vue";
export const renderIcon = (icon, color) => {
  return icon
    ? h("div", { class: [color || "grey-svg", "svg-icon"] }, [h(icon)])
    : null;
};
