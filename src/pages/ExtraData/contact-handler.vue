<template>
  <div class="contact-handler center">
    <div class="form-item">
      <div class="label">联系电话：</div>
      <input type="text"
        placeholder="输入11位手机号码">
    </div>
    <div class="button center">下一步</div>
  </div>
</template>

<style lang="less" scoped>
.contact-handler {
  flex: 1;
  flex-direction: column;
  .form-item {
    display: flex;
    align-items: center;
    .label {
      font-size: 20px;
      color: #333333;
    }
    input {
      width: 500px;
      height: 40px;
      border: 1px solid #c5c5c5;
      padding: 0 13px;
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
    margin-top: 60px;
  }
}
</style>
