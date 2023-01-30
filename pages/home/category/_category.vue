<template>
  <div>
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
</template>
<script>
export default {}
</script>
<style lang="less" scoped></style>
