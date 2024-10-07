<script setup>
import TopNav from '@/components/TopNav.vue';
import Carousel from '@/components/Carousel.vue';
import MainStore from '@/components/mainStore/MainStore.vue';
import ProductDetail from '@/components/details/ProductDetail.vue';

</script>

<template>
  <div class="main">
    <TopNav/>
    <Carousel/>
    <MainStore/>
    <router-view></router-view>
    <!-- <ProductDetail/> -->
  </div>
</template>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
</style>
