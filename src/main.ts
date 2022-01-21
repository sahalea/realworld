import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import en from "element-plus/es/locale/lang/en";
import { createApp, h, provide } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import applyPlugins from "./plugins";

const app = createApp({
  render: () => h(App)
});
applyPlugins(app);

app.use(router);
app.use(store);

app.use(ElementPlus, { size: "medium", locale: en });
// Render application
app.mount("#app");
