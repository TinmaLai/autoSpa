<template>
  <div class="product-detail">
    <div class="product-detail-container">
        <div class="title">{{ product.name }}</div>
        <div class="product-content">
            <div class="product-image">
                <img :src="product.image" alt="Product Image" />
            </div>
            <div class="product-description">
                <div class="product-detail-price">Giá: <span class="origin-price">{{product.originPrice}} VNĐ</span><span class="sale-price">{{product.salePrice}} VNĐ</span></div>
                <div class="description-panel">
                    <div class="description-tabs">
                        <div @click="setActiveTab(0)" class="des-tab" :class="{ active: activeTab}">MÔ TẢ</div>
                        <div @click="setActiveTab(1)" class="specifies-tab" :class="{ active: !activeTab}">THÔNG SỐ</div>
                    </div>
                    <div class="description-body">
                        {{activeTab ? product.description : product.specifies}}
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
  setup(){
    const activeTab = ref(true);
    const product = {
        name: "ALL WHEEL BRIGHTENER/ TẨY LAZANG G9524",
        image: "/src/assets/productList/product-list-0.jpg",
        originPrice: 420000,
        salePrice: 350000,
        description: "Sản phẩm chuyên dụng để vệ sinh làm sạch tất cả các bề mặt lazang, giúp tẩy sạch bụi bẩn, muội phanh màng bám lâu ngày, lấy lại vẻ sáng bóng tự nhiên cho lazang, dễ dàng sử dụng với bàn chải chuyên dụng. Hướng dẫn sử dụng: làm ướt bề mặt lazang và loại bỏ bùn đất với nước, xịt một lượng dung dịch vừa đủ lên bề mặt cần làm sạch, sau đó dùng bàn chải vệ sinh và xịt lại bằng nước cho đến khi lazang sạch bóng. Nên sử dụng sản phẩm mỗi khi rửa xe để có hiệu quả cao.",
        specifies: "Thông số chi tiết"
    };
    const setActiveTab = (tab) => {
      activeTab.value = tab == 0; // Cập nhật giá trị của activeTab
    };
    return {
        product,
        activeTab,
        setActiveTab
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
        color: #ffc107;
        font-size: 22px;
        margin-bottom: 16px;
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
