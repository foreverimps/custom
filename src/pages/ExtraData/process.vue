<template>
  <div class="process center">
    <div class="line">
      <div class="icon active center">
        <img :src="activeImg">
      </div>
      <div class="divide"></div>
      <div class="icon center">
        <img :src="normalImg">
      </div>
      <div class="divide"></div>
      <div class="icon center">
        <img :src="normalImg">
      </div>
    </div>
    <div class="desc">
      <div class="active left">
        联系电话
      </div>
      <div class="normal middle">
        配送地址
      </div>
      <div class="normal right">
        备注信息
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeImg: require('../../assets/extra-data/pyment_information_step_ing@3x.png'),
      normalImg: require('../../assets/extra-data/pyment_information_step_normal@3x.png'),
    }
  }
}
</script>

<style lang="less" scoped>
.process {
  height: 120px;
  flex-direction: column;
  padding: 0 180px;
  box-shadow: 0px 14px 23px 0px rgba(215, 215, 215, 0.3);
  .line {
    width: 100%;
    display: flex;
    align-items: center;
    .icon {
      width: 30px;
      height: 30px;
      img {
        width: 14px;
        height: 14px;
      }
      &.active {
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
    .divide {
      flex: 1;
      height: 2px;
      background-color: #f1ebe8;
    }
  }
  .desc {
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: relative;
    margin-top: 14px;
    .middle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .left {
      margin-left: -1em;
    }
    .right {
      margin-right: -1em;
    }
    div {
      font-size: 15px;
      font-weight: bold;
    }
    .active {
      color: rgba(171, 157, 128, 1);
    }
    .normal {
      color: rgba(171, 157, 128, 0.6);
    }
  }
}
</style>
