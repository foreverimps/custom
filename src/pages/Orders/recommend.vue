<template>
  <div class="recommend">
    <div class="button">
      <img class="icon"
        src="../../assets/orders/order_design_icon@3x.png">
      <div class="desc">
        <div class="cn">设计师推荐</div>
        <div class="en">Designer recommends</div>
      </div>
    </div>
    <div class="title">
      推荐
    </div>
    <div class="item">
      <div class="image">
        <img src="../../assets/orders/f67c1913aa70bcccec928696db0f877d@3x.png">
      </div>
      <div class="name">东辰瞑瀚 美式loft实木电脑桌办公...</div>
      <div class="price">965.00</div>
    </div>
    <div class="item">
      <div class="image">
        <img src="../../assets/orders/f67c1913aa70bcccec928696db0f877d@3x.png">
      </div>
      <div class="name">东辰瞑瀚 美式loft实木电脑桌办公...</div>
      <div class="price">965.00</div>
    </div>
    <div class="item">
      <div class="image">
        <img src="../../assets/orders/f67c1913aa70bcccec928696db0f877d@3x.png">
      </div>
      <div class="name">东辰瞑瀚 美式loft实木电脑桌办公...</div>
      <div class="price">965.00</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.recommend {
  width: 430px;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0rem 6px 16px 0rem rgba(87, 87, 87, 0.2);
  z-index: 1;
  padding: 18px 44px 0 44px;
  .button {
    background-color: #e3cda1;
    padding: 22px 32px;
    display: flex;
    align-items: center;
    .icon {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
    .desc {
      .cn {
        font-size: 20px;
        color: #4e312f;
        font-weight: bold;
      }
      .en {
        font-size: 13px;
        color: #4e312f;
      }
    }
  }
  .title {
    font-size: 20px;
    line-height: 40px;
    color: #333333;
    margin-top: 20px;
    border-bottom: 1px solid #d8d8d8;
  }
  .item {
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
    margin: 10px 0;
    padding: 0 15px;
    .image {
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .name {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 20px;
      color: #333333;
      font-weight: bold;
    }
    .price {
      color: #f96703;
      font-size: 27px;
      font-weight: bold;
      line-height: 38px;
    }
  }
}
</style>
