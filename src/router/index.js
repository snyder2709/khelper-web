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
  { path: '/', component: AppLayout },
  { path: '/login', component: AppLayoutLogin , name: 'login' },
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})
export default router