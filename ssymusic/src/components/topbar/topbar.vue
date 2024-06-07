<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2024年06月07日 14:20:49
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
<div id="top-bar">
  <div class="left">
    <slot name="left"></slot>
  </div>
  <div class="middle">
    <slot name="middle"></slot>
  </div>
  <div class="right">
    <slot name="right"></slot>
  </div>
</div>
</template>

<script setup lang='ts' name='topbar'>
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style lang="less" scoped>
#top-bar{
  height: .9375rem;
  // border: 1px solid red;
  display: flex;
  .left{
    width: 12%;
    // border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .middle{
    width: 76%;
    // border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right{
    width: 12%;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid blue;
  }
}
</style>
