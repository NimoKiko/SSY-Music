<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年06月07日 16:16:16
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <swiper id="swiper" :slides-per-view="1" :space-between="100">
    <swiper-slide class="swiper-item" v-for="item in bannerList"
      ><img :src="item.imageUrl" alt=""
    /></swiper-slide>
  </swiper>
</template>

<script setup lang="ts" name="swiper">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

let props = defineProps(["bannerList"]);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style lang="less" scoped>
#swiper {
  // border: 1px solid white;
  display: flex;
  height: 18vh;
  .swiper-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    // border: 1px solid red;
    width: 90%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgb(121, 121, 121)
  }
}
</style>
