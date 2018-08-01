<template>
  <page name="支付-相关服务">
    <div class="service center">
      <div class="item">
        <div class="name">包装加厚服务</div>
        <div class="price">100.00</div>
      </div>
      <div class="item">
        <div class="name">运费险</div>
        <div class="price">100.00</div>
      </div>
      <div class="item">
        <div class="name">安装维护一年</div>
        <div class="price">100.00</div>
      </div>
    </div>
  </page>
</template>

<style lang="less" scoped>
.service {
  display: flex;
  flex: 1;
  .item {
    width: 390px;
    height: 600px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    .name {
      color: white;
      font-size: 27px;
      font-weight: bold;
      margin-top: 70px;
    }
    .price {
      font-size: 45px;
      color: white;
    }
  }
  .item:nth-child(1) {
    background-image: url('../../assets/service/payment_about_service_bg1@3x.png');
  }
  .item:nth-child(2) {
    background-image: url('../../assets/service/payment_about_service_bg2@3x.png');
  }
  .item:nth-child(3) {
    background-image: url('../../assets/service/payment_about_service_bg3@3x.png');
  }
}
</style>
