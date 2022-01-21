<template>
  <div class="feed-page">
    <div class="banner w-full">
      <div class="container flex items-center justify-center flex-col">
        <el-avatar :src="userProfile.image" size="50" class="mr-3">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
        <p class="text-black text-center font-bold mt-4 mb-0 text-2xl">
          {{ userProfile.username }}
        </p>
      </div>
    </div>
    <div class="container h-screen">
      <div class="w-full">
        <TabView :selectedTab="selectedTab" :tabItems="tabHeader" />
        <CardList :articles="articles" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TabView from "./../component/TabView.vue";
import CardList from "../component/CardList.vue";

export default defineComponent({
  components: { TabView, CardList },
  data() {
    return {
      pageConfig: {
        limit: 10,
        offset: 0
      },
      userProfile: {},
      articles: []
    };
  },
  setup() {},
  computed: {
    tabHeader() {
      return this.$store.state.tabs;
    },
    selectedTab() {
      return this.$store.state.selectedTab;
    }
  },
  methods: {
    /**
     * Get article by user
     */
    async getArticles() {
      const { articles } = await this.$httpGet(
        `/articles?author=${this.$route.params.name}&limit=${this.pageConfig.limit}&offset=${this.pageConfig.offset}`
      );
      this.articles = articles;
    },

    /**
     * Get userdetails by name
     */
    async getUserDetails() {
      const { profile } = await this.$httpGet(`/profiles/${this.$route.params.name}`);
      this.userProfile = profile;
    }
  },
  mounted() {
    /**
     * Set tab header while mounted this page
     */
    this.$store.commit("setTabHeader", ["My Articles", "Favorited Articles"]);
    this.getUserDetails();
    this.getArticles();
  }
});
</script>
<style scoped>
.feed-page .banner {
  background: #f3f3f3;
}
.banner {
  color: #fff;
  padding: 4rem;
  margin-bottom: 2rem;
}
</style>
