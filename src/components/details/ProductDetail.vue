<template>
  <div class="product-detail">
    <div class="product-detail-container">
        <div class="title"><input class="styled-input" :value="product.product_name"></div>
        <div class="product-content">
            <div class="product-image">
                <img :src="product.imageUrl" alt="Product Image" />
                <div class="product-image-details">
                  <img class="detail-item" :src="product.imageUrl" alt="Product Image" />
                  <img class="detail-item" :src="product.imageUrl" alt="Product Image" />
                  <img class="detail-item" :src="product.imageUrl" alt="Product Image" />
                </div>
                <div class="buy-container">
                  <div class="input-section">
                    <span for="quantity">Số lượng:</span>
                    <input type="number" id="quantity" name="quantity" min="1" value="1">
                  </div>
                  <div class="button-section">
                    <button class="buy-button">Mua hàng</button>
                  </div>
                </div>
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
                        {{activeTab ? product.product_description : product.product_specifies}}
                    </div>
                </div>
            </div>
            
        </div>
        <div class="related-product">
          <div class="header">
            Sản phẩm cùng loại
          </div>
          <hr/>
          <div class="related-product-list">
            <div v-for="(item, index) in relatedItems" :key="index" @click="showDetail(item.product_id)" class="item" @mouseover="idHover = item.product_id" @mouseleave="idHover = null">
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
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import {ref, onMounted, getCurrentInstance} from 'vue';
import { useBaseDetail } from '../base/baseDetail.js';
import productApi from '@/apis/productApi.js';
import { useRoute } from 'vue-router';
import FooterPage from '@/components/FooterPage.vue';
import  {useBaseList} from '../base/baseList.js';

export default {
  components: {
    FooterPage
  },
  setup(){
    // gọi base composable
    const baseDetail = useBaseDetail(productApi);
    const baseList = useBaseList(productApi); 
    const route = useRoute();
    const { proxy } = getCurrentInstance();
    const idHover = ref(null);

    const product = ref({
      product_id: Math.random(),
      product_name: proxy.$pl.pTitle,
      imageUrl: proxy.$pl.pImage,
      product_original_price: proxy.$pl.pOPrice,
      product_sale_price: proxy.$pl.pSPrice,
      saleOffPercent: proxy.$pl.pPercent,
      product_description: proxy.$pl.pParagraph,
      product_specifies: 'thong so ' + proxy.$pl.pParagraph
    });
    var relatedItems = [
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
    onMounted(async () =>  {
      // product.value = await baseDetail.loadDetail(route.params.id);
    });
    const activeTab = ref(true);
    const setActiveTab = (tab) => {
      activeTab.value = tab == 0; // Cập nhật giá trị của activeTab
    };
    return {
        product,
        activeTab,
        setActiveTab,
        ...baseDetail,
        relatedItems,
        idHover,
        ...baseList,
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
  .product-detail-container{
    max-width: 1200px;
    width: 100%;
    margin: 10% 0 0 0;
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
    .related-product{
      .header{
        font-size: 24px;
      }
      .related-product-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item{
            display: flex;
            flex: 0 0 24.5%;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            position: relative;
            cursor: pointer;
            margin-bottom: 8px;
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
  display: flex;
  flex: 1;
  flex-direction: column;
  .product-image-details{
    display: flex;
    width: 100%;
    flex: 1;
    justify-content: space-between;
    margin-top: 8px;
    .detail-item{
      width: 32%;
    }
  }
}

.product-image img {
  max-width: 100%;
}
.buy-container {
  display: flex;
  width: 500px;
  padding: 20px;
  justify-content: flex-end;
}

.input-section,
.button-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

input {
  padding: 10px;
  margin: 0 10px;
  border: 1px solid #888;
  border-radius: 5px;
}

.buy-button {
  padding: 10px 20px;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.buy-button:hover {
  background: linear-gradient(135deg, #feb47b, #ff7e5f);
}
.opacity-1{
  opacity: 1;
}
.opacity-0{
  opacity: 0;
}
</style>
