<template>
  <div class="main-content">
    <div v-for="cart in carts"
      :key="cart.id"
      class="item">
      <div class="checkbox-outer">
        <img v-if="cart.selected"
          class="checkbox"
          @click="onToggle(cart)"
          src="../../assets/orders/check_selected@3x.png">
        <img v-else
          @click="onToggle(cart)"
          class="checkbox"
          src="../../assets/orders/order_check_normal@3x.png">
      </div>
      <div class="content">
        <div class="left">
          <div class="image center">
            <img :src="cart.icon">
          </div>
          <div class="detail">
            <div class="name">{{cart.name}}</div>
            <div class="price">{{cart.price}}</div>
          </div>
        </div>
        <div class="right buttons">
          <input-number v-model="cart.amount" />
          <div @click="onEdit(cart)"
            class="button center">
            <img class="icon"
              src="../../assets/orders/order_edit_icon@3x.png"> 编辑
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="amount-all">共 {{getAmountAll()}} 件</div>
      <div class="price-all">合计： {{getPriceAll()}}</div>
      <div class="submit-button center"
        @click="onSubmit">确认并支付</div>
    </div>
  </div>
</template>

<script>
import { getCart, editCart, createOrder } from './api'
import InputNumber from './input-number'
export default {
  components: {
    InputNumber
  },
  data () {
    return {
      carts: []
    }
  },
  methods: {
    async getCart () {
      const params = {
        page: 1,
        size: 10000
      }
      const { result: { records } } = await getCart(params)
      this.carts = records.map(({ productNum, price, ...others }) => ({
        ...others,
        amount: parseInt(productNum),
        price: price.toFixed(2),
        selected: false
      }))
    },
    onToggle ({ id: targetId, selected }) {
      this.carts = this.carts.map((item) => {
        if (item.id === targetId) {
          return {
            ...item,
            selected: !selected
          }
        }
        return item
      })
    },
    async onEdit ({ id, amount }) {
      const params = {
        productId: id,
        productNum: amount
      }
      const { result } = await editCart(params)
      alert(result)
    },
    getAmountAll () {
      return this.carts.reduce(
        (result, { amount }) => {
          return result + amount
        },
        0
      )
    },
    getPriceAll () {
      return this.carts.reduce(
        (result, { amount, price }) => {
          return result + amount * price
        },
        0
      ).toFixed(2)
    },
    async onSubmit () {
      const carts = this.carts
        .filter(({ selected }) => selected)
      if (carts.length > 0) {
        const params =
          carts
            .map(({ id, amount }) => ({ productId: id, productNum: amount }))
        const { msg } = await createOrder(params)
        alert(msg)
      } else {
        alert('请选择商品')
      }
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style lang="less" scoped>
.main-content {
  flex: 1;
  height: 90vh;
  overflow: auto;
  padding-bottom: 80px;
  position: relative;
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
          user-select: none;
        }
      }
    }
  }
  .bottom {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 80px;
    display: flex;
    align-items: center;
    padding-left: 50px;
    border-top: 1px solid #d8d8d8;
    .amount-all {
      font-size: 15px;
      color: #787886;
    }
    .price-all {
      margin-left: 30px;
      color: #333333;
      font-size: 20px;
    }
    .submit-button {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 200px;
      height: 100%;
      background-color: #e3cda1;
      font-size: 20px;
      color: #4e312f;
      font-weight: bold;
    }
  }
}
</style>
