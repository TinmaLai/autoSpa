<template>
    <div class="payment-info">
        <div class="container">
            <h1>Carmate</h1>
            <div class="grid">
                <div class="main-content">
                    <div class="card">
                        <h2>Thông tin giao hàng</h2>
                        <form>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="name">Họ và tên</label>
                                    <input type="text" id="name" name="name" required>
                                </div>
                                <div class="form-group">
                                    <label for="phone">Số điện thoại</label>
                                    <input type="text" id="phone" name="phone" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="address">Địa chỉ</label>
                                <input type="text" id="address" name="address" required>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="province">Tỉnh / thành</label>
                                    <select id="province" name="province" required>
                                        <option value="">Chọn tỉnh / thành</option>
                                        <option value="hanoi">Hà Nội</option>
                                        <option value="hcm">TP. Hồ Chí Minh</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="district">Quận / huyện</label>
                                    <select id="district" name="district" required>
                                        <option value="">Chọn quận / huyện</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="ward">Phường / xã</label>
                                <select id="ward" name="ward" required>
                                    <option value="">Chọn phường / xã</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="card">
                        <h2>Phương thức vận chuyển</h2>
                        <div class="shipping-methods">
                            <p>Vui lòng chọn tỉnh / thành để có danh sách phương thức vận chuyển</p>
                        </div>
                    </div>
                    <div class="card">
                        <h2>Phương thức thanh toán</h2>
                        <div class="payment-method">
                            <input type="radio" id="cod" name="payment" value="cod">
                            <label for="cod">Thanh toán khi giao hàng (COD)</label>
                        </div>
                        <div class="payment-method">
                            <input type="radio" id="bank" name="payment" value="bank">
                            <label for="bank">Chuyển khoản ngân hàng</label>
                        </div>
                    </div>
                </div>
                <div class="sidebar">
                    <div class="card order-summary">
                        <h2>Đơn hàng</h2>
                        <div class="summary-row">
                            <span>Tạm tính</span>
                            <span>2,390,000₫</span>
                        </div>
                        <div class="summary-row">
                            <span>Phí vận chuyển</span>
                            <span>—</span>
                        </div>
                        <div class="summary-row total">
                            <span>Tổng cộng</span>
                            <span>2,390,000₫</span>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Mã giảm giá">
                        </div>
                        <button class="button">Sử dụng</button>
                        <div class="discount-buttons">
                            <button class="discount-button">Giảm 50,000₫</button>
                            <button class="discount-button">Giảm 100,000₫</button>
                            <button class="discount-button">Giảm 20,000₫</button>
                        </div>
                        <button class="button">Hoàn tất đơn hàng</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.payment-info {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    h1,
    h2 {
        margin-bottom: 20px;
    }

    .grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 20px;
    }

    .card {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 20px;
        margin-bottom: 20px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }

    input[type="text"],
    input[type="email"],
    select {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }

    .shipping-methods {
        border: 2px dashed #ddd;
        border-radius: 8px;
        padding: 20px;
        text-align: center;
        color: #888;
    }

    .payment-method {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .payment-method input[type="radio"] {
        margin-right: 10px;
    }

    .order-summary {
        background-color: #f9f9f9;
    }

    .summary-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .total {
        font-weight: bold;
    }

    .discount-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 10px;
    }

    .discount-button {
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px 10px;
        font-size: 0.9em;
        cursor: pointer;
    }

    .button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
        width: 100%;
    }

    @media (max-width: 768px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
}
</style>