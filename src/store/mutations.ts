export default {
  selectNewtab(state, data) {
    state.selectedTab = 1;
    state.tabs[1] = data;
  },
  setArticles(state, data) {
    state.articles = data;
  },
  setTabHeader(state, data) {
    state.tabs = data;
  },
  setTabIndex(state, index) {
    state.selectedTab = index;
  }
};
