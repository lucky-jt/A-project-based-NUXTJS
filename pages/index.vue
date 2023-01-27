<template>
<div>
      内容
    </div>
</template>

<script >
import Vue from 'vue'
export default Vue.extend({
  layout:'default',
  asyncData({ redirect }) {
    redirect('/home')
  }
})
</script>

