<template>
  <div class="input-number">
    <div class="button center">—</div>
    <input class="center"
      type="text">
    <div class="button center">+</div>
  </div>
</template>

<style lang="less" scoped>
.input-number {
  display: flex;
  .button {
    width: 44px;
    height: 44px;
    border: 1px solid #c5c5c5;
    background-color: #f3f3f3;
  }
  input {
    width: 85px;
    height: 44px;
    border-top: 1px solid #c5c5c5;
    border-bottom: 1px solid #c5c5c5;
    text-align: center;
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
