<template>
  <div class="sorts">
    <div v-for="(category,index) in categorys"
      :key="index"
      class="item">
      <img :src="category.icon"> {{category.shortName}}
    </div>
  </div>
</template>

<script>
import { getCategorys } from './api'
export default {
  data () {
    return {
      categorys: []
    }
  },
  methods: {
    async getCategorys () {
      const { result } = await getCategorys()
      this.categorys = result
    }
  },
  created () {
    this.getCategorys()
  }
}
</script>

<style lang="less" scoped>
.sorts {
  width: 150px;
  padding-top: 40px;
  background-color: #f4f6f8;
  z-index: 1;
  box-shadow: 0.44rem 0rem 0.5rem 0rem rgba(188, 188, 188, 0.08);
  height: 90vh;
  overflow: auto;
  .item {
    padding-left: 30px;
    display: flex;
    align-items: center;
    color: #cab58c;
    margin-bottom: 25px;
    img {
      width: 30px;
      height: 30px;
      border: 1px dashed #333333;
      margin-right: 8px;
    }
  }
}
</style>
