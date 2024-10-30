<template>
  <div class="product-detail">
    <div class="product-detail-container">
        <div class="title"><input class="styled-input" :value="product.product_name"></div>
        <div class="product-content">
            <div class="product-image">
                <img :src="product.imageUrl" alt="Product Image" />
            </div>
            <div class="product-description">
                <div class="product-detail-price">
                  Giá: <span class="origin-price"><input class="styled-input" :value="product.product_original_price"> VNĐ</span>
                  <span class="sale-price"><input class="styled-input" :value="product.product_sale_price"> VNĐ</span>
                </div>
                <div class="description-panel">
                    <div class="description-tabs">
                        <div @click="setActiveTab(0)" class="des-tab" :class="{ active: activeTab}">MÔ TẢ</div>
                        <div @click="setActiveTab(1)" class="specifies-tab" :class="{ active: !activeTab}">THÔNG SỐ</div>
                    </div>
                    <div class="description-body">
                        {{activeTab ? product.product_description : product.specifies}}
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue';
import { useBaseDetail } from '../base/baseDetail.js';
import productApi from '@/apis/productApi.js';
import { useRoute } from 'vue-router';

export default {
  setup(){
    // gọi base composable
    const baseDetail = useBaseDetail(productApi);
    const route = useRoute();

    const product = ref({});

    onMounted(async () =>  {
      product.value = await baseDetail.loadDetail(route.params.id);
    });
    const activeTab = ref(true);
    const setActiveTab = (tab) => {
      activeTab.value = tab == 0; // Cập nhật giá trị của activeTab
    };
    return {
        product,
        activeTab,
        setActiveTab,
        ...baseDetail
    }
  }
};
</script>

<style lang="scss" scoped>
.active {
    background-color: black !important;
}
.product-detail {
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .product-detail-container{
    width: 1000px;
    background-color: #252525;
    padding: 20px;
    color: white;
    .title{
        input{
          color: #ffc107;
          font-size: 22px;
          margin-bottom: 16px;
        }
    }
    .product-description {
        flex: 1;
        padding-left: 20px;
        .origin-price{
            text-decoration: line-through;
            color: #FF0;
            margin-right: 8px;
        }
        .sale-price{
            color: #F00;
            font-size: 16px;
        }
        
        .product-detail-price{
            margin-bottom: 16px;
        }
        .description-panel{
            .description-tabs{
                display: flex;
                flex-direction: row;
                gap: 10px;
                
                .des-tab{
                    color: white;
                    background-color: #ffc107;
                    padding: 10px;
                    cursor: pointer;
                }
                .specifies-tab{
                    color: white;
                    background-color: #ffc107;
                    padding: 10px;
                    cursor: pointer;
                }
            }
            .description-body{
                line-height: 30px;
                background-color: black;
                padding: 16px;
            }
        }
    }
    
  }
  /* Style cho ô input */
  .styled-input {
    width: auto;
    padding: 5px;
    border: 1px solid rgba(255, 255, 255, 0.4); /* Viền mờ trong suốt */
    background-color: rgba(255, 255, 255, 0.1); /* Nền trong suốt nhẹ */
    color: #ffffff; /* Màu chữ trắng */
    border-radius: 8px;
    outline: none;
    font-size: 14px;
    transition: 0.3s ease;
  }

  /* Hiệu ứng khi hover và focus */
  .styled-input:hover,
  .styled-input:focus {
      border-color: rgba(255, 255, 255, 0.7);
      background-color: rgba(255, 255, 255, 0.15);
  }

  /* Placeholder style */
  .styled-input::placeholder {
      color: rgba(255, 255, 255, 0.6);
  }
  
}
.product-content {
  display: flex;
}
.product-image {
  flex: 1;
}

.product-image img {
  max-width: 100%;
}
</style>
