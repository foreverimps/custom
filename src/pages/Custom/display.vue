<template>
  <div class="display">
    <div class="title">
      <img class="logo"
        src="../../assets/custom/made_three.png">
      <div class="buttons">
        <div class="button">
          <img class="icon"
            src="../../assets/custom/made_all_scree.png"> 全屏
        </div>
        <div class="button">
          <img class="icon"
            src="../../assets/custom/made_all_scree.png"> 收藏
        </div>
        <div class="button">
          <img class="icon"
            src="../../assets/custom/made_share_icon.png"> 分享
        </div>
        <div class="button">
          <img class="icon"
            src="../../assets/custom/made_code_icon.png"> 二维码
        </div>
      </div>
    </div>
    <div class="carousel">
      <img class="left-arrow"
        src="../../assets/custom/made_arrow_left.png">
      <img class="image"
        src="../../assets/custom/pic1.png">
      <img class="right-arrow"
        src="../../assets/custom/made_arrow_right.png">
    </div>
    <div class="assess">
      <div class="button">
        估价: 8996.00
      </div>
      <div class="button">
        估价: 8996.00
      </div>
      <div class="button">
        估价: 8996.00
      </div>
    </div>
    <div class="product">
      <div class="name">东辰瞑瀚 美式loft实木电脑桌办公桌实木胡桃木 02563</div>
      <div class="add-cart-button">
        <img src="../../assets/custom/made_cart_icon.png"> 加入购物车
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.display {
  flex: 1;
  padding: 0 50px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    .logo {
      width: 54px;
      height: 54px;
    }
    .buttons {
      display: flex;
      .button {
        display: flex;
        margin: 0 20px;
        img {
          width: 24px;
          height: 24px;
          margin: 0 6px;
        }
      }
    }
  }
  .carousel {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 80px 0;
    .left-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 50px;
    }
    .right-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 50px;
    }
    .image {
      width: 330px;
      height: 330px;
    }
  }
  .assess {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .button {
      width: 200px;
      height: 40px;
      border: 1px solid #ab9d80;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 6px;
      font-weight: bold;
      color: #ab9d80;
    }
  }
  .product {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 25px;
    .name {
      font-size: 20px;
      color: #333333;
      font-weight: bold;
    }
    .add-cart-button {
      position: absolute;
      right: 0;
      top: 0;
      width: 200px;
      height: 100%;
      background-color: #e3cda1;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      color: #4e312f;
      img {
        width: 20px;
        height: 20px;
        margin: 0 5px;
      }
    }
  }
}
</style>
