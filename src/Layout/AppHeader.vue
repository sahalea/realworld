<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand router-link-exact-active router-link-active" to="/"
        >Conduit</router-link
      >
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link router-link-exact-active active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/signin">Sign In</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/signup">Sign Up</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {}
});
</script>
