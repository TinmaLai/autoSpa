<template>
    <div class="product-list">
        <div class="top-header">
            <div class="header-text">★ BƯỚC 1: RỬA XE ★</div>
            <div class="divider">
                <div class="divider-line"></div>
                <div class="divider-dots">•••</div>
                <div class="divider-line"></div>
            </div>
        </div>
        <div class="list">
            <div class="item" v-for="(item, index) in items" :key="index" @click="showDetail(item.product_id)">
                
                <div class="img-item">
                    <img :src="item.imageUrl"/>
                </div>
                <div class="name-item">
                    {{ item.product_name }}
                </div>
                <div class="original-price-item">
                    {{ item.product_original_price }}
                </div>
                <div class="sale-off-price-item">
                    {{ item.product_sale_price }}
                </div>
                <div class="item-action">
                    <div class="edit-item-btn">Sửa</div>
                    <div class="delete-item-btn">Xóa</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, reactive, ref } from 'vue';
import productApi from '@/apis/productApi.js';
import  {useBaseList} from '../base/baseList.js';

export default {
    name:'ProductList',
    setup(props) {
        // gọi composable base
        const baseList = useBaseList(productApi); 

        const items = ref([]);
        onMounted(async () =>  {
            items.value = await productApi.getProducts();
        })
        // var items = [
        //     {
        //         name: "ALL WHEEL BRIGHTENER",
        //         url: "/src/assets/productList/product-list-0.jpg",
        //         originalPrice: 400000,
        //         saleOffPrice: 350000,
        //         saleOffPercent: 13
        //     },
        //     {
        //         name: "CERAMIX LIQUID WAX",
        //         url: "/src/assets/productList/product-list-1.jpg",
        //         originalPrice: 790000,
        //         saleOffPrice: 690000,
        //         saleOffPercent: 13
        //     },
        //     {
        //         name: "CHAI XỊT VỆ SINH NHỰA",
        //         url: "/src/assets/productList/product-list-2.jpg",
        //         originalPrice: 385000,
        //         saleOffPrice: 299000,
        //         saleOffPercent: 22
        //     },
        //     {
        //         name: "DA FOAM CUTTING DISC",
        //         url: "/src/assets/productList/product-list-3.jpg",
        //         originalPrice: 450000,
        //         saleOffPrice: 450000,
        //         saleOffPercent: 0
        //     },
        //     {
        //         name: "DUNG DỊCH LÀM SẠCH",
        //         url: "/src/assets/favoriteItems/favorite-item-4.jpg",
        //         originalPrice: 1010000,
        //         saleOffPrice: 1010000,
        //         saleOffPercent: 0
        //     },
        //     {
        //         name: "DUNG DỊCH LÀM SẠCH",
        //         url: "/src/assets/favoriteItems/favorite-item-5.jpg",
        //         originalPrice: 1020000,
        //         saleOffPrice: 1020000,
        //         saleOffPercent: 0
        //     },
        //     {
        //         name: "DUNG DỊCH RỬA XE HYPER",
        //         url: "/src/assets/favoriteItems/favorite-item-6.jpg",
        //         originalPrice: 1140000,
        //         saleOffPrice: 1140000,
        //         saleOffPercent: 0
        //     },
        //     {
        //         name: "DUNG DỊCH ĐA NĂNG",
        //         url: "/src/assets/favoriteItems/favorite-item-7.jpg",
        //         originalPrice: 900000,
        //         saleOffPrice: 900000,
        //         saleOffPercent: 0
        //     },

        // ];
        return {
            items,
            ...baseList
        };
    }
};
</script>
<style lang="scss">
.product-list{
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
    .list{
        display: flex;
        gap: 8px;
        width: 1200px;
        height: 100%;
        overflow-x: hidden;
        .item{
            display: flex;
            flex: 0 0 25%;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            .name-item{
                color: white;
                height: 10%;
                padding: 2px;
                text-align: center;
                font-size: 14px;
                width: 100%;
            }
            .img-item{
                height: 75%;
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
                gap: 10px;
                position: absolute;
                top: -10px;
                right: 0px;
                .edit-item-btn{
                    background-color: yellow;
                    color: white;
                    padding: 5px;
                }
                .delete-item-btn{
                    background-color: red;
                    color: black;
                    padding: 5px;
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
}
</style>