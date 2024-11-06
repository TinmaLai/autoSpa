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
            <div class="item" v-for="(item, index) in items" :key="index" @click="showDetail(item.product_id)" @mouseover="idHover = item.product_id" @mouseleave="idHover = null">
                <div class="overlay" :class="{ 'opacity-1': idHover === item.product_id, 'opacity-0': idHover !== item.product_id }"></div>
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
                <div class="item-action" :class="{ 'opacity-1': idHover === item.product_id, 'opacity-0': idHover !== item.product_id }">
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
            <div class="item" v-for="(item, index) in items.filter(x => x.step == 2)" :key="index" @click="showDetail(item.product_id)" @mouseover="idHover = item.product_id" @mouseleave="idHover = null">
                <div class="overlay" :class="{ 'opacity-1': idHover === item.product_id, 'opacity-0': idHover !== item.product_id }"></div>
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
                <div class="item-action" :class="{ 'opacity-1': idHover === item.product_id, 'opacity-0': idHover !== item.product_id }">
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
            <div class="item" v-for="(item, index) in items.filter(x => x.step == 2)" :key="index" @click="showDetail(item.product_id)" @mouseover="idHover = item.product_id" @mouseleave="idHover = null">
                <div class="overlay" :class="{ 'opacity-1': idHover === item.product_id, 'opacity-0': idHover !== item.product_id }"></div>
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
                <div class="item-action" :class="{ 'opacity-1': idHover === item.product_id, 'opacity-0': idHover !== item.product_id }">
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
            <div class="item" v-for="(item, index) in items.filter(x => x.step == 2)" :key="index" @click="showDetail(item.product_id)" @mouseover="idHover = item.product_id" @mouseleave="idHover = null">
                <div class="overlay" :class="{ 'opacity-1': idHover === item.product_id, 'opacity-0': idHover !== item.product_id }"></div>
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
                <div class="item-action" :class="{ 'opacity-1': idHover === item.product_id, 'opacity-0': idHover !== item.product_id }">
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
            <div class="item" v-for="(item, index) in items.filter(x => x.step == 2)" :key="index" @click="showDetail(item.product_id)" @mouseover="idHover = item.product_id" @mouseleave="idHover = null">
                <div class="overlay" :class="{ 'opacity-1': idHover === item.product_id, 'opacity-0': idHover !== item.product_id }"></div>
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
                <div class="item-action" :class="{ 'opacity-1': idHover === item.product_id, 'opacity-0': idHover !== item.product_id }">
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
        const idHover = ref(null);

        return {
            items,
            ...baseList,
            idHover,
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
            flex: 0 0 24.5%;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            position: relative;
            cursor: pointer;
            .overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                box-shadow: 
        inset 0 0 15px rgba(255, 80, 0, 1),    /* Lớp cam đậm */
        inset 0 0 30px rgba(255, 120, 0, 0.9), /* Lớp cam sáng hơn */
        inset 0 0 50px rgba(255, 180, 0, 0.7), /* Lớp vàng mạnh hơn */
        inset 0 0 80px rgba(255, 255, 0, 0.5); /* Lớp vàng lan tỏa */
                pointer-events: none; /* Cho phép nhấp vào ảnh mà không bị lớp phủ chặn */
            }
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
                text-decoration: line-through;
            }
            .sale-off-price-item{
                color: red;
                font-size: 18px;
            }
            .item-action{
                display: flex;
                gap: 10px;
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
    .opacity-1{
        opacity: 1;
    }
    .opacity-0{
        opacity: 0;
    }
}
</style>