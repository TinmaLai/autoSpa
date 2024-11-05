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
        <div class="top-header">
            <div class="header-text">★ BƯỚC 2: SẢN PHẨM LÀM SẠCH XÓA XƯỚC BỀ MẶT SƠN ★</div>
            <div class="divider">
                <div class="divider-line"></div>
                <div class="divider-dots">•••</div>
                <div class="divider-line"></div>
            </div>
        </div>
        <div class="list">
            <div class="item" v-for="(item, index) in items.filter(x => x.step == 2)" :key="index" @click="showDetail(item.product_id)">
                
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
        <div class="top-header">
            <div class="header-text">★ BƯỚC 3: WAX BÓNG BẢO VỆ SƠN ★</div>
            <div class="divider">
                <div class="divider-line"></div>
                <div class="divider-dots">•••</div>
                <div class="divider-line"></div>
            </div>
        </div>
        <div class="list">
            <div class="item" v-for="(item, index) in items.filter(x => x.step == 2)" :key="index" @click="showDetail(item.product_id)">
                
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
        <div class="top-header">
            <div class="header-text">★ BỘ SẢN PHẨM CHĂM SÓC XE ★</div>
            <div class="divider">
                <div class="divider-line"></div>
                <div class="divider-dots">•••</div>
                <div class="divider-line"></div>
            </div>
        </div>
        <div class="list">
            <div class="item" v-for="(item, index) in items.filter(x => x.step == 2)" :key="index" @click="showDetail(item.product_id)">
                
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
        <div class="top-header">
            <div class="header-text">★ DUNG DICH CHĂM SÓC XE ★</div>
            <div class="divider">
                <div class="divider-line"></div>
                <div class="divider-dots">•••</div>
                <div class="divider-line"></div>
            </div>
        </div>
        <div class="list">
            <div class="item" v-for="(item, index) in items.filter(x => x.step == 2)" :key="index" @click="showDetail(item.product_id)">
                
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
import { onMounted, reactive, ref, getCurrentInstance } from 'vue';
import productApi from '@/apis/productApi.js';
import  {useBaseList} from '../base/baseList.js';

export default {
    name:'ProductList',
    setup(props) {
        // gọi composable base
        const baseList = useBaseList(productApi); 

        const { proxy } = getCurrentInstance();

        // const items = ref([]);
        // onMounted(async () =>  {
        //     items.value = await productApi.getProducts();
        // })
        var items = [
        {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent,
                step: 2
            },
            {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent,
                step: 2
            },
            {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent,
                step: 2
            },
            {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent,
                step: 2
            },
            {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent,
                step: 2
            },
            {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent,
                step: 2
            },
            {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent,
                step: 2
            },
            {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent,
                step: 2
            },
            {
                product_id: Math.random(),
                product_name: proxy.$pl.pTitle,
                imageUrl: proxy.$pl.pImage,
                product_original_price: proxy.$pl.pOPrice,
                product_sale_price: proxy.$pl.pSPrice,
                saleOffPercent: proxy.$pl.pPercent,
                step: 2
            }
        ];
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
        margin-bottom: 16px;
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