<template>

</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  layout:'default',
  asyncData({ redirect }) {
    redirect('/home/category/:recommend')
  }
})
</script>
<style >

</style>
