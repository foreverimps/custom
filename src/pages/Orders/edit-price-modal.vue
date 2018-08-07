<template>
  <modal :visible.sync="visible"
    v-if="visible"
    @handleConfirm="handleConfirm">
    <div class="edit-price">
      <div class="tooltip">请输入折扣比例</div>
      <input placeholder="折扣比例"
        type="text">
    </div>
  </modal>
</template>

<script>
import Modal from './modal'
export default {
  components: {
    Modal
  },
  data () {
    return {
      visible: false,
      cart: {}
    }
  },
  watch: {
    'visible' () {
      if (this.visible === false) {
        this.cart = {}
      }
    }
  },
  methods: {
    showModal (cart) {
      this.visible = true
      this.cart = cart
    },
    hideModal () {
      this.visible = false
    },
    handleConfirm () {

    }
  }
}
</script>

<style lang="less" scoped>
.edit-price {
  display: flex;
  flex-direction: column;
  align-items: center;
  .tooltip {
    font-size: 20px;
    color: #333333;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  input {
    width: 100%;
    height: 40px;
    border: 1px solid #c5c5c5;
    padding: 0 12px;
  }
}
</style>
