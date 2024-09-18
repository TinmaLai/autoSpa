<template>
  <div class="top-nav">
    <div class="logo-area">
      <img class="logo" src="@/assets/meguiarsLogo.png"/>
    </div>
    <div class="top-nav-right">
      <div class="support-contact">
        <div class="telephone-icon"></div>
        <div class="support-info">
          <div>Hỗ trợ khách hàng</div>
          <b>098 303 6566</b>
        </div>
      </div>
      <div class="navigator">
        <div class="nav-item">SẢN PHẨM</div>
        <div class="nav-item">TIN TỨC</div>
        <div class="nav-item">ĐẠI LÝ</div>
        <div class="nav-item">CHÍNH SÁCH</div>
        <div class="nav-item">LIÊN HỆ</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
.top-nav {
  height: 125px;
  background-color: black;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 100;
}
.logo-area{
  position: absolute;
  left: 23%;
}
.top-nav-right{
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  right: 20%;
  top: 30%;
  width: 30vw;
  gap: 15px;
  .support-contact{
    display: flex;
    align-self: flex-end;
    .telephone-icon{
      background-color: yellow;
      width: 35px;
      height: 35px;
      border-radius: 25px;
      position: relative;
      margin-right: 16px;
    }
    .telephone-icon:before{
      content: "";
      width: 25px;
      height: 25px;
      display: block;
      position: absolute;
      background-image: url('@/assets/phone-icon.png'); /* Đường dẫn đến ảnh */
      background-size: cover; /* Để ảnh vừa với kích thước */
      margin-right: 16px; /* Khoảng cách giữa ảnh và nội dung */
      left: 5px;
      bottom: 5px;
    }
    .support-info{
      display: flex;
      flex-direction: column;
    }
    .support-info div{
      color: white;
    }
    .support-info > *:last-child{
      color: yellow;
    }
  }
  .navigator{
    display: flex;
    color: white;
    gap: 20px;
    font-weight: 550;
  }
}
</style>