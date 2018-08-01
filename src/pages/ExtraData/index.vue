<template>
  <page name="支付-补充资料">
    <div class="extra-data center">
      <div class="form">
        <process/>
        <!-- <contact-handler/> -->
        <!-- <address-handler/> -->
        <remark-handler/>
      </div>
    </div>
  </page>
</template>

<script>
import Process from './process'
import ContactHandler from './contact-handler'
import AddressHandler from './address-handler'
import RemarkHandler from './remark-handler'

export default {
  components: {
    Process,
    ContactHandler,
    AddressHandler,
    RemarkHandler
  }
}
</script>


<style lang="less" scoped>
.extra-data {
  width: 100%;
  background-color: #f0f0f0;
  flex: 1;
  padding: 120px 230px;
  display: flex;
  flex-direction: column;
  .form {
    width: 100%;
    flex: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
}
</style>
