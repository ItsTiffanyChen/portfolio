import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import i18n from "./i18n";
import rollbar from "./rollbar.js";

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

createApp(App).use(router).use(i18n).use(rollbar).mount("#app");
