<template>
  <page type="category">
    <div slot="header-right"
      class="header-name">东辰明瀚东环路店</div>
    <div class="content">
      <img @click="onPrev"
        class="arrow"
        src="../../assets/detail/ion-ios-arrow-left - Ionicons Copy.png">
      <div v-for="(area) in display"
        :key="area.id"
        class="item"
        @click="toList(area.id)">
        <div class="image">
          <img :src="area.icon">
        </div>
        <div class="bottom">
          <div class="name">
            {{area.valDesc}}
          </div>
          <div class="desc">
            {{area.enName}}
          </div>
        </div>
      </div>
      <img @click="onNext"
        class="arrow"
        src="../../assets/detail/ion-ios-arrow-right - Ionicons Copy.png">
      <!-- <div class="item livingroom"
        @click="toList">
        <div class="image">
          <img src="../../assets/category/livingroom_pic.png">
        </div>
        <div class="bottom">
          <div class="name">
            客厅区
          </div>
          <div class="desc">
            LVING ROOM
          </div>
        </div>
      </div>
       <div class="item bedroom"
        @click="toList">
        <div class="image">
          <img src="../../assets/category/bedroom_pic.png">
        </div>
        <div class="bottom">
          <div class="name">
            卧室区
          </div>
          <div class="desc">
            BEDROOM
          </div>
        </div>
      </div>
      <div class="item study"
        @click="toList">
        <div class="image">
          <img src="../../assets/category/studyroom_pic.png">
        </div>
        <div class="bottom">
          <div class="name">
            书房儿童房
          </div>
          <div class="desc">
            STUDY&CHILDREN’S ROOM
          </div>
        </div>
      </div>
      <div class="item kitchen"
        @click="toList">
        <div class="image">
          <img src="../../assets/category/kitchenroom_pic.png">
        </div>
        <div class="bottom">
          <div class="name">
            厨卫阳台
          </div>
          <div class="desc">
            KITCHEN&TOILET&BALLCONY
          </div>
        </div>
      </div> -->
    </div>
  </page>
</template>

<script>
import { getAreas } from './api'

export default {
  data () {
    return {
      areas: [],
      display: []
    }
  },
  methods: {
    toList (id) {
      this.$router.push({ name: 'list', query: { areaId: id } })
    },
    async getAreas () {
      const { result } = await getAreas()
      this.areas = result
      this.display = this.areas.filter((_, index) => index < 4)
    },
    onPrev () {
      const [{ id: firstId }] = this.display
      const firstIndex = this.areas.findIndex(({ id }) => id === firstId)
      if (firstIndex > 0) {
        this.display = [this.areas[firstIndex - 1], ...this.display.filter((_, index) => index !== 3)]
      }
    },
    onNext () {
      const { id: lastId } = this.display[3]
      const lastIndex = this.areas.findIndex(({ id }) => id === lastId)
      if (lastIndex < this.areas.length - 1) {
        const [first, ...others] = this.display
        this.display = [...others, this.areas[lastIndex + 1]]
      }
    }
  },
  created () {
    this.getAreas()
  }
}
</script>


<style lang="less" scoped>
.header-name {
  font-size: 20px;
}
.content {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  .arrow {
    width: 30px;
    height: 50px;
    margin: 0 48px;
  }
  .item {
    width: 360px;
    height: 730px;
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &.livingroom {
      background-image: url('../../assets/category/livingroom_bg.png');
    }
    &.bedroom {
      background-image: url('../../assets/category/bedroom_bg.png');
    }
    &.study {
      background-image: url('../../assets/category/studyroom_bg.png');
    }
    &.kitchen {
      background-image: url('../../assets/category/kitchenroom_bg.png');
    }
    .image {
      margin-top: 200px;
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        transform: scale(1.4);
      }
    }
    .bottom {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 100px;
      .name {
        font-size: 40px;
        color: #333333;
      }
      .desc {
        color: #999999;
      }
    }
  }
}
</style>
