<template>
  <div class="input-number">
    <div @click="onMinus"
      class="button center">-</div>
    <input :value="value"
      @change="handleChange"
      class="center"
      type="text">
    <div @click="onPlus"
      class="button center">+</div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleChange (event) {
      if (!/\d+/.test(event.target.value) || event.target.value <= 0) {
        this.$emit('input', 0)
      } else {
        this.$emit('input', Number(event.target.value))
      }
    },
    onPlus () {
      this.$emit('input', this.value + 1)
    },
    onMinus () {
      if (this.value - 1 >= 0) {
        this.$emit('input', this.value - 1)
      } else {
        this.$emit('input', 0)
      }
    }
  }
}
</script>


<style lang="less" scoped>
.input-number {
  display: flex;
  .button {
    width: 44px;
    height: 44px;
    border: 1px solid #c5c5c5;
    background-color: #f3f3f3;
    user-select: none;
  }
  input {
    width: 85px;
    height: 44px;
    border-top: 1px solid #c5c5c5;
    border-bottom: 1px solid #c5c5c5;
    text-align: center;
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
