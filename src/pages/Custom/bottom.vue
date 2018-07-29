<template>
  <div class="bottom">
    <img class="arrow"
      src="../../assets/custom/icon_make_arrow_downleft.png">
    <div class="items">
      <div class="item">
        <img src="../../assets/custom/pic1.png">
        <div class="name">部件1</div>
      </div>
      <div class="item">
        <img src="../../assets/custom/pic1.png">
        <div class="name">部件2</div>
      </div>
      <div class="item">
        <img src="../../assets/custom/pic1.png">
        <div class="name">部件3</div>
      </div>
    </div>
    <img class="arrow"
      src="../../assets/custom/icon_make_arrow_downright.png">
  </div>
</template>

<style lang="less" scoped>
.bottom {
  width: 100%;
  height: 110px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  padding: 0 26px;
  .arrow {
    width: 68px;
    height: 68px;
  }
  .items {
    flex: 1;
    display: flex;
    justify-content: space-around;
    .item {
      width: 200px;
      height: 80px;
      border: 1px solid #4e312f;
      display: flex;
      align-items: center;
      border-radius: 3px;
      img {
        height: 100%;
        margin: 0 20px;
      }
    }
  }
}
</style>
