<template>
    <div class="product-detail-container">
        <div class="product-detail">
            <div class="detail-header">
                {{ item.header }}
            </div>
            <div class="detail-body">
                <div class="detail-image">

                </div>
                <div class="detail-info">
                    <div class="detail-price">

                    </div>
                    <div class="detail-description">
                        <p>abc</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProductDetail',
    setup(props) {
        var item = {
            name: "ALL WHEEL BRIGHTENER",
            url: "/src/assets/productList/product-list-0.jpg",
            originalPrice: 400000,
            saleOffPrice: 350000,
            saleOffPercent: 13,
            header: "Meguiar's Chai xịt rửa xe không cần nước có hỗ trợ wax bóng - Ultimate Waterless Wash & Wax, 768ml - G3626",
            description: "Ứng dụng công nghệ Polymer tiên tiến giúp làm sạch nhanh chóng (bụi bẩn nhẹ nhàng, dấu vân tay, bụi vải, vết giọt nước,...) và an toàn cho bề mặt sơn, kính, các chi tiết nhựa và còn hỗ trợ lớp wax giúp xe đẹp, bóng mượt hơn."
        };
        return {
            item
        }
    }
}

</script>
<style>
.product-detail-container {
    z-index: 10000;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    background-color: black;
    .product-detail {
        display: flex;
        flex-direction: column;
        background-color: #252525;
        margin: 50px 200px 0 200px;
        .detail-body {
            display: flex;

            .detail-info {
                display: flex;
                flex-direction: column;
            }
        }
    }
}


</style>