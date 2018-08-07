<template>
  <div class="process center">
    <div class="line">
      <div @click="handleStep(0)"
        :class="['icon','center',step===0?'active':undefined]">
        <img :src="step===0?activeImg:normalImg">
      </div>
      <div class="divide"></div>
      <div @click="handleStep(1)"
        :class="['icon','center',step===1?'active':undefined]">
        <img :src="step===1?activeImg:normalImg">
      </div>
      <div class="divide"></div>
      <div @click="handleStep(2)"
        :class="['icon','center',step===2?'active':undefined]">
        <img :src="step===2?activeImg:normalImg">
      </div>
    </div>
    <div class="desc">
      <div @click="handleStep(0)"
        :class="[step===0?'active':undefined,'left']">
        联系电话
      </div>
      <div @click="handleStep(1)"
        :class="[step===1?'active':undefined,'middle']">
        配送地址
      </div>
      <div @click="handleStep(2)"
        :class="[step===2?'active':undefined,'right']">
        备注信息
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleStep (step) {
      // this.$emit('handleStep', step)
    }
  },
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
