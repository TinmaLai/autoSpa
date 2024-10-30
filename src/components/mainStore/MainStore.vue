<template>
    <div class="main-store">
        <div class="container">
            <FavoriteList/>
            <ProductList/>
        </div>
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
    
    background-color: black;
}
.container{
    max-width: 1200px;
    width: 100%;
    margin: 0 auto; 
}
</style>