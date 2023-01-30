<template>
<div class="category">
  <!-- <h2>这是首页内容</h2> -->
  <div class="nav-two">
    <nuxt-link to="/home/category/:recommend">综合</nuxt-link>
  <nuxt-link to="/home/category/:following">关注</nuxt-link>
  </div>
  <nuxt-child class="child"></nuxt-child>
</div>
</template>

<style lang="less" scoped>
.category{
  margin-bottom: 30px;

  .nav-two{
  width: 100%;
  padding-left: 300px;
  height: 50px;
  line-height: 50px;
  background-color: #fff;

}
  .child{
    width: 1000px;
    margin: 0 auto;
    background-color: #fff;
  }
}
</style>

