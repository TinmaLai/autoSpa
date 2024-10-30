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
import {ref} from 'vue';

export default {
    name:'FavoriteList',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup(props) {
        const router = useRouter();
        var items = [
            {
                "product_id": "a1c6eb41-8142-4743-9ba7-2f1331431a58",
                "product_name": "ALL WHEEL BRIGHTENER",
                "product_description": "A high-end smartphone with a stunning display.",
                "product_original_price": 699.99,
                "product_sale_price": 649.99,
                "imageUrl": "/src/assets/productList/product-list-0.jpg"
            },
            {
                "product_id": "c61ecf11-ddb3-48e0-a76d-3a3e84e8f85a",
                "product_name": "CERAMIX LIQUID WAX",
                "product_description": "Noise-canceling wireless headphones with crystal clear sound.",
                "product_original_price": 199.99,
                "product_sale_price": 149.99,
                "imageUrl": "/src/assets/productList/product-list-1.jpg"
            },
            {
                "product_id": "ba3d162e-a324-4c10-836f-b380fe37a8bb",
                "product_name": "CHAI XỊT VỆ SINH NHỰA",
                "product_description": "A powerful laptop for gaming with a fast processor and graphics card.",
                "product_original_price": 1299.99,
                "product_sale_price": 1149.99,
                "imageUrl": "/src/assets/productList/product-list-2.jpg"
            },
            {
                "product_id": "5ae52f85-9230-4398-bdbf-505588fb99b1",
                "product_name": "DA FOAM CUTTING DISC",
                "product_description": "Portable Bluetooth speaker with deep bass and long battery life.",
                "product_original_price": 89.99,
                "product_sale_price": 69.99,
                "imageUrl": "/src/assets/productList/product-list-3.jpg"
            },
            {
                "product_id": "3bafd4e2-3d15-47b6-9528-d56d4905e271",
                "product_name": "DUNG DỊCH LÀM SẠCH",
                "product_description": "Stylish smartwatch with multiple health tracking features.",
                "product_original_price": 249.99,
                "product_sale_price": 199.99,
                "imageUrl": "/src/assets/favoriteItems/favorite-item-4.jpg"
            },
            {
                "product_id": "d926a531-4937-41a1-837a-b26f317ad779",
                "product_name": "DUNG DỊCH LÀM SẠCH",
                "product_description": "Large 4K LED TV with smart features and vibrant colors.",
                "product_original_price": 899.99,
                "product_sale_price": 799.99,
                "imageUrl": "/src/assets/favoriteItems/favorite-item-5.jpg"
            },
            {
                "product_id": "b42b5170-360e-4526-87a1-ca93020dff07",
                "product_name": "DUNG DỊCH RỬA XE HYPER",
                "product_description": "Ergonomic wireless mouse with adjustable DPI settings.",
                "product_original_price": 29.99,
                "product_sale_price": 19.99,
                "imageUrl": "/src/assets/favoriteItems/favorite-item-6.jpg"
            },
            {
                "product_id": "90b97738-61a6-4455-ab00-cae2738e3f0a",
                "product_name": "DUNG DỊCH ĐA NĂNG",
                "product_description": "RGB mechanical keyboard with programmable keys.",
                "product_original_price": 99.99,
                "product_sale_price": 79.99,
                "imageUrl": "/src/assets/favoriteItems/favorite-item-7.jpg"
            },
            {
                "product_id": "c0256349-e337-4bad-9444-ed46cdf8c888",
                "product_name": "Fitness Tracker",
                "product_description": "Fitness tracker with heart rate monitor and GPS.",
                "product_original_price": 59.99,
                "product_sale_price": 49.99,
                "imageUrl": "https://example.com/images/fitness_tracker.jpg"
            },
            {
                "product_id": "84cc16cf-1126-449a-8b4b-4298c5dc29ff",
                "product_name": "Portable Charger",
                "product_description": "High capacity portable charger for all your devices.",
                "product_original_price": 39.99,
                "product_sale_price": 29.99,
                "imageUrl": "https://example.com/images/portable_charger.jpg"
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