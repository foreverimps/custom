<template>
  <div class="modal">
    <div class="mask"></div>
    <div class="dialog">
      <div class="title center">
        <div class="name">系统提示</div>
        <img @click="onClose"
          class="close-button"
          src="../../assets/modal/dialog_close_icon@3x.png">
      </div>
      <div class="content">
        <slot/>
        <div @click="onConfirm"
          class="confirm-button center">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClose () {
      this.$emit('update:visible', false)
    },
    onConfirm () {
      this.$emit('handleConfirm')
    }
  }
}
</script>


<style lang="less" scoped>
.modal {
  z-index: 10;
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.8;
  }
  .dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 600px;
    transform: translate(-50%, -50%);
    background-color: white;
    .title {
      width: 100%;
      height: 60px;
      background-color: #efebe3;
      position: relative;
      .name {
        color: #333333;
        font-size: 20px;
        font-weight: bold;
      }
      .close-button {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .content {
      padding: 0 120px;
      .confirm-button {
        height: 75px;
        margin-bottom: 75px;
        margin-top: 40px;
        background-color: #e3cda1;
        font-size: 27px;
        font-weight: bold;
        color: #4e312f;
      }
    }
  }
}
</style>
