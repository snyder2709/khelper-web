import { defineStore } from "pinia";
import {reactive} from 'vue'
import {User} from '../type/user'


export const useUserStore = defineStore("user", () => {
  const userState = reactive<User>({
  username: "",
  password: "",
  firts_name:"",
  last_name:""
  })
  return {
    userState
  }
});