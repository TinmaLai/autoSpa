<template>
  <div class="main">
    <Carousel/>
    <MainStore/>
  </div>
</template>
<script>
import Carousel from '@/components/Carousel.vue';
import MainStore from '@/components/mainStore/MainStore.vue';
export default {
    name: 'Home',
    components: {
        Carousel,
        MainStore,
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
