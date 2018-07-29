<template>
  <div class="categorys">
    <div v-for="(category,index) in categorys"
      :key="index"
      @click="()=>onSelectCategory(index)"
      :class="['item', index === value ? 'active' : undefined]">
      <div class="name">{{category.name}}</div>
      <div class="en-name">{{category.enName}}</div>
    </div>
  </div>
</template>

<script>
import categorys from './categorys'
export default {
  data () {
    return {
      value: 0,
      categorys
    }
  },
  methods: {
    onSelectCategory (index) {
      this.value = index
    }
  }
}
</script>

<style lang="less" scoped>
.categorys {
  width: 150px;
  background-color: #f4f6f8;
  padding-top: 30px;
  box-shadow: 8px 0px 7px 0px rgba(188, 188, 188, 0.16);
  z-index: 2;
  .item {
    padding: 8px 0 8px 15px;
    color: #4e312f;
    &.active {
      background-color: #e3cda1;
    }
    .name {
      font-size: 20px;
      font-weight: bold;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .en-name {
      font-size: 10px;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
