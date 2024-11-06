<template>
    <div class="blogs">
        <div class="blog-container">
            <!-- Tiêu đề trang -->
            <div class="news-header">Today's Headlines</div>

            <!-- Lưới tin tức -->
            <div class="news-grid">
                <!-- Tin tức lớn -->
                <div class="news-item news-item-large">
                    <img :src="$pl.pImage" alt="Large News Image">
                    <div class="news-content">
                        <h3 class="news-title">Breaking News: Large Headline</h3>
                        <p class="news-description">This is a featured story with a bigger image and bolder headline.
                        </p>
                    </div>
                </div>

                <!-- Các tin tức nhỏ -->
                <div class="news-item">
                    <img :src="$pl.pImage" alt="News Image">
                    <div class="news-content">
                        <h3 class="news-title">News Title 1</h3>
                        <p class="news-description">A brief summary of the news story.</p>
                    </div>
                </div>

                <div class="news-item">
                    <img :src="$pl.pImage" alt="News Image">
                    <div class="news-content">
                        <h3 class="news-title">News Title 2</h3>
                        <p class="news-description">A brief summary of the news story.</p>
                    </div>
                </div>

                <div class="news-item">
                    <img :src="$pl.pImage" alt="News Image">
                    <div class="news-content">
                        <h3 class="news-title">News Title 3</h3>
                        <p class="news-description">A brief summary of the news story.</p>
                    </div>
                </div>

                <div class="news-item">
                    <img :src="$pl.pImage" alt="News Image">
                    <div class="news-content">
                        <h3 class="news-title">News Title 4</h3>
                        <p class="news-description">A brief summary of the news story.</p>
                    </div>
                </div>

                <div class="news-item">
                    <img :src="$pl.pImage" alt="News Image">
                    <div class="news-content">
                        <h3 class="news-title">News Title 5</h3>
                        <p class="news-description">A brief summary of the news story.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {

    }
}
</script>
<style lang="scss">
/* Tiêu đề của danh sách tin tức */
.blogs {
    background-color: black;
    .blog-container{
        max-width: 1200px;
        width: 100%;
        margin: 10% auto 0 auto;
        /* Tiêu đề của trang */
        .news-header {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #222;
        }
    
        /* Container của lưới tin tức */
        .news-grid {
            display: grid;
            gap: 20px;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: auto;
        }
    
        /* Tin tức lớn */
        .news-item-large {
            grid-column: span 2;
            grid-row: span 2;
            position: relative;
        }
    
        /* Tin tức nhỏ */
        .news-item {
            position: relative;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
    
        /* Hình ảnh của mỗi tin tức */
        .news-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    
        /* Nội dung thông tin của tin tức */
        .news-content {
            position: absolute;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
        }
    
        /* Tiêu đề tin tức */
        .news-title {
            font-size: 18px;
            font-weight: bold;
            margin: 0;
        }
    
        /* Mô tả của tin tức */
        .news-description {
            font-size: 14px;
            margin-top: 5px;
        }
    }
}
</style>