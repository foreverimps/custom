<template>
  <div class="page">
    <div class="dialog">
      <img class="logo"
        src="../../assets/login_pic.png">
      <div class="item username">
        <div class="icon"></div>
        <input v-model="form.phone"
          placeholder="用户名（手机号）"
          type="text">
      </div>
      <div class="item smscode">
        <div class="icon"></div>
        <input v-model="form.smsCode"
          placeholder="验证码"
          type="text">
        <div @click="getSmsCode"
          class="button">获取验证码</div>
      </div>
      <div class="login-button"
        @click="onLogin">登录</div>
    </div>
    <div class="footer">
      <div class="name">东辰明瀚东环路店</div>
      <div class="date">二O一八年七月七日 辛巳年六月初九 晴天</div>
    </div>
  </div>
</template>

<script>
import { getSmsCode, loginByPhone } from './api'

export default {
  data () {
    return {
      form: {
        phone: undefined,
        smsCode: undefined
      }
    }
  },
  methods: {
    getSmsCode () {
      const params = {
        phone: this.form.phone,
        smsType: 1
      }
      getSmsCode(params)
    },
    onLogin () {
      const params = {
        phone: this.form.phone,
        smsCode: this.form.smsCode
      }
      loginByPhone(params)
    }
  }
}
</script>


<style lang="less" scoped>
.page {
  width: 100%;
  min-height: 100vh;
  background: url('../../assets/login_bg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dialog {
    width: 660px;
    height: 410px;
    margin-top: 110px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    position: relative;
    box-shadow: 0px 20px 21px 0px rgba(0, 0, 0, 0.2);
    .logo {
      position: absolute;
      top: 0;
      left: 48px;
    }
    .item {
      width: 410px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ab9d80;
      padding: 10px 0;
      .icon {
        width: 40px;
        height: 40px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 50%;
      }
      input {
        border: none;
        outline: none;
        flex: 1;
        padding: 0 5px;
      }
    }
    .item.username {
      .icon {
        background-image: url('../../assets/login_user_icon.png');
      }
    }
    .item.smscode {
      .icon {
        background-image: url('../../assets/login_ver_icon.png');
      }
      .button {
        width: 120px;
        height: 40px;
        background-color: #e3cda1;
        border-radius: 3px;
        color: #4e312f;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .login-button {
      width: 410px;
      height: 48px;
      background-color: #333333;
      border-radius: 3px;
      font-size: 20px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
    }
  }
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    .name {
      color: #333333;
      font-size: 27px;
      font-weight: bold;
      margin: 5px 0;
    }
  }
}
</style>
