<template>
 <header>
      <ul>
        <li>
          <NuxtLink to="/home/news">综合</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/home/recomand">文章</NuxtLink>
        </li>
      </ul>
    </header>
</template>
<script>
export default {

}
</script>
<style lang='scss' scoped>
header{
  ul{
    display: flex;
    align-items: center;
    list-style: none;
    li{
      padding: 10px 20px;
    }
  }
}
</style>
