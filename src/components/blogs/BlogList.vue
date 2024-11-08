<template>
    <div class="blogs">
        <div class="blog-container">
            <!-- Tiêu đề trang -->
            <div class="news-header">Tin t</div>

            <!-- Lưới tin tức -->
            <div class="news-grid">
                <!-- Tin tức lớn -->
                <div class="news-item-large">
                    <img :src="hotBlog.blog_generalImage" alt="Large News Image">
                    <div class="news-content">
                        <h3 class="news-title">{{hotBlog.blog_title}}</h3>
                        <p class="news-description">{{hotBlog.blog_description}}
                        </p>
                    </div>
                </div>

                <!-- Các tin tức nhỏ -->
                <div class="news-item" v-for="(blog) in subHotBlog" :key="blog.blog_id">
                    <img :src="blog.blog_generalImage" alt="News Image">
                    <div class="news-content">
                        <h3 class="news-title">{{ blog.blog_title }}</h3>
                        <p class="news-description">{{blog.blog_description}}</p>
                    </div>
                </div>
            </div>
            <div class="regular-blog-container">
                <div class="blog-item" v-for="(blog) in regularBlog" :key="blog.blog_id">
                    <img :src="blog.blog_generalImage" alt="Hình ảnh blog">
                    <div class="blog-content">
                        <h2 class="blog-title">{{blog.blog_title}}</h2>
                        <p class="blog-description">{{blog.blog_description}}</p>
                    </div>
                </div>
                <!-- Thêm nhiều blog khác tại đây -->
            </div>
        </div>
    </div>
