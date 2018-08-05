<template>
  <div class="page">
    <div class="title">
      <img class="close-button"
        src="../../assets/detail/made_all_scr_close.png">
    </div>
    <div class="carousel">
      <img class="arrow"
        src="../../assets/detail/ion-ios-arrow-left - Ionicons Copy.png">
      <div class="content">
        <img :src="product.icon">
      </div>
      <img class="arrow"
        src="../../assets/detail/ion-ios-arrow-right - Ionicons Copy.png">
    </div>
    <div class="bottom">
      <div class="footer">
        {{product.itemDescription}}
      </div>
      <div class="add-cart-button"
        @click="onAdd">
        加入购物车
      </div>
    </div>
  </div>
</template>

<script>
import { getProductDetail, addCart } from './api'
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    async getProductDetail () {
      const params = {
        productId: this.$route.query.productId
      }
      const { result } = await getProductDetail(params)
      this.product = result
    },
    async addCart () {
      const params = {
        shoppingCart: {
          productId: Number(this.$route.query.productId),
          productNum: 1
        }
      }
      const result = await addCart(params)
      console.log(result)
    },
    onAdd () {
      this.addCart()
    }
  },
  created () {
    this.getProductDetail()
  }
}
</script>


<style lang="less" scoped>
.page {
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    justify-content: flex-end;
    .close-button {
      width: 68px;
      height: 68px;
      margin: 30px;
    }
  }
  .carousel {
    flex: 1;
    display: flex;
    align-items: center;
    .arrow {
      width: 30px;
      height: 50px;
      margin: 0 48px;
    }
    .content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .bottom {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .footer {
      font-size: 20px;
      font-weight: bold;
      color: #333333;
    }
    .add-cart-button {
      width: 200px;
      height: 40px;
      background-color: #e3cda1;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 30px;
      right: 50px;
    }
  }
}
</style>
