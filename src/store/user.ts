import { defineStore } from "pinia";
import {reactive} from 'vue'
import {User} from '../type/user'


export const useUserStore = defineStore("user", () => {
  const formState = reactive<User>({
  login: "",
  password: "",
  roles:['']
  })
  return {
    formState
  }
});