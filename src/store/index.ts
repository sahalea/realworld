import { createStore } from "vuex";
import mutations from "./mutations";

export interface State {
  selectedTab: Number;
  tabs: Array<any>;
  articles: Array<any>;
}

export default createStore<State>({
  state() {
    return {
      selectedTab: 0,
      tabs: ["Global Feed"],
      articles: []
    };
  },
  mutations
});
