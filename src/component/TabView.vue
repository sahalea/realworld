<template>
  <div class="tab-header">
    <ul class="nav nav-pills outline-active">
      <li v-for="(item, index) in tabItems" :key="item" class="nav-item" @click="selectTab(index)">
        <a class="nav-link" v-bind:class="{ active: index === selectedTab }">
          {{ item }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    tabItems: [Array],
    selectedTab: Number
  },
  setup() {},
  methods: {
    selectTab(index) {
      this.$store.commit("setTabIndex", index);
      if (index === 0) {
        this.$router.go(this.$router.currentRoute);
      }
    }
  }
});
</script>

<style scoped>
.tab-header {
  margin-bottom: -1px;
}
</style>
