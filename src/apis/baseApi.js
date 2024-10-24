// src/services/api.js
import axios from 'axios';

// Tạo instance Axios với cấu hình mặc định
const api = axios.create({
  baseURL: 'https://localhost:7115', // Địa chỉ base API
  timeout: 10000, // Thời gian chờ
  headers: {
    'Content-Type': 'application/json'
  }
});

// Xử lý lỗi toàn cục
api.interceptors.response.use(
  response => response,
  error => {
    // Xử lý lỗi tại đây (có thể log hoặc thông báo cho người dùng)
    console.error('Có lỗi xảy ra!', error);
    return Promise.reject(error);
  }
);

// Export instance Axios để sử dụng ở nơi khác
export default api;