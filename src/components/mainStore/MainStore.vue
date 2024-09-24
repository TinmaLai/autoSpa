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
    padding: 50px 200px 0 200px;
    display: flex;
    flex-direction: column;
    background-color: black;
}
</style>