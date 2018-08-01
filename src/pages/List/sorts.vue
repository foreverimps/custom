<template>
  <div class="sorts">
    <div v-for="(sort,index) in sorts"
      :key="index"
      class="item">
      <img :src="sort.img"> {{sort.name}}
    </div>
  </div>
</template>

<script>
import sorts from './sorts'
export default {
  data () {
    return {
      sorts
    }
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
  .item {
    padding-left: 30px;
    display: flex;
    align-items: center;
    color: #cab58c;
    img {
      width: 30px;
      height: 30px;
      border: 1px dashed #333333;
      margin-right: 8px;
    }
  }
}
</style>
