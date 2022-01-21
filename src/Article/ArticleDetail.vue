<template>
  <div class="feed-page">
    <div class="banner w-full">
      <div class="container">
        <h1 class="text-5xl font-bold">{{ article.title }}</h1>
        <div class="flex mt-8">
          <el-avatar :src="getImage()" size="50" class="mr-3" />
          <div class="flex flex-col">
            <h1>
              {{ getUserName() }}
            </h1>
            <p class="text-gray-400 text-xs">{{ article.createdAt }}</p>
          </div>
          <div class="ml-12">
            <el-button style="background: transparent" color="#FFF" plain>Follow Gerome </el-button>
            <el-button
              type="success"
              style="border-color: #5cb85c; background: transparent; color: #fff"
              plain
              >{{ favCount() }}</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container h-screen">
      <div class="w-full">
        <div class="list">
          <div class="feed-card border-b px-2 py-3">
            <div class="py-3">
              <p class="text-sm text-gray-500">
                {{ article.description }}
              </p>
              <div class="feed-card-tags mt-12">
                <el-tag v-for="tag in article.tagList" :key="tag" type="info">{{ tag }}</el-tag>
              </div>
            </div>
          </div>
        </div>
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
      article: {}
    };
  },
  setup() {},
  methods: {
    /**
     * Fetch article details by slug
     */
    async getArticleDetail() {
      const { article } = await this.$httpGet(`/articles/${this.$route.params.slug}`);
      this.article = article;
    },
    getUserName() {
      return this.article.author ? this.article.author.username : "";
    },
    getImage() {
      return this.article.author
        ? this.article.author.image
        : "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png";
    },
    favCount() {
      return `Favorite Article (${this.article.favoritesCount})`;
    }
  },
  mounted() {
    this.getArticleDetail();
  }
});
</script>
<style scoped>
.banner {
  color: #fff;
  padding: 2rem;
  margin-bottom: 2rem;
}
</style>
