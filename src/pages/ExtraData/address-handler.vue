<template>
  <div class="address-handler center">
    <div class="form-item">
      <div class="label">省市区：</div>
      <select>
        <option>请选择</option>
      </select>
    </div>
    <div class="form-item">
      <div class="label">详细地址：</div>
      <input type="text"
        placeholder="街道小区楼号门牌号">
    </div>
    <div class="form-item">
      <div class="label">配送时间：</div>
      <div class="date-control">
        <div class="drop-button center">工作日</div>
        <div class="date-picker center">12:00 ～ 16:00</div>
      </div>
    </div>
    <div class="button center">下一步</div>
  </div>
</template>

<style lang="less" scoped>
.address-handler {
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
    select,
    input {
      width: 500px;
      height: 40px;
      border: 1px solid #c5c5c5;
      padding: 0 13px;
    }
    .date-control {
      width: 500px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      .drop-button {
        width: 200px;
        height: 100%;
        background-color: #efebe3;
        border: 1px solid #ab9d80;
        border-radius: 3px;
        font-size: 15px;
        color: #ab9d80;
        font-weight: bold;
      }
      .date-picker {
        width: 270px;
        height: 100%;
        border: 1px solid #ab9d80;
        border-radius: 3px;
        font-size: 15px;
        color: #ab9d80;
        font-weight: bold;
      }
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
