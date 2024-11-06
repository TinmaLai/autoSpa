<template>
  <TopNav/>
  <router-view></router-view>
  <FooterPage/>
</template>
<script>
import TopNav from '@/components/TopNav.vue';
import FooterPage from '@/components/FooterPage.vue';

export default{
  components:{
    TopNav,
    FooterPage,
  }
}
</script>
<style scoped>
</style>
