<template>
  <div class="category-id">
    <div class="left">
      <template v-if="this.$route.params.category == ':recommend'">
        <h3>{{ this.$route.params }}</h3>
        <HomeCategoryRecommend></HomeCategoryRecommend>
      </template>
      <template v-if="this.$route.params.category == ':following'">
        <h3>{{ this.$route.params }}</h3>
        <HomeCategoryFollowing></HomeCategoryFollowing>
        <following></following>
      </template>
    </div>
    <div class="right">
      <Aside></Aside>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.category-id {
  display: flex;
  justify-content: center;

  .left {
    flex: 5;
    background-color: pink;
  }
  .right {
    flex: 2;
    margin-left: 30px;
  }
}
</style>
