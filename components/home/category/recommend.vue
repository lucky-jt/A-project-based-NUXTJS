<template>
  <div>
    <div>这是综合页面</div>
    <div class="nav-three">
      <nuxt-link :to="{}">推荐</nuxt-link>
      <nuxt-link :to="{ query: { sort: 'newest' } }">最新</nuxt-link>
      <nuxt-link
        :to="{
          query: { sort: 'three-days-hottest' }
        }"
        >热榜</nuxt-link
      >
    </div>
    <!-- 渲染页面内容 -->
    <div class="content-three">
      <span>{{ this.$route.query.sort }}</span>

      <template v-if="this.$route.query.sort === 'newest'">
        渲染组件-最新
      </template>
      <template v-else-if="this.$route.query.sort === 'three-days-hottest'">
        渲染组件-热榜
      </template>
      <template v-else> 渲染组件-推荐 </template>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped></style>
