<template>
    <div class="cart-modal">
        <div class="modal-header">
            <h2 class="modal-title">GIỎ HÀNG</h2>
            <button class="close-btn">&times;</button>
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
                    Tôi đồng ý với <a href="#">điều khoản và chính sách</a> của website Carmate
                </label>
            </div>
            <button class="btn btn-outline">XEM GIỎ HÀNG</button>
            <button class="btn btn-primary">THANH TOÁN</button>
        </div>
    </div>
    <div class="cart-overlay"></div>
</template>
<script>
export default {
    setup() {

    }
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

.cart-modal {
    background-color: white;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    right: 0;
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
        background-color: black;
        margin: -20px -20px 20px -20px;
        padding: 15px 20px;
    }

    .modal-title {
        font-size: 18px;
        font-weight: bold;
        color: white;
    }

    .close-btn {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: white;
    }

    .product-list {
        display: flex;
        flex-direction: column;
        height: 70%;

        .product {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
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
        color: #ee4d2d;
        position: relative;
        transition: color 1s ease;
        z-index: 2;
    }

    // .btn-outline::after {
    //     content: "";
    //     /* Chắc chắn rằng pseudo-element sẽ được tạo ra */
    //     position: absolute;
    //     /* Để định vị nó trong phần tử chứa */
    //     width: 20px;
    //     /* Chiều rộng của hình vuông */
    //     height: 20px;
    //     /* Chiều cao của hình vuông */
    //     background-color: red;
    //     /* Màu nền của hình vuông */
    //     bottom: 0;
    //     /* Vị trí bắt đầu từ trên cùng */
    //     right: 0;
    //     background: linear-gradient(-45deg, #c91f28 50%, transparent 0);
    // }
    .btn-outline::after{
        content: "XEM GIỎ HÀNG";
        position: absolute;
        top: 0;
        right: 0; /* Đặt ngoài cùng bên phải */
        width: 100%; /* Kích thước phủ sẽ là 100% chiều rộng */
        height: 100%;
        background-color: red;
        animation: slideIn 0.5s forwards;
        z-index: 1;
        display: none;
        transition: left 0.5s ease;
        color: white;
        padding: 10px;

    }
    
    .btn-outline:hover::after{
        display: block;
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

    @keyframes slideIn {
        from {
            width: 0%;
            /* Bắt đầu ngoài phải */
        }

        to {
            width: 100%;
            /* Di chuyển sang phủ đầy */
        }
    }
}
</style>