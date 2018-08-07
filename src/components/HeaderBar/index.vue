<template>
  <div class="header-bar">
    <div v-if="name!==undefined"
      class="header-name">{{name}}</div>
    <div class="section">
      <img class="logo"
        src="../../assets/home/home_logo@3x.png">
      <div @click="toBack"
        class="button">
        <img src="../../assets/header/nav_return_icon@3x.png"> 返回
      </div>
      <div @click="toHome"
        class="button">
        <img src="../../assets/header/nav_home_icon@3x.png"> 首页
      </div>
      <slot name="left" />
    </div>
    <div class="section">
      <slot name="right" />
      <div class="icon">
        <img src="../../assets/home/电话@3x.png">
      </div>
      <div class="icon user">
        <img @mouseover="showMenu"
          @mouseout="hideMenu"
          src="../../assets/home/登录头像@3x.png">
        <div @mouseover="showMenu"
          @mouseout="hideMenu"
          v-show="flag.order"
          class="drop-menu">
          <div @click="toOrders"
            class="order">订单</div>
          <div @click="onLogout">注销</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setLogout } from './api'
export default {
  data () {
    return {
      flag: {
        order: false
      }
    }
  },
  props: {
    name: {
      type: String,
      default: undefined
    }
  },
  methods: {
    showMenu () {
      this.flag.order = true
    },
    hideMenu () {
      this.flag.order = false
    },
    toOrders () {
      this.$router.push({ name: 'orders' })
    },
    toBack () {
      this.$router.go(-1)
    },
    toHome () {
      this.$router.push({ name: 'home' })
    },
    async onLogout () {
      const { msg } = await setLogout()
      alert(msg)
    }
  }
}
</script>


<style lang="less" scoped>
.header-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding-left: 25px;
  padding-right: 40px;
  box-shadow: 0rem 0.44rem 0.5rem 0rem rgba(188, 188, 188, 0.16);
  z-index: 3;
  position: relative;
  .header-name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #333333;
    font-size: 27px;
    font-weight: bold;
  }
  .section {
    display: flex;
    align-items: center;
    .button {
      margin: 0 25px;
      display: flex;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }
    .logo {
      width: 45px;
      height: 45px;
    }
    .icon {
      width: 40px;
      height: 40px;
      margin-left: 35px;
      img {
        width: 100%;
      }
      &.user {
        position: relative;
        .drop-menu {
          width: 90px;
          position: absolute;
          right: 0;
          top: 100%;
          background-image: url('../../assets/welcome_user_nav_bg.png');
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            color: white;
            font-size: 20px;
            padding: 10px 0;
          }
          .order {
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }
        }
      }
    }
  }
}
</style>
