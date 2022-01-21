import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vue(), vueJsx()],
    server: {
      port: 4000,
      strictPort: true // throw error if port in use,
    },
    define: {
      __DEV__: (process.env.NODE_ENV === "development").toString()
    }
  });
};
