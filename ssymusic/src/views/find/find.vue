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
    <!-- 顶部轮播图 -->
    <swiper :bannerList="bannerList"></swiper>
  </div>
</template>

<script setup lang="ts" name="find">
import swiper from "../../components/swiper/swiper.vue";
import useMusicStore from "@/stores/music";
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="less"></style>
