import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import i18n from "./i18n";
import { PARAMS_MAPPING } from "./i18n";
import keys from "lodash/keys";

const router = createRouter({
  history:
    import.meta.env.VITE_ENV === "dev"
      ? createWebHashHistory()
      : createWebHashHistory("/portfolio"),
  routes: [
    {
      path: "/:lang",
      component: App
    },
    { path: "/:pathMatch(.*)*", redirect: "/en" }
  ]
});

createApp(App).use(router).use(i18n).mount("#app");
