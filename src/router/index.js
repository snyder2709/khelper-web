import AppLayout from "../layout/AppLayout.vue";
import AppLayoutLogin from "../layout/AppLayoutLogin.vue";
import App from "@/App.vue";
import MainLayout from "@/layout/MainLayout.vue";
import { createRouter, createWebHistory } from "vue-router";
// const isAuthenticated =
// router.beforeEach(async (to, from) => {
//   if ( !isAuthenticated && to.name !== 'Login') {
//     return { name: 'Login' }
//   }
// })
const routes = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/login",
    component: AppLayoutLogin,
    name: "login",
  },
  {
    path: "/main",
    component: AppLayout,
    name: "main",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
