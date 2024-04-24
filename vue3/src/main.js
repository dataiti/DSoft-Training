import { createApp } from "vue";
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import App from "@/App.vue";

import "@/assets/styles/tailwind.css";
import "@/assets/styles/global.css";

const app = createApp(App);

app.use(Vue3Toasity, {
  autoClose: 3000,
});
app.mount("#app");
