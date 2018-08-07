<template>
  <modal v-if="visible">
    <div class="auth">
      <div class="tooltip">请输入权限密码</div>
      <input placeholder="6位数权限密码"
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
      visible: false
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    hideModal () {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
.auth {
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
