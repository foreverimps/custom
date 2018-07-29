<template>
  <div :class="['page',type]">
    <header-bar>
      <slot slot="left"
        name="left" />
      <slot slot="right"
        name="right" />
    </header-bar>
    <slot class="content" />
  </div>
</template>

<script>
import HeaderBar from '../HeaderBar'
export default {
  components: {
    HeaderBar
  },
  props: {
    type: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  &.home {
    background-image: url('../../assets/welcom_pic.png');
  }
  &.category {
    background-image: url('../../assets/category/home_bg.png');
  }
  .content {
    flex: 1;
  }
}
</style>
