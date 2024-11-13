<!-- FooterComponent.vue -->
<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section company-info">
        <h3>Công ty của chúng tôi</h3>
        <p>
          Địa chỉ: 123 Đường ABC, Quận 1, TP. Hồ Chí Minh, Việt Nam
        </p>
        <p>Điện thoại: +84 123 456 789</p>
        <p>Email: info@company.com</p>
      </div>

      <div class="footer-section quick-links">
        <h3>Liên kết nhanh</h3>
        <ul>
          <li><a href="/about">Giới thiệu</a></li>
          <li><a href="/services">Dịch vụ</a></li>
          <li><a href="/contact">Liên hệ</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </div>

      <div class="footer-section social-media">
        <h3>Kết nối với chúng tôi</h3>
        <div class="social-links">
          <a href="https://facebook.com" target="_blank">Facebook</a>
          <a href="https://twitter.com" target="_blank">Twitter</a>
          <a href="https://instagram.com" target="_blank">Instagram</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Công ty của chúng tôi. Tất cả các quyền được bảo lưu.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $primary-color;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.footer-section {
  flex: 1;
  padding: 10px;
}

.footer-section h3 {
  margin-bottom: 15px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 10px;
}

.footer-section a {
  color: #fff;
  text-decoration: none;
}

.footer-section a:hover {
  text-decoration: underline;
}

.footer-bottom {
  border-top: 1px solid #555;
  padding-top: 15px;
  font-size: 0.9em;
}
</style>
