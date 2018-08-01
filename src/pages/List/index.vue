<template>
  <page>
    <div slot="right"
      class="header-right">
      <div class="search">
        <input />
        <div class="search-icon"></div>
      </div>
      <div>东晨明翰东环路店</div>
    </div>
    <div class="content">
      <categorys/>
      <sorts/>
      <main-menu/>
    </div>
  </page>
</template>

<script>
import Categorys from './categorys.vue'
import Sorts from './sorts.vue'
import MainMenu from './main-menu'

export default {
  components: {
    Categorys,
    Sorts,
    MainMenu
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.header-right {
  display: flex;
  align-items: center;
  .search {
    width: 810px;
    height: 40px;
    border-radius: 20px;
    background-color: #f3f3f4;
    padding: 0 20px;
    display: flex;
    align-items: center;
    margin: 0 20px;
    input {
      flex: 1;
      background-color: transparent;
    }
    .search-icon {
      width: 20px;
      height: 20px;
      background-image: url('../../assets/list/class_search_icon.png');
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }
}
.content {
  width: 100%;
  display: flex;
  box-shadow: 0.63rem 0rem 0.5rem 0rem rgba(188, 188, 188, 0.16);
}
</style>
