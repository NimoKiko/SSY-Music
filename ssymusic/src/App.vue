<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import tabbar from "./components/tabbar/tabbar.vue";
</script>

<template>
  <div class="container">
    <tabbar class="tabbar"></tabbar>
  </div>
</template>

<style scoped lang="less">
.container {
  height: 100vh;
  border: 1px solid red;
  position: relative;

  .tabbar{
    position: absolute;
    bottom: 0;
  }
}
</style>
