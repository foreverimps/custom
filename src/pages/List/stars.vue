<template>
  <div class="stars">
    <img v-for="index in number"
      :key="index"
      src="../../assets/list/class_star.png">
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="less" scoped>
.stars {
  display: flex;
  img {
    width: 15px;
    height: 15px;
    margin: 0 7px;
  }
}
</style>
