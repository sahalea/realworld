import * as vue from "vue";
import { get, post } from "./util/http";

export default function applyPlugins(app: vue.App<Element>) {
  // Apply http post to the vue instance
  // With this we can call this.$httpPost from the vue component
  // to call any api post requests
  app.config.globalProperties.$httpPost = post;

  // Apply http post to the vue instance
  // With this we can call this.$httpGet from the vue component
  // to call any api get requests
  app.config.globalProperties.$httpGet = get;
}
