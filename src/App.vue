<template>
  <TopNav/>
  <router-view></router-view>
  <CartSide/>
  <FooterPage/>
</template>
<script>
import TopNav from '@/components/TopNav.vue';
import FooterPage from '@/components/FooterPage.vue';
import CartSide from './components/carts/CartSide.vue';

export default{
  components:{
    TopNav,
    FooterPage,
    CartSide
  }
}
</script>
<style scoped>
</style>
