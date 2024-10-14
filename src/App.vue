<template>
  <TopNav/>
  <router-view></router-view>
</template>
<script>
import TopNav from '@/components/TopNav.vue';
export default{
  components:{
    TopNav
  }
}
</script>
<style scoped>
</style>
