import { defineStore } from "pinia";
import { reactive, ref, watchEffect } from "vue";
import { HTTP } from "@/axios/index.js";

export const useUserStore = defineStore("user", () => {
  const userState = reactive({
    username: ref(""),
    email: ref(""),
    password: ref(""),
    first_name: ref(""),
    last_name: ref(""),
  });

  function registration() {
    HTTP.post("/reg", { user: userState })
      .then((responce) => {
        console.log(responce);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return {
    userState,
    registration,
  };
});
