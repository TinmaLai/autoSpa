import api from '@/apis/baseApi.js';
/**
 * Lấy danh sách sản phẩm
 * 29.10.2024 
 */
const getProducts = async () => {
  try {
    const response = await api.get('/api/Products/list');
    return response.data; // Trả về dữ liệu sản phẩm
  } catch (error) {
    throw error; // Có thể xử lý lỗi cụ thể tại đây nếu cần
  }
};
/**
 * Lấy chi tiết sản phẩm
 * @param {*} id: Id sản phẩm
 * @returns 
 */
const getProduct = async (id) => {
  try {
    var param = {
      id: id
    };
    const response = await api.post('/api/Products/detail', param);
    return response.data; // Trả về dữ liệu sản phẩm
  } catch (error) {
    throw error; // Có thể xử lý lỗi cụ thể tại đây nếu cần
  }
};
export default {
    getProducts,
    getProduct
}