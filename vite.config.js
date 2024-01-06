import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio",
  plugins: [vue()],
  resolve: {
    alias: {
      "~node_modules": path.resolve(__dirname, "./node_modules")
    }
  }
});
