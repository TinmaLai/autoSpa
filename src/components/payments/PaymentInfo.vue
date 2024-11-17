<template>
    <div class="payment-info">
        <button class="mobile-cart-toggle" onclick="toggleCart()">
            Xem giỏ hàng
        </button>

        <div class="container">
            <div class="checkout-form">
                <div class="logo">Carmate</div>

                <h3>Thông tin giao hàng</h3>
                <div class="form-group">
                    <label>Họ và tên</label>
                    <input type="text" class="form-control" value="gwg">
                </div>

                <div class="form-group">
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <div style="flex: 2; min-width: 200px;">
                            <label>Email</label>
                            <input type="email" class="form-control" value="grg">
                        </div>
                        <div style="flex: 1; min-width: 150px;">
                            <label>Số điện thoại</label>
                            <input type="tel" class="form-control" value="12313123">
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label>Địa chỉ</label>
                    <input type="text" class="form-control" value="3rewfeg">
                </div>

                <div class="address-grid">
                    <div class="form-group">
                        <label>Tỉnh/thành</label>
                        <select class="form-control">
                            <option>Chọn tỉnh/thành</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Quận/huyện</label>
                        <select class="form-control">
                            <option>Chọn quận/huyện</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Phường/xã</label>
                        <select class="form-control">
                            <option>Chọn phường/xã</option>
                        </select>
                    </div>
                </div>

                <div class="shipping-method">
                    <img :src="$pl.pImage" alt="shipping icon">
                    <p>Vui lòng chọn tỉnh/thành để có danh sách phương thức vận chuyển</p>
                </div>

                <div class="payment-methods">
                    <!-- <div class="payment-option">
                        <input type="radio" name="payment" checked>
                        <img :src="$pl.pImage" alt="COD">
                        <span>Thanh toán khi giao hàng (COD)</span>
                    </div>
                    <div class="payment-option">
                        <input type="radio" name="payment">
                        <img :src="$pl.pImage" alt="Bank">
                        <span>Chuyển khoản ngân hàng</span>
                    </div>
                    <div class="payment-option">
                        <input type="radio" name="payment">
                        <img :src="$pl.pImage" alt="VNPAY">
                        <span>Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY</span>
                    </div> -->
                </div>
            </div>

            <div class="cart-summary">
                <div class="cart-items">
                    <div class="cart-item">
                        <img :src="$pl.pImage" alt="Product">
                        <div class="cart-item-details">
                            <h4>The VehiX | The Retractable Car</h4>
                            <p>The VehiX - Mắc đỉnh</p>
                            <p class="price">730,000₫</p>
                        </div>
                    </div>
                    <!-- More cart items... -->
                </div>

                <div class="voucher-input">
                    <input type="text" class="form-control" placeholder="Mã giảm giá">
                    <button class="btn btn-primary">Sử dụng</button>
                </div>

                <div class="discount-tags">
                    <span class="discount-tag">Giảm 50,000₫</span>
                    <span class="discount-tag">Giảm 100,000₫</span>
                    <span class="discount-tag">Giảm 20,000₫</span>
                </div>

                <div class="total-section">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <span>Tạm tính</span>
                        <span>2,390,000₫</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <span>Phí vận chuyển</span>
                        <span>--</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-weight: bold;">
                        <span>Tổng cộng</span>
                        <span>2,390,000₫</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getCurrentInstance } from 'vue';
export default {
    setup() {
        const { proxy } = getCurrentInstance();
    }
}
</script>
<style lang="scss">
.payment-info {
    margin: 10% auto;
    .container {
        display: flex;
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .checkout-form {
        flex: 2;
        background: white;
        padding: 20px;
        border-radius: 8px;
    }

    .cart-summary {
        flex: 1;
        background: white;
        padding: 20px;
        border-radius: 8px;
        height: fit-content;
    }

    .logo {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    .form-group label {
        display: block;
        margin-bottom: 5px;
        color: #666;
    }

    .form-control {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .address-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }

    .shipping-method {
        margin: 20px 0;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 4px;
        text-align: center;
    }

    .payment-methods {
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .payment-option {
        padding: 15px;
        border-bottom: 1px solid #ddd;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .payment-option:last-child {
        border-bottom: none;
    }

    .cart-item {
        display: flex;
        gap: 15px;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #eee;
    }

    .cart-item img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 4px;
    }

    .cart-item-details h4 {
        margin: 0;
        font-size: 14px;
    }

    .cart-item-details p {
        color: #666;
        font-size: 13px;
    }

    .price {
        color: #000;
        font-weight: bold;
    }

    .voucher-input {
        display: flex;
        gap: 10px;
        margin: 20px 0;
    }

    .btn {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        white-space: nowrap;
    }

    .btn-primary {
        background: #2196F3;
        color: white;
    }

    .total-section {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #eee;
    }

    .discount-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 10px 0;
    }

    .discount-tag {
        background: #e3f2fd;
        color: #1976d2;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
    }

    .mobile-cart-toggle {
        display: none;
        width: 100%;
        padding: 10px;
        background: #2196F3;
        color: white;
        text-align: center;
        border-radius: 4px;
        margin-bottom: 15px;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .container {
            flex-direction: column;
        }

        .mobile-cart-toggle {
            display: block;
        }

        .cart-summary {
            display: none;
        }

        .cart-summary.show {
            display: block;
        }

        .address-grid {
            grid-template-columns: 1fr;
        }

        .checkout-form {
            padding: 15px;
        }

        .payment-option {
            flex-wrap: wrap;
        }

        .voucher-input {
            flex-direction: column;
        }

        .btn {
            width: 100%;
        }
    }

    @media (max-width: 480px) {
        body {
            padding: 10px;
        }

        .logo {
            font-size: 20px;
        }

        .cart-item {
            flex-direction: column;
        }

        .cart-item img {
            width: 100%;
            height: auto;
        }
    }

    /* Tablet Optimization */
    @media (min-width: 769px) and (max-width: 1024px) {
        .container {
            gap: 20px;
        }

        .checkout-form,
        .cart-summary {
            padding: 15px;
        }

        .payment-option {
            padding: 10px;
        }
    }

    /* Sticky Cart Summary for Desktop */
    @media (min-width: 769px) {
        .cart-summary {
            position: sticky;
            top: 20px;
        }
    }
}
</style>