<template>
  <page name="支付">
    <div class="content center">
      <img class="icon"
        src="../../assets/preview/icon_success@3x.png">
      <div class="message">
        <div class="title">支付成功！</div>
        <div class="desc">谢谢您的惠顾，该单将于25个工作日内完成</div>
        <div class="buttons">
          <div @click="toHome"
            class="button center">完成</div>
          <div @click="onAgain"
            class="button center">再来一单</div>
        </div>
      </div>
      <div class="extra">
        <div class="ads">
          <img class="ad first"
            :src="ads[0]">
          <img class="ad"
            :src="ads[1]">
        </div>
        <div class="buttons">
          <div @click="toExtra"
            class="button center">
            <img class="icon"
              src="../../assets/preview/pament_information_icon@3x.png"> 补充资料
          </div>
          <div @click="toService"
            class="button middle center">
            <img class="icon"
              src="../../assets/preview/payment_about_service@3x.png"> 相关服务
          </div>
          <div class="button center">
            <img class="icon"
              src="../../assets/preview/payment_advice_icon@3x.png"> 意见和建议
          </div>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
import { getADs } from './api'
export default {
  data () {
    return {
      ads: []
    }
  },
  methods: {
    onAgain () {
      this.$router.push({ name: 'orders' })
    },
    toHome () {
      this.$router.push({ name: 'home' })
    },
    toExtra () {
      this.$router.push({ name: 'extraData', query: { orderId: this.$route.query.orderId } })
    },
    toService () {
      this.$router.push({ name: 'service' })
    }
  },
  async created () {
    const { result } = await getADs()
    this.ads = result.map(({ icon }) => icon)
  }
}
</script>


<style lang="less" scoped>
.content {
  .icon {
    width: 128px;
    height: 128px;
    margin-right: 24px;
  }
  .message {
    .title {
      font-size: 35px;
      color: #333333;
      font-weight: bold;
    }
    .desc {
      font-size: 20px;
      color: #333333;
      margin-top: 12px;
      margin-bottom: 30px;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      .button {
        border: 1px solid #ab9d80;
        border-radius: 3px;
        width: 170px;
        height: 40px;
        font-size: 15px;
        font-weight: bold;
        color: #ab9d80;
      }
    }
  }
  .extra {
    margin-left: 130px;
    .ads {
      display: flex;
      justify-content: space-between;
      .ad {
        width: 290px;
        height: 364px;
        margin-left: 40px;
        &.first {
          margin-left: 0;
        }
      }
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      position: relative;
      margin-top: 30px;
      .button {
        border: 1px solid #ab9d80;
        border-radius: 3px;
        width: 170px;
        height: 40px;
        font-size: 15px;
        font-weight: bold;
        color: #ab9d80;
        align-items: center;
        .icon {
          width: 20px;
          height: 20px;
          margin-right: 3px;
        }
        &.middle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
</style>
