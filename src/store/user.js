import { defineStore } from "pinia";
import { reactive, Ref, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const userState = reactive({
    username: "",
    password: "",
    firts_name: "",
    last_name: "",
  });
  return {
    userState,
  };
});
