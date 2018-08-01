<template>
  <div class="main-content">
    <div v-for="item in 10"
      :key="item"
      class="item">
      <div class="checkbox-outer">
        <div class="checkbox"></div>
      </div>
      <div class="content">
        <div class="left">
          <div class="image center">
            <img src="../../assets/orders/f67c1913aa70bcccec928696db0f877d@3x.png">
          </div>
          <div class="detail">
            <div class="name">东辰瞑瀚 美式loft实木电脑桌办公桌实木胡桃木办公桌床头柜 02563</div>
            <div class="price">965.00</div>
          </div>
        </div>
        <div class="right buttons">
          <input-number/>
          <div class="button center">
            <img class="icon"
              src="../../assets/orders/order_edit_icon@3x.png"> 编辑
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputNumber from './input-number'
export default {
  components: {
    InputNumber
  }
}
</script>

<style lang="less" scoped>
.main-content {
  flex: 1;
  height: 90vh;
  overflow: auto;
  padding-bottom: 80px;
  .item {
    display: flex;
    align-items: center;
    height: 220px;
    .checkbox-outer {
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      .checkbox {
        width: 28px;
        height: 28px;
        border: 1px solid #ccc;
      }
    }
    .content {
      flex: 1;
      height: 100%;
      border-bottom: 1px solid #d8d8d8;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 50px;
      .left {
        display: flex;
        .image {
          width: 120px;
          height: 120px;
          margin-right: 40px;
          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
        .detail {
          .name {
            max-width: 650px;
            font-size: 20px;
            color: #333333;
            font-weight: bold;
            margin: 12px 0;
          }
          .price {
            font-size: 35px;
            color: #f96703;
            font-weight: bold;
            margin: 12px 0;
          }
        }
      }
      .right.buttons {
        align-self: flex-end;
        margin-bottom: 15px;
        .button {
          .icon {
            width: 20px;
            height: 20px;
            margin: 0 8px;
          }
          width: 170px;
          margin: 10px 0;
          border: 1px solid #ab9d80;
          border-radius: 3px;
          height: 40px;
          font-size: 15px;
          color: #ab9d80;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
