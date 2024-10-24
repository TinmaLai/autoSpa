import api from '@/apis/baseApi.js';

const getProducts = async () => {
    try {
      const response = await api.get('/api/Products/list');
      return response.data; // Trả về dữ liệu sản phẩm
    } catch (error) {
      throw error; // Có thể xử lý lỗi cụ thể tại đây nếu cần
    }
};

export default {
    getProducts
}