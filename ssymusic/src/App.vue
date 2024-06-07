<template>
  <div class="container">
    <!-- 顶部栏 -->
    <topbar class="topbar">
      <!-- 左侧菜单按键 -->
      <template v-slot:left>
        <img src="./assets/icon/menu.png" alt="">
      </template>
      <!-- 中间功能区 -->
      <template v-slot:middle>
        <input class="search-bar">
          
        </input>
      </template>
      <!-- 右边功能键 -->
      <template v-slot:right>
        <img src="./assets/icon/mike.png" alt="">
      </template>
    </topbar>
    <div class="main">
      <router-view></router-view>
    </div>
    <tabbar class="tabbar"></tabbar>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import tabbar from "./components/tabbar/tabbar.vue";
import topbar from "./components/topbar/topbar.vue"
</script>

<style scoped lang="less">
.container {
  background-image: url(./assets/img/bg.jpg);
  // opacity: 0.9;
  height: 100vh;
  // border: 1px solid red;
  overflow: hidden;
  position: relative;
  .topbar{
    img{
      width: 30px;
      height: 30px;
    }
    .search-bar{
      border: 1px solid white;
      width: 90%;
      height: 60%;
      border-radius: 100px;
      background: rgba(225, 225, 225, 0.557);
      border: 0;
      padding-inline-start: 10px;
      color: rgb(255, 255, 255);
    }
  }
  .main{
    // border: 1px solid white;
    height: 100%;
  }
  .tabbar{
    position: absolute;
    bottom: 0;
  }
}
</style>
