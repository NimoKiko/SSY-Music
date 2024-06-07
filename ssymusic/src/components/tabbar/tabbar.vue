<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年06月06日 15:22:37
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div id="tabbar">
    <tab-item @click="gotoRoute('/find')">
      <template v-slot:img>
        <img class="img" src="../../assets/icon/music.png" alt="" />
      </template>
      <template v-slot:text>
        <span class="text"> 发现 </span>
      </template>
    </tab-item>
    <tab-item @click="gotoRoute('/mine')">
      <template v-slot:img>
        <img class="img" src="../../assets/icon/mine.png" alt="" />
      </template>
      <template v-slot:text>
        <span class="text"> 我 </span>
      </template>
    </tab-item>
  </div>
</template>

<script setup lang="ts" name="tabbar">
import tabItem from "./tabItem.vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter()

function gotoRoute(str:string) {
  router.push(str)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="less">
#tabbar {
  width: 100%;
  height: 1.4rem;
  // border: 1px solid red;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  backdrop-filter: blur(5px);
  background-color: rgba(181, 181, 181, 0.5); /* 半透明的白色背景 */
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* 添加一些阴影 */
  .img {
    width: 35px;
    height: 35px;
    // border: 1px solid red;
  }
  .text {
    font-size: 14px;
  }
}
</style>
