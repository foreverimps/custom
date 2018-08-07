<template>
  <div class="stars">
    <img v-for="index in getNumber()"
      :key="index"
      src="../../assets/list/class_star copy@3x.png">
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getNumber () {
      return parseInt(this.number) || 0
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
