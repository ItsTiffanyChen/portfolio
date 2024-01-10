import Rollbar from "rollbar";
import config from "../rollbar.config.js";

const rollbar = new Rollbar(config);

export default {
  install(app) {
    app.config.errorHandler = (error, vm, info) => {
      if (import.meta.env.VITE_ENV !== "dev") {
        rollbar.error(error, { vueComponent: vm, info });
        if (app.config.devtools) {
          console.error(error);
        }
      }
    };
    app.provide("rollbar", rollbar);
  }
};
