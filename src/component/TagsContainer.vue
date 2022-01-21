<template>
  <div class="p-2 bg-gray-100 rounded-md">
    <h4 class="ml-2 mb-4 text-base font-semibold">Popular Tags</h4>
    <ul class="flex flex-wrap">
      <li class="m-1" v-for="item in tags" :key="item" @click="seletTab(item)">
        <el-button round>{{ item }}</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    tags: [Array]
  },
  setup() {},
  methods: {
    seletTab(item) {
      this.test(item);
      this.$store.commit("selectNewtab", item);
    },
    async test(tag) {
      const { articles } = await this.$httpGet(`/articles?limit=10&offset=0&tag=${tag}`);
      this.$store.commit("setArticles", articles);
    }
  }
});
</script>
