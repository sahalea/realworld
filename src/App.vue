<template>
  <div id="app" class="w-full h-full">
    <AppHeader />
    <router-view class="view" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./Layout/AppHeader.vue";
import AppFooter from "./Layout/AppFooter.vue";
export default {
  components: { AppHeader, AppFooter },
  name: "App"
};
</script>
<style lang="postcss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
:root {
  --color-white: #fff;
  --color-primary: #703a95;
  --color--primary-text: #333;
}
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
}
body,
html {
  font-size: 14px;
  font-weight: normal;
  color: var(--color--primary-text);
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
a {
  color: #333;
  text-decoration: none;
}
* {
  box-sizing: border-box;
}
*:before,
*:after {
  margin: 0;
  box-sizing: border-box;
}
.sub-text {
  color: #5cb85c;
  text-decoration: none;
}
</style>
