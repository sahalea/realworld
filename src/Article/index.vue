<template>
  <div class="feed-page">
    <div class="banner w-full">
      <div class="container">
        <h1
          class="text-white text-center font-bold mb-0 text-6xl"
          style="text-shadow: 0px 1px 3px rgb(0 0 0 / 30%)"
        >
          {{ bannerHeader }}
        </h1>
        <p class="text-white text-center font-bold mb-0 text-2xl">
          {{ bannerSubHeader }}
        </p>
      </div>
    </div>
    <div class="container h-screen">
      <div class="flex w-full">
        <div class="md:w-3/4">
          <TabView :selectedTab="selectedTab" :tabItems="tabHeader" />
          <CardList :articles="articlesData" />
        </div>
        <div class="md:w-1/4 ml-4">
          <TagsContainer :tags="tags" />
        </div>
      </div>
      <el-pagination :pager-count="10" layout="prev, pager, next" :total="articlesData.length">
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TabView from "./../component/TabView.vue";
import CardList from "../component/CardList.vue";
import TagsContainer from "./../component/TagsContainer.vue";

export default defineComponent({
  components: { TabView, CardList, TagsContainer },
  data() {
    return {
      bannerHeader: "Conduit",
      bannerSubHeader: "A place to share your knowledge.",
      tags: [],
      pageConfig: {
        limit: 10,
        offset: 0
      }
    };
  },
  setup() {},
  computed: {
    articlesData() {
      return this.$store.state.articles;
    },
    tabHeader() {
      return this.$store.state.tabs;
    },
    selectedTab() {
      return this.$store.state.selectedTab;
    }
  },
  methods: {
    /**
     * Fetch articles data
     */
    async getArticles() {
      const { articles } = await this.$httpGet(
        `/articles?limit=${this.pageConfig.limit}&offset=${this.pageConfig.offset}`
      );
      this.$store.commit("setArticles", articles);
    },
    /**
     * Fetch tags data
     */
    async getTags() {
      const { tags } = await this.$httpGet("/tags");
      if (tags.length) this.tags = tags;
    }
  },
  mounted() {
    this.getArticles();
    this.getTags();
  }
});
</script>
<style scoped>
.feed-page .banner {
  background: #5cb85c;
  box-shadow: inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%);
}
.banner {
  color: #fff;
  padding: 4rem;
  margin-bottom: 2rem;
}
</style>
