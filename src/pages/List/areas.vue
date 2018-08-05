<template>
  <div class="areas">
    <div v-for="(area) in areas"
      :key="area.id"
      @click="()=>onSelectArea(area.id)"
      :class="['item', area.id === value ? 'active' : undefined]">
      <div class="name">{{area.valDesc}}</div>
      <div class="en-name">{{area.enName}}</div>
    </div>
  </div>
</template>

<script>
import { getAreas } from './api'
export default {
  data () {
    return {
      value: undefined,
      areas: []
    }
  },
  methods: {
    onSelectArea (id) {
      this.$router.push({ name: 'list', query: { areaId: id } })
      window.location.reload()
    },
    async getAreas () {
      const { result } = await getAreas()
      this.areas = result
    }
  },
  async created () {
    await this.getAreas()
    this.value = Number(this.$route.query.areaId)
  }
}
</script>

<style lang="less" scoped>
.areas {
  width: 150px;
  background-color: #f4f6f8;
  padding-top: 30px;
  box-shadow: 8px 0px 7px 0px rgba(188, 188, 188, 0.16);
  z-index: 2;
  height: 90vh;
  overflow: auto;
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
