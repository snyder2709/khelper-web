import AppLayout from "../layout/AppLayout.vue";
import AppLayoutLogin from "../layout/AppLayoutLogin.vue";
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
    component: AppLayout,
    children: [
      {
        path: "login", // Не указывайте `/` в начале пути
        component: AppLayoutLogin,
        name: "login",
      },
      // Другие вложенные маршруты, если есть
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
