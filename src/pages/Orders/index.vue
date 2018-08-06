<template>
  <page name="订单">
    <div slot="right">东辰明瀚东环路店</div>
    <div class="orders">
      <main-content/>
      <recommend/>
    </div>
    <!-- <auth-modal/> -->
    <!-- <edit-price-modal/> -->
  </page>
</template>

<script>
import AuthModal from './auth-modal'
import EditPriceModal from './edit-price-modal'
import Recommend from './recommend'
import MainContent from './main-content'

export default {
  components: {
    AuthModal,
    EditPriceModal,
    Recommend,
    MainContent
  }
}
</script>

<style lang="less" scoped>
.orders {
  display: flex;
}
</style>
