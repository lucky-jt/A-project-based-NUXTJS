<template>
  <div class="error">
    <div v-if="error.statusCode == 404">
      <h2>404 页面不存在 </h2>
      <h2>{{error.message}}</h2>
    </div>
    <div v-else>
      应用程序错误
    </div>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="less" scoped>
.error{
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
