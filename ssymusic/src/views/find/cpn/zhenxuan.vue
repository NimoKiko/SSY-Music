<!--
  功能：甄选歌单组件
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年06月17日 10:34:00
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div id="zx">
    <div
      class="zx-list-box"
      v-for="item in recommendList"
      @click="gotoDetail(item.id)"
    >
      <img class="img" :src="item.picUrl" alt="" />
      <img class="play-icon" src="../../../assets/icon/play.png" alt="" />
      <img class="headset-icon" src="../../../assets/icon/Headset.png" alt="" />
      <span class="play-count">{{ playCount(item.playCount) }}</span>
      <span class="text">{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts" name="zx">
import { useRouter } from "vue-router";
let props = defineProps(["recommendList"]);

let router = useRouter();

let playCount = function (num: number) {
  let count = (num / 10000).toFixed(0);

  return `${count}万`;
};

let gotoDetail = function (id: string) {
  console.log(id);
  router.push({ path: "/detail", query: { id: id } });
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style lang="less" scoped>
#zx {
  height: 16%;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  white-space: nowrap;
  scrollbar-width: none; /* Firefox */

  .zx-list-box {
    flex: 0 0 auto; /* 不压缩内容的宽度 */
    margin-left: 12px;
    margin-right: 12px;
    width: 100px;
    height: 120px;
    display: flex;
    flex-direction: column;
    position: relative;

    .img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 0 10px rgb(137, 137, 137);
    }
    .play-icon {
      position: absolute;
      right: 5px;
      top: 65%;
      width: 15px;
    }
    .headset-icon {
      position: absolute;
      left: 5px;
      top: 2%;
      width: 15px;
    }
    .play-count {
      color: white;
      font-size: 10px;
      position: absolute;
      left: 25%;
      top: 2%;
    }
    .text {
      margin-top: 5px;
      font-size: 12px;
      white-space: nowrap; /* 防止文本换行 */
      overflow: hidden; /* 隐藏超出容器的内容 */
      text-overflow: ellipsis; /* 超出部分用省略号表示 */
      color: white;
    }
  }
}
</style>
