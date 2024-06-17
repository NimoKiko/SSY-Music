<!--
  功能：发现页面
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年06月07日 16:18:19
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div id="find">
    <!-- 顶部栏 -->
    <topbar class="topbar">
      <!-- 左侧菜单按键 -->
      <template v-slot:left>
        <img src="../../assets/icon/menu.png" alt="">
      </template>
      <!-- 中间功能区 -->
      <template v-slot:middle>
        <input class="search-bar">
          
        </input>
      </template>
      <!-- 右边功能键 -->
      <template v-slot:right>
        <img src="../../assets/icon/mike.png" alt="">
      </template>
    </topbar>
    <!-- 顶部轮播图 -->
    <swiper :bannerList="bannerList"></swiper>
    <div class="title">甄选歌单</div>
    <zhenxuan :recommendList="recommendList"></zhenxuan>

  </div>
</template>

<script setup lang="ts" name="find">
import topbar from "../../components/topbar/topbar.vue";
import swiper from "../../components/swiper/swiper.vue";
import useMusicStore from "@/stores/music";
import zhenxuan from "./cpn/zhenxuan.vue"
import { onMounted } from "vue";

const musicStore = useMusicStore();


onMounted(() => {
  // 获取轮播图
  musicStore.getBanners({
    type: 2,
  });
  // 获取推荐歌单
  musicStore.getRecommendSongList({
    limit: 10,
  });
});

let bannerList = musicStore.bannerList;
let recommendList = musicStore.recommendList
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="less">
#find{
  // border: 1px solid white;
  height: 100%;
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

  .title{
    width: 100%;
    // border: 1px solid red;
    padding-inline-start: 5%;
    color: white;
  }
}
</style>
