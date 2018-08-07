<template>
  <div class="address-handler center">
    <div class="form-item">
      <div class="label">省市区：</div>
      <select class="area-select">
        <option :value="undefined">请选择</option>
        <option v-for="(option,index) in options.district"
          :key="index"
          :value="option">{{option}}</option>
      </select>
    </div>
    <div class="form-item">
      <div class="label">详细地址：</div>
      <input v-model="form.receivingAddress"
        class="address-input"
        type="text"
        placeholder="街道小区楼号门牌号">
    </div>
    <div class="form-item">
      <div class="label">配送时间：</div>
      <div class="date-control">
        <!-- <div class="drop-button center">工作日</div> -->
        <div class="part">
          <el-radio-group class="radio"
            size="mini"
            v-model="form.receiveDay">
            <el-radio-button label="工作日"></el-radio-button>
            <el-radio-button label="周末"></el-radio-button>
          </el-radio-group>
        </div>
        <div class="part">
          <el-date-picker v-model="form.recevieTime"
            type="date"
            size="mini"
            placeholder="选择日期"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
        <div class="time-select part">
          <el-time-select size="mini"
            v-model="form.startReceiveTimeSlot"
            :picker-options="options.time"
            placeholder="选择开始时间">
          </el-time-select>
          <div class="divide">至</div>
          <el-time-select size="mini"
            v-model="form.endReceiveTimeSlot"
            :picker-options="options.time"
            placeholder="选择结束时间">
          </el-time-select>
        </div>
      </div>
    </div>
    <div @click="onConfirm"
      class="button center">下一步</div>
  </div>
</template>

<script>
import district from '../../assets/district.json'
import { setAddressTime } from './api'
export default {
  data () {
    return {
      form: {
        receiveDay: '工作日',
        startReceiveTimeSlot: undefined,
        endReceiveTimeSlot: undefined,
        receivingAddress: undefined,
        recevieTime: undefined
      },
      options: {
        time: {
          start: '00:00',
          step: '01:00',
          end: '24:00'
        },
        district: Object.keys(district['86']).map(code => district['86'][code])
      }
    }
  },
  methods: {
    async onConfirm () {
      try {
        const params = {
          ...this.form,
          orderId: this.$route.query.orderId
        }
        const { msg } = await setAddressTime(params)
        alert(msg)
        this.$emit('handleStep', 2)
      } catch (error) {
        alert(error.response.data.msg)
      }
    }
  }
}
</script>


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
    .area-select,
    .address-input {
      width: 600px;
      height: 40px;
      border: 1px solid #c5c5c5;
      padding: 0 13px;
    }
    .date-control {
      width: 600px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      .part {
        margin: 4px 0;
      }
      .divide {
        margin: 0 10px;
      }
      .radio {
        width: 100%;
      }
      .time-select {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
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
