<template>
    <div class="main-store">
        <FavoriteList/>
        <ProductList/>
    </div>
</template>
<script>
import FavoriteList from '@/components/mainStore/FavoriteList.vue';
import ProductList from '@/components/mainStore/ProductList.vue';
export default {
    components:{
        FavoriteList,
        ProductList
    },
    setup(props) {
        
    }
};
</script>
<style lang="scss">
.main-store{
    padding: 50px 200px 0 200px;
    display: flex;
    flex-direction: column;
    background-color: black;
}
</style>