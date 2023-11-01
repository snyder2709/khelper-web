import { createApp } from "vue";
import router from "./router/index.js";
import { createPinia } from "pinia";

import "./assets/nullstyle.scss";
import "./assets/main.scss";
import App from "./App.vue";
const pinia = createPinia();
createApp(App)
  .use(router)
  .use(pinia)
  .mount("#app");