</template>
<script>
import {getCurrentInstance, computed, ref} from 'vue';
export default {
    setup(props) {
        const { proxy } = getCurrentInstance();

        var blogs = [
            {
                blog_id: Math.random(),
                blog_title: proxy.$pl.pTitle,
                blog_description: proxy.$pl.pParagraph,
                blog_type: proxy.$cs.BlogType.Hot,
                blog_generalImage: proxy.$pl.pImage
            },
            {
                blog_id: Math.random(),
                blog_title: proxy.$pl.pTitle,
                blog_description: proxy.$pl.pParagraph,
                blog_type: proxy.$cs.BlogType.SubHot,
                blog_generalImage: proxy.$pl.pImage
            },
            {
                blog_id: Math.random(),
                blog_title: proxy.$pl.pTitle,
                blog_description: proxy.$pl.pParagraph,
                blog_type: proxy.$cs.BlogType.SubHot,
                blog_generalImage: proxy.$pl.pImage
            },
            {
                blog_id: Math.random(),
                blog_title: proxy.$pl.pTitle,
                blog_description: proxy.$pl.pParagraph,
                blog_type: proxy.$cs.BlogType.SubHot,
                blog_generalImage: proxy.$pl.pImage
            },
            {
                blog_id: Math.random(),
                blog_title: proxy.$pl.pTitle,
                blog_description: proxy.$pl.pParagraph,
                blog_type: proxy.$cs.BlogType.SubHot,
                blog_generalImage: proxy.$pl.pImage
            },
            {
                blog_id: Math.random(),
                blog_title: proxy.$pl.pTitle,
                blog_description: proxy.$pl.pParagraph,
                blog_type: proxy.$cs.BlogType.Regular,
                blog_generalImage: proxy.$pl.pImage
            },
            {
                blog_id: Math.random(),
                blog_title: proxy.$pl.pTitle,
                blog_description: proxy.$pl.pParagraph,
                blog_type: proxy.$cs.BlogType.Regular,
                blog_generalImage: proxy.$pl.pImage
            },
            {
                blog_id: Math.random(),
                blog_title: proxy.$pl.pTitle,
                blog_description: proxy.$pl.pParagraph,
                blog_type: proxy.$cs.BlogType.Regular,
                blog_generalImage: proxy.$pl.pImage
            },
            {
                blog_id: Math.random(),
                blog_title: proxy.$pl.pTitle,
                blog_description: proxy.$pl.pParagraph,
                blog_type: proxy.$cs.BlogType.Regular,
                blog_generalImage: proxy.$pl.pImage
            },
            {
                blog_id: Math.random(),
                blog_title: proxy.$pl.pTitle,
                blog_description: proxy.$pl.pParagraph,
                blog_type: proxy.$cs.BlogType.Regular,
                blog_generalImage: proxy.$pl.pImage
            },
            {
                blog_id: Math.random(),
                blog_title: proxy.$pl.pTitle,
                blog_description: proxy.$pl.pParagraph,
                blog_type: proxy.$cs.BlogType.Regular,
                blog_generalImage: proxy.$pl.pImage
            },
            {
                blog_id: Math.random(),
                blog_title: proxy.$pl.pTitle,
                blog_description: proxy.$pl.pParagraph,
                blog_type: proxy.$cs.BlogType.Regular,
                blog_generalImage: proxy.$pl.pImage
            },
            {
                blog_id: Math.random(),
                blog_title: proxy.$pl.pTitle,
                blog_description: proxy.$pl.pParagraph,
                blog_type: proxy.$cs.BlogType.Regular,
                blog_generalImage: proxy.$pl.pImage
            },
        ];
        var hotBlog = computed(() => {
            return blogs.find(x => x.blog_type == proxy.$cs.BlogType.Hot) || {
                blog_id: Math.random(),
                blog_title: proxy.$pl.pTitle,
                blog_description: proxy.$pl.pParagraph,
                blog_type: proxy.$cs.BlogType.Hot,
                blog_generalImage: proxy.$pl.pImage
            };
        });
        var subHotBlog = computed(() => {
            return blogs.filter(x => x.blog_type == proxy.$cs.BlogType.SubHot) || {
                blog_id: Math.random(),
                blog_title: proxy.$pl.pTitle,
                blog_description: proxy.$pl.pParagraph,
                blog_type: proxy.$cs.BlogType.Hot,
                blog_generalImage: proxy.$pl.pImage
            };
        });
        var regularBlog = computed(() => {
            return blogs.filter(x => x.blog_type == proxy.$cs.BlogType.Regular) || {
                blog_id: Math.random(),
                blog_title: proxy.$pl.pTitle,
                blog_description: proxy.$pl.pParagraph,
                blog_type: proxy.$cs.BlogType.Hot,
                blog_generalImage: proxy.$pl.pImage
            };
        });
        return {
            blogs,
            hotBlog,
            subHotBlog,
            regularBlog,
        }
    }
}
</script>
<style lang="scss">
/* Tiêu đề của danh sách tin tức */
.blogs {
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
            max-width: 600px;
            width: 100%;
            max-height: 800px;
            height: 100%;
        }
    
        /* Tin tức nhỏ */
        .news-item {
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 300px;
            width: 100%;
            max-height: 363px;
            height: 100%;
        }
    
        /* Hình ảnh của mỗi tin tức */
        .news-item img {
            width: 100%;
            height: 60%;
            object-fit: cover;
        }
    
        /* Nội dung thông tin của tin tức */
        .news-content {
            color: white;
            width: 100%;
            padding: 10px;
            height: 30%;
            box-sizing: border-box;
            overflow: hidden;
            p{
                text-overflow: ellipsis;
                white-space: normal; /* Cho phép văn bản xuống dòng */
                word-wrap: break-word; /* Ngắt dòng khi cần thiết */
            }
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
        .regular-blog-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 16px;
            .blog-item {
                display: flex;
                background-color: #fff;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .blog-item img {
                width: 150px;
                height: auto;
                object-fit: cover;
            }
            .blog-content {
                padding: 10px 15px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .blog-title {
                font-size: 18px;
                font-weight: bold;
                margin: 0;
            }
            .blog-description {
                font-size: 14px;
                color: #666;
                margin-top: 5px;
            }
        }
    }
    
}
</style>