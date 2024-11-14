<template>
    <div class="cart-modal" v-if="isShowCart" :class="[{'slide-out' : isShowCart},{'slide-in' : !isShowCart}]">
        <div class="modal-header">
            <h2 class="modal-title">GIỎ HÀNG</h2>
            <button @click="hideCartSide" class="close-btn">&times;</button>
        </div>
        <div class="product-list">
            <div class="product">
                <div class="product-image"></div>
                <div class="product-details">
                    <h4 class="product-title">THE VOLTAX | THE RETRACTABLE CAR CHARGER</h4>
                    <p class="product-variant">The VoltaX - Mặc định</p>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <input type="number" class="quantity-input" value="1" min="1">
                        <span class="product-price">730,000₫</span>
                    </div>
                </div>
                <button class="remove-btn">&times;</button>
            </div>
        </div>
        <div calss="cart-footer">
            <div class="total">
                <span>TỔNG TIỀN:</span>
                <span class="product-price">730,000₫</span>
            </div>
            <div class="terms">
                <input type="checkbox" id="terms-checkbox">
                <label for="terms-checkbox">
                    Tôi đồng ý với <a href="#">điều khoản và chính sách</a> của website Branding
                </label>
            </div>
            <button class="btn btn-outline">
                <div class="btn-overlay"></div>
                <span>XEM GIỎ HÀNG</span>
            </button>
            <button class="btn btn-primary">
                <div class="btn-overlay"></div>
                <span>THANH TOÁN</span>
            </button>
        </div>
    </div>
    <div class="cart-overlay" v-if="isShowCart"></div>
</template>
<script>
import { useStore } from 'vuex';
import {computed} from 'vue';

export default {
    setup() {
        const store = useStore();
        const isShowCart = computed(() => store.getters.getIsShowCart);

        function hideCartSide(){
            store.commit('updateIsShowCart', false);
        }
        return{
            hideCartSide,
            isShowCart
        }
    },
}
</script>
<style lang="scss">
.cart-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Màu tối với độ mờ */
    z-index: 3;
    /* Đảm bảo overlay phủ lên toàn bộ trang */
    // display: none;

}
.slide-out{
    animation: modalSlideOut 0.3s forwards;
}
.slide-in{
    animation: modalSlideIn 0.3s forwards;
}
.cart-modal {
    background-color: white;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    top: 0;
    z-index: 4;
    // display: none;
    
    .modal {
        background-color: white;
        width: 100%;
        max-width: 400px;
        height: 100vh;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 10px;
        margin-bottom: 20px;
        // background-color: black;
        margin: -20px -20px 20px -20px;
        padding: 15px 20px;
    }

    .modal-title {
        font-size: 18px;
        font-weight: bold;
        color: black;
    }

    .close-btn {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: black;
    }

    .product-list {
        display: flex;
        flex-direction: column;
        height: 70%;

        .product {
            display: flex;
            gap: 15px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e0e0e0;
        }

        .product-image {
            width: 80px;
            height: 80px;
            background-color: #f0f0f0;
        }

        .product-details {
            flex-grow: 1;
        }

        .product-title {
            font-weight: bold;
            margin: 0 0 5px 0;
        }

        .product-variant {
            font-size: 14px;
            color: #666;
            margin: 0 0 10px 0;
        }

        .product-price {
            font-weight: bold;
            color: #ee4d2d;
        }
    }

    .quantity-input {
        width: 40px;
        padding: 5px;
        margin-right: 10px;
    }

    .remove-btn {
        background: none;
        border: none;
        color: #666;
        cursor: pointer;
    }

    .total {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        margin-top: auto;
        padding-top: 20px;
        border-top: 1px solid #e0e0e0;
    }

    .cart-footer {
        margin: -20px -20px 20px -20px;
        padding: 15px 20px;
        background-color: $primary-color;
    }

    .terms {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        margin: 20px 0;
        font-size: 14px;
    }

    .terms input {
        margin-top: 2px;
    }

    .terms a {
        color: #ee4d2d;
        text-decoration: none;
    }

    .btn {
        display: block;
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        border: none;
        font-weight: bold;
        cursor: pointer;
    }
    
    // linear-gradient(-45deg, #c91f28 50%, transparent 0)
    .btn-outline {
        background: white;
        border: 1px solid #ee4d2d;
        position: relative;

    }
    .btn-outline span{
        color: #ee4d2d;
        z-index: 32424;
        position: relative;
    }
    .btn-outline::after {
        content: "";
        /* Chắc chắn rằng pseudo-element sẽ được tạo ra */
        position: absolute;
        /* Để định vị nó trong phần tử chứa */
        width: 20px;
        /* Chiều rộng của hình vuông */
        height: 20px;
        /* Chiều cao của hình vuông */
        background-color: red;
        /* Màu nền của hình vuông */
        bottom: -1px;
        /* Vị trí bắt đầu từ trên cùng */
        right: 0;
        background: linear-gradient(-45deg, #c91f28 50%, transparent 0);
    }
    .btn-overlay{
        background: linear-gradient(-45deg, #c91f28 90%, transparent 0);
        position: absolute;
        top: 0;
        right: 0; 
        width: 0%; 
        height: 100%;
        z-index: 1;
    }
    .btn-outline:hover .btn-overlay{
        animation: slideIn 0.5s forwards;
    }
    .btn-outline:hover span{
        color: white;
    }
    
    .btn-primary {
        background-color: #ffd700;
        color: black;
        position: relative;
    }

    .btn-primary::after {
        content: "";
        /* Chắc chắn rằng pseudo-element sẽ được tạo ra */
        position: absolute;
        /* Để định vị nó trong phần tử chứa */
        width: 20px;
        /* Chiều rộng của hình vuông */
        height: 20px;
        /* Chiều cao của hình vuông */
        background-color: red;
        /* Màu nền của hình vuông */
        bottom: 0;
        /* Vị trí bắt đầu từ trên cùng */
        right: 0;
        background: linear-gradient(-45deg, #c91f28 50%, transparent 0);
    }
    .btn-primary span{
        color: black;
        z-index: 32424;
        position: relative;
    }
    .btn-primary:hover .btn-overlay{
        animation: slideIn 0.5s forwards;
    }
    .btn-primary:hover span{
        color: white;
    }

    @keyframes slideIn {
        0% {
            width: 0%;
            /* Bắt đầu ngoài phải */
        }

        10% {
            z-index: 1;
            background: linear-gradient(-45deg, #c91f28 90%, transparent 0);
            /* Di chuyển sang phủ đầy */
        }
        100% {
            width: 100%;
            z-index: 1;
            background: linear-gradient(-45deg, #c91f28 100%, transparent 0);
            /* Di chuyển sang phủ đầy */
        }
    }
    @keyframes modalSlideOut {
        from {
            right: -100%;
        }
        to{
            right: 0;
        }
    }
    @keyframes modalSlideIn {
        from {
            right: 0;
        }
        to{
            right: -100%;
        }
    }
}
</style>