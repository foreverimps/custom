<template>
  <page>
    <div slot="left">首页</div>
    <div slot="right">东晨明翰东环路店</div>
    <div class="content">
      <div class="main">
        <iframe class="iframe"
          frameborder="0"
          scrolling="auto"
          src="https://weixin.btevolution.com/www/"></iframe>
        <cart/>
      </div>
    </div>
  </page>
</template>

<script>
import Display from './display'
import Tools from './tools'
import Cart from './cart'
import Bottom from './bottom'

export default {
  components: {
    Display,
    Tools,
    Cart,
    Bottom
  },
  created () {
    window.clearCart = () => {
      console.log(1)
    }
  },
  data () {
    return {
    }
  }
}
</script>


<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  .main {
    width: 100%;
    display: flex;
    flex: 1;
    .iframe {
      flex: 1;
    }
  }
}
</style>
