import AppLayout from "../layout/AppLayout.vue";
import AppLayoutLogin from "../layout/AppLayoutLogin.vue";
import App from "@/App.vue";
import MainLayout from "@/layout/MainLayout.vue";
import { useRoute } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import { HTTP } from "@/axios/index.js";
const login = (token) => {
  console.log(token);
  HTTP.post("/login", { token })
    .then((responce) => {
      console.log(responce);
      if (responce.status == 200) {
        router.push({ name: "Main" });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const routes = [
  {
    path: "/",
    component: App,
    redirect: (to) => {
      return { path: "/main" };
    },
  },
  {
    path: "/login",
    component: AppLayoutLogin,
    name: "Login",
  },
  {
    path: "/main",
    component: AppLayout,
    name: "Main",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const token = JSON.parse(localStorage.getItem("t"));

  if (to.name !== "Login" && !token) {
    next({ name: "Login" });
  } else {
    login(token);
    next();
  }
});

export default router;
