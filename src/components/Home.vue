<template>
  <div class="main">
    <Carousel/>
    <MainStore/>
    <FooterPage/>
  </div>
</template>
<script>
import Carousel from '@/components/Carousel.vue';
import MainStore from '@/components/mainStore/MainStore.vue';
import FooterPage from '@/components/FooterPage.vue';
export default {
    name: 'Home',
    components: {
        Carousel,
        MainStore,
        FooterPage,
    }
}
</script>
<style scoped>
.main{
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
</style>
