<template>
    <div class="service-list-container">
        <div class="service-container">
            <div class="service-list" aria-label="Danh sách dịch vụ">
                <h2>Danh sách dịch vụ</h2>
                <div class="service-item active" tabindex="0" role="button" aria-pressed="true">
                    <i class="service-icon fas fa-tools"></i>
                    Bảo dưỡng định kỳ
                </div>
                <div class="service-item" tabindex="0" role="button" aria-pressed="false">
                    <i class="service-icon fas fa-cogs"></i>
                    Sửa chữa động cơ
                </div>
                <div class="service-item" tabindex="0" role="button" aria-pressed="false">
                    <i class="service-icon fas fa-oil-can"></i>
                    Thay dầu và bộ lọc
                </div>
                <div class="service-item" tabindex="0" role="button" aria-pressed="false">
                    <i class="service-icon fas fa-car-battery"></i>
                    Kiểm tra và thay ắc quy
                </div>
                <div class="service-item" tabindex="0" role="button" aria-pressed="false">
                    <i class="service-icon fas fa-snowflake"></i>
                    Dịch vụ điều hòa
                </div>
            </div>
            <div class="service-details">
                <ckeditor v-model="editorData" :editor="editor" :config="editorConfig" />
            </div>
        </div>
    </div>
</template>
<script>
import { getCurrentInstance, onMounted, ref } from 'vue';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, ImageUpload, Image, SimpleUploadAdapter } from 'ckeditor5';
import { Ckeditor } from '@ckeditor/ckeditor5-vue';

export default {
    name: 'ServiceList',
    components: {
        Ckeditor
    },
    setup() {
        const { proxy } = getCurrentInstance();
        // Tạo các biến reactive
        const editorContainer = ref(null);
        const editor = ClassicEditor;
        const editorData = '<p>Hello from CKEditor 5 in Vue!</p>';
        const editorConfig = {
            plugins: [Bold, Essentials, Italic, Mention, Paragraph, Undo, ImageUpload, Image, SimpleUploadAdapter],
            toolbar: ['undo', 'redo', '|', 'bold', 'italic', 'imageUpload'],
            simpleUpload: {
                uploadUrl: 'https://localhost:7115/api/Uploads/upload',  // URL của API tải ảnh
                headers: {
                }
            }
        };

        return {
            editor,
            editorData,
            editorConfig
        }
    }
}
</script>
<style lang="scss">
.service-list-container {
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;

    .service-container {
        display: flex;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #FFD700;
        max-width: 1200px;
        width: 100%;
        background-color: #252525;
        margin: 10% 0 5% 0;
    }

    .service-list {
        width: 30%;
        background: linear-gradient(145deg, #1a1a1a, #2a2a2a);
        padding: 20px;
        overflow-y: auto;
        box-shadow: 5px 0 15px rgba(0, 0, 0, 0.1);
    }

    .service-item {
        padding: 15px;
        margin-bottom: 15px;
        background-color: rgba(255, 215, 0, 0.1);
        cursor: pointer;
        transition: all 0.3s ease;
        border-radius: 8px;
        display: flex;
        align-items: center;
    }

    .service-item:hover {
        background-color: rgba(255, 215, 0, 0.2);
        transform: translateX(5px);
    }

    .service-item.active {
        background-color: #FFD700;
        color: #000000;
        border-left: 5px solid #FFA500;
    }

    .service-icon {
        margin-right: 15px;
        font-size: 24px;
        width: 30px;
        text-align: center;
    }

    .service-details {
        width: 70%;
        padding: 40px;
        overflow-y: auto;
    }

    h1,
    h2 {
        color: #FFD700;
        margin-bottom: 20px;
    }

    .service-image {
        max-width: 100%;
        height: auto;
        margin-bottom: 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(255, 215, 0, 0.2);
    }

    @media (max-width: 768px) {
        .container {
            flex-direction: column;
        }

        .service-list,
        .service-details {
            width: 100%;
        }
    }
}
</style>