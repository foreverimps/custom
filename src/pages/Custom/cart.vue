<template>
  <div class="cart">
    <div class="button">
      <img src="../../assets/custom/made_cart_count.png">
      <div class="name">购物车</div>
      <div class="count">12</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.cart {
  width: 62px;
  margin-left: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  .button {
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e3cda1;
    img {
      width: 40px;
      height: 40px;
    }
    .name {
      width: 20px;
      font-size: 20px;
      color: #4e312f;
      margin: 10px 0;
    }
    .count {
      background-color: #4e312f;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #e3cda1;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
