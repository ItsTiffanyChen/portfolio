import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import viteImageMin from "@vheemstra/vite-plugin-imagemin";
import imageminRngquant from "imagemin-pngquant";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio",
  plugins: [
    vue(),
    viteImageMin({
      include:
        /^(?!dist\/(images|svgs)\/.+\/.*\.(png|jpg|jpeg|svg|gif|webp)$).*$/,
      plugins: {
        png: imageminRngquant()
      }
    })
  ],
  resolve: {
    alias: {
      "~node_modules": path.resolve(__dirname, "./node_modules")
    }
  }
});
