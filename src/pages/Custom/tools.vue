<template>
  <div class="tools">
    <div class="title">
      <div class="name">素材区</div>
      <div class="en-name">Source material</div>
    </div>
    <div class="panels">
      <div class="panel active">
        <img src="../../assets/custom/pic1.png">
        <div class="right">
          <div class="name">森呼吸净味竹炭抗苯抗甲醛全 效木器漆</div>
          <div class="desc">木器清新自然，闻得到森林的气息。</div>
        </div>
      </div>
      <div class="panel">
        <img src="../../assets/custom/pic1.png">
        <div class="right">
          <div class="name">森呼吸净味竹炭抗苯抗甲醛全 效木器漆</div>
          <div class="desc">木器清新自然，闻得到森林的气息。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tools {
  z-index: 2;
  margin: 25px 0;
  width: 430px;
  box-shadow: 0rem 0.44rem 1.19rem 0rem rgba(87, 87, 87, 0.2);
  padding: 20px 45px;
  .title {
    display: flex;
    margin-bottom: 45px;
    .name {
      font-size: 20px;
      font-weight: bold;
      color: #333333;
      margin-right: 10px;
    }
    .en-name {
      font-size: 20px;
      color: #999999;
    }
  }
  .panels {
    .panel {
      box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
      height: 100px;
      margin-bottom: 25px;
      display: flex;
      &.active {
        border: 2px solid #4e312f;
        .right {
          background-color: #efebe3;
        }
      }
      img {
        width: 130px;
        height: 100%;
      }
      .right {
        padding: 12px 30px 0 8px;
        .name {
          font-size: 13px;
        }
        .desc {
          font-size: 12px;
          color: #999999;
        }
      }
    }
  }
}
</style>
