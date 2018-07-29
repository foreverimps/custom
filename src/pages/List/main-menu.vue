<template>
  <div class="main-menu">
    <div class="title">
      <div>当季最热</div>
      <div>排行榜</div>
      <div>销量</div>
      <div>星评</div>
    </div>
    <div class="content">
      <div class="section first">
        <div v-for="(item,index) in data"
          :key="index"
          :class="['item',index===0?'first':undefined]">
          <div class="image">
            <img :src="item.img">
          </div>
          <div class="name">{{item.name}}</div>
          <div class="line">
            <stars class="stars"
              :number="item.star" />
            <div class="button">定制</div>
          </div>
          <div class="footer">
            <div>热度 {{item.hot}}</div>
            <div>排行 {{item.sort}}</div>
            <div>销量 {{item.amount}}</div>
          </div>
        </div>
      </div>
      <div class="section">
        <div v-for="(item,index) in data"
          :key="index"
          :class="['item',index===0?'first':undefined]">
          <div class="image">
            <img :src="item.img">
          </div>
          <div class="name">{{item.name}}</div>
          <div class="line">
            <stars class="stars"
              :number="item.star" />
            <div class="button">定制</div>
          </div>
          <div class="footer">
            <div>热度 {{item.hot}}</div>
            <div>排行 {{item.sort}}</div>
            <div>销量 {{item.amount}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from './stars'
import menuItems from './menu-items'
export default {
  components: {
    Stars
  },
  data () {
    return {
      data: menuItems
    }
  }
}
</script>

<style lang="less" scoped>
.main-menu {
  flex: 1;
  .title {
    display: flex;
    height: 60px;
    div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .content {
    .section {
      display: flex;
      border-bottom: 1px solid #ccc;
      &.first {
        border-top: 1px solid #ccc;
      }
      .item {
        flex: 1;
        border-right: 1px solid #ccc;
        padding: 0 12px;
        &.first {
          border-left: 1px solid #ccc;
        }
        .image {
          height: 250px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .name {
          color: #333333;
          font-weight: bold;
          margin: 15px 0;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .button {
            width: 135px;
            height: 40px;
            background-color: #e3cda1;
            border-radius: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #4e312f;
          }
        }
        .footer {
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size: 12px;
          color: #999999;
          margin-top: 25px;
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>
