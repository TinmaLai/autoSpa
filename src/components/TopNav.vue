<template>
  <div class="top-nav">
    <router-link class="logo-area" to="/">
      <img class="logo" src="@/assets/meguiarsLogo.png" />
    </router-link>
    <div class="top-nav-right">
      <div class="support-contact">
        <div class="telephone-icon"></div>
        <div class="support-info">
          <div>Hỗ trợ khách hàng</div>
          <b>098 303 6566</b>
        </div>
      </div>
      <div class="navigator">
        <router-link to="/" class="nav-item">SẢN PHẨM</router-link>
        <router-link to="/blogs" class="nav-item">TIN TỨC</router-link>
        <router-link to="/services" class="nav-item">
          DỊCH VỤ
          <ul class="service-dropdown-menu">
            <li><a href="#">Dịch Vụ 1</a></li>
            <li><a href="#">Dịch Vụ 2</a></li>
            <li><a href="#">Dịch Vụ 3</a></li>
          </ul>
        </router-link>
        <router-link class="nav-item">LIÊN HỆ</router-link>
        <a @click="showCartSide" class="nav-item">GIỎ HÀNG</a>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();

    function showCartSide() {
      store.commit('updateIsShowCart', true);
    }
    return {
      showCartSide,
    }
  }
};
</script>
<style lang="scss" scoped>
.top-nav {
  height: 125px;
  background: linear-gradient(45deg, #000000 70%, red 30%);
  color: white;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 2;
  box-shadow: 0 0 10px 2px rgba(169, 169, 169, 0.6);
  /* Ánh sáng tỏa ra màu bạc */
}

.logo-area {
  position: absolute;
  left: 23%;
}

.top-nav-right {
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  right: 20%;
  top: 30%;
  width: 30vw;
  justify-content: space-between;
  max-height: 90px;
  height: 100%;

  .support-contact {
    display: flex;
    align-self: flex-end;

    .telephone-icon {
      background-color: yellow;
      width: 35px;
      height: 35px;
      border-radius: 25px;
      position: relative;
      margin-right: 16px;
    }

    .telephone-icon:before {
      content: "";
      width: 25px;
      height: 25px;
      display: block;
      position: absolute;
      background-image: url('@/assets/phone-icon.png');
      /* Đường dẫn đến ảnh */
      background-size: cover;
      /* Để ảnh vừa với kích thước */
      margin-right: 16px;
      /* Khoảng cách giữa ảnh và nội dung */
      left: 5px;
      bottom: 5px;
    }

    .support-info {
      display: flex;
      flex-direction: column;
    }

    .support-info div {
      color: white;
    }

    .support-info>*:last-child {
      color: yellow;
    }
  }

  .navigator {
    display: flex;
    color: white;
    gap: 20px;
    font-weight: 550;

    .nav-item {
      color: white;
      text-decoration: unset;
      position: relative;
      padding-bottom: 16px;
      cursor: pointer;
      .service-dropdown-menu {
        list-style-type: none;
        position: absolute;
        top: 76%;
        border-top: 1px solid $secondary-color;
        left: 0;
        background-color: $primary-color;
        color: white;
        display: none;
        padding: 0 16px;
        margin-top: 5px;
        width: 300%;
      }

      .service-dropdown-menu li {
        line-height: 14px;
        width: 100%;
      }

      .service-dropdown-menu li a {
        padding: 15px 20px;
        color: white;
        text-decoration: none;
        display: block;
      }

      .service-dropdown-menu li a:hover {
        color: $secondary-color;

      }
    }

    .nav-item:hover .service-dropdown-menu {
      display: block;
    }

    .nav-item:hover {
      color: $secondary-color;
    }
  }
}
</style>