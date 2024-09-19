<template>
    <div class="main-store">
        <FavoriteList/>
    </div>
</template>
<script>
import FavoriteList from '@/components/mainStore/FavoriteList.vue';
export default {
    components:{
        FavoriteList
    },
    setup(props) {
        
    }
};
</script>
<style lang="scss">
.main-store{
    padding: 0 200px 0 200px;
    display: flex;
    flex-direction: column;
    height: 306px;
    background-color: black;
}
</style>