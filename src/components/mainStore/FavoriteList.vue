<template>
    <div class="favorite-list">
        
        <div class="top-header">
            <div class="header-text">SẢN PHẨM NỔI BẬT</div>
            <div class="divider">
                <div class="divider-line"></div>
                <div class="divider-dots">•••</div>
                <div class="divider-line"></div>
            </div>
        </div>
        <swiper 
        :modules="[Autoplay]" 
        :space-between="8" 
        :slides-per-view="6" 
        class="slide-list"
        >
        <!-- :autoplay="{ delay: 3000, disableOnInteraction: false }" -->
            <swiper-slide v-for="(item, index) in items" :key="index" click="goToDetail" class="slide-item" @mouseover="idHover = item.product_id" @mouseleave="idHover = null">
                <div class="name-item">
                    {{ item.product_name }}
                </div>
                <div class="img-item">
                    <img :src="item.imageUrl"/>
                </div>
                <div class="original-price-item">
                    {{ item.product_original_price }}
                </div>
                <div class="sale-off-price-item">
                    {{ item.product_sale_price }}
                </div>
                <div class="item-action" :class="{ 'opacity-1': idHover === item.product_id, 'opacity-0': idHover !== item.product_id }">
                    <div class="edit-item-btn">Sửa</div>
                    <div class="delete-item-btn">Xóa</div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import {ref, getCurrentInstance} from 'vue';

export default {
    name:'FavoriteList',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup(props) {
        const router = useRouter();

        const { proxy } = getCurrentInstance();

        var items = [
            {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent
            },
            {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent
            },
            {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent
            },
            {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent
            },
            {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent
            },
            {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent
            },
            {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent
            },
            {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent
            },
            {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent
            }
        ];
        const idHover = ref(null);
        function goToDetail(){
            router.push({ name: 'product-detail' });
        }
        return {
            items,
            goToDetail,
            Autoplay,
            idHover,
        };
    }
};
</script>
<style lang="scss">
.favorite-list{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    height: 100%;
    align-items: center;
    .top-header{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 16px;
    }
    .slide-list{
        width: 100%;
        .slide-item{
            display: flex;
            position: relative;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            margin-bottom: 50px;
            cursor: pointer;
            .name-item{
                background-color: #ffc107;
                color: black;
                text-align: center;
                font-size: 12px;
                width: 100%;
                line-height: 30px;
            }
            .img-item{
                height: 60%;
                width: 100%;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .original-price-item{
                color: gray;
            }
            .sale-off-price-item{
                color: red;
            }
            .item-action{
                display: flex;
                .edit-item-btn{
                    flex: 0 40%;
                    max-width: 40%;
                    margin-right: 10px;
                    background-color: yellow;
                    color: black;
                    padding: 5px;
                    width: auto;
                    height: auto;
                }
                .edit-item-btn:hover{
                    animation: shake 0.3s ease-in-out; /* Thêm animation shake */
                }
                .delete-item-btn{
                    flex: 0 40%;
                    max-width: 40%;
                    background-color: red;
                    color: white;
                    padding: 5px;
                    width: auto;
                    height: auto;
                }
                .delete-item-btn:hover{
                    animation: shake 0.3s ease-in-out; /* Thêm animation shake */
                }
            }
        }
    }
    .divider {
        display: flex;
        align-items: center;
        text-align: center;
        width: 500px;
    }
    
    .divider-line {
        flex-grow: 1;
        height: 1px;
        background-color: white;
    }
    
    .divider-dots {
        margin: 0 10px;
        font-size: 20px;
        color: white;
    }
    .opacity-1{
        opacity: 1;
    }
    .opacity-0{
        opacity: 0;
    }
    /* Hiệu ứng rung */
    @keyframes shake {
    0% { transform: translate(0, 0); }
    25% { transform: translate(-5px, 0); }
    50% { transform: translate(5px, 0); }
    75% { transform: translate(-5px, 0); }
    100% { transform: translate(0, 0); }
    }
}
</style>