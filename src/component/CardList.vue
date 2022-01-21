<template>
  <div v-for="(item, index) in articles" :key="index" class="list">
    <div class="feed-card border-b px-2 py-3">
      <div class="feed-card-header flex items-center">
        <el-avatar :src="item.author.image" size="20" class="mr-3">
          <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          />
        </el-avatar>
        <div class="flex flex-col flex-1">
          <h1>
            <router-link :to="myArticleHref(item)">
              {{ item.author.username }}
            </router-link>
          </h1>
          <p class="text-gray-400 text-xs">{{ filterDate(item.createdAt) }}</p>
        </div>
        <div class="feed-card-likes rounded-md px-3 py-1">
          <i></i>
          <span class="text-sm">{{ item.favoritesCount }}</span>
        </div>
      </div>
      <div class="py-3">
        <h1 class="text-xl mb-1 cursor-pointer" @click="navigate(item)">
          {{ item.title }}
        </h1>
        <p class="text-sm text-gray-500">
          {{ item.description }}
        </p>
      </div>
      <div class="flex items-center">
        <a href="" class="flex-1 text-gray-400 text-sm">Read more...</a>
        <div class="feed-card-tags flex items-center flex-wrap">
          <el-tag
            v-for="tag in item.tagList"
            :key="tag"
            class="ml-2"
            type="info"
          >
            {{ tag }}
          </el-tag>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import moment from 'moment';

export default defineComponent({
  props: {
    articles: [Array],
  },
  setup() {},
  methods: {
    /**
     * Filter the date
     */
    filterDate(date) {
      return moment(date).format('DD-MM-YYYY HH:MM');
    },
    myArticleHref(row) {
      return `/article/${row.author.username}`;
    },
    navigate(item) {
      this.$router.push(`/article/detail/${item.slug}`);
    },
  },
});
</script>

<style scoped>
.list {
  padding: 1.5rem 0;
}
.list .user-details {
  display: block;
  position: relative;
  font-weight: 300;
}
.list img {
  display: inline-block;
  vertical-align: middle;
  height: 32px;
  width: 32px;
  border-radius: 30px;
}

.avatar {
  width: 50px;
  height: 50px;
}

.feed-card-likes {
  border: 1px solid #5cb85b;
  color: #5cb85b;
}
</style>
