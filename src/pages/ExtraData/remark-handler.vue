<template>
  <div class="remark-handler center">
    <div class="form-item">
      <div class="label">备注：</div>
      <textarea v-model="remark"></textarea>
    </div>
    <div @click="onConfirm"
      class="button center">完成</div>
  </div>
</template>

<script>
import { setRemark } from './api'
export default {
  data () {
    return {
      remark: undefined
    }
  },
  methods: {
    async onConfirm () {
      const params = {
        remark: this.remark,
        orderId: this.$route.query.orderId
      }
      const { msg } = await setRemark(params)
      alert(msg)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="less" scoped>
.remark-handler {
  flex: 1;
  flex-direction: column;
  .form-item {
    display: flex;
    align-items: center;
    margin: 15px 0;
    .label {
      width: 100px;
      font-size: 20px;
      color: #333333;
      text-align: right;
    }
    textarea {
      width: 500px;
      height: 150px;
      border: 1px solid #c5c5c5;
      padding: 13px;
    }
  }
  .button {
    width: 200px;
    height: 40px;
    background-color: #e3cda1;
    border-radius: 3px;
    font-size: 15px;
    color: #4e312f;
    font-weight: bold;
    margin-top: 20px;
  }
}
</style>
