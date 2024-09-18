<script setup>
import TopNav from '@/components/TopNav.vue';
import Carousel from '@/components/Carousel.vue';
</script>

<template class="main">
  <TopNav/>
  <Carousel/>
</template>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
</style>
