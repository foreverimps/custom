<template>
  <div class="main-menu">
    <div class="title">
      <div class="active">当季最热</div>
      <div>排行榜</div>
      <div>销量</div>
      <div>星评</div>
    </div>
    <div class="main-content">
      <div v-for="(section,sectionIndex) in data"
        :key="sectionIndex"
        :class="['section',sectionIndex===0?'first':undefined]">
        <div v-for="(item,index) in section"
          :key="index"
          :class="[
          'item',
          index===0 ? 'first' : undefined,
          item.id===undefined ? 'empty' : undefined
          ]">
          <div v-if="item.id!==undefined"
            @click="toDetail(item)">
            <div class="image">
              <img :src="item.icon">
            </div>
            <div class="name">{{item.name}}</div>
            <div class="line">
              <stars class="stars"
                :number="item.starLevel" />
              <div v-if="item.parentCode!==null"
                class="button"
                @click.stop="toCustom(item)">定制</div>
            </div>
            <div class="footer">
              <div>热度 {{item.hotNum}}</div>
              <div>排行 {{item.rankingNum}}</div>
              <div>销量 {{item.saleNum}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="buttons center">
      <div v-if="page>0"
        class="button center"
        @click="onPrev">上一页</div>
      <div>当前第{{page+1}}页</div>
      <div v-if="hasNextPage()"
        class="button center"
        @click="onNext">下一页</div>
    </div>
  </div>
</template>

<script>
import Stars from './stars'
import { getProducts } from './api'

export default {
  components: {
    Stars
  },
  data () {
    return {
      data: [],
      page: 0,
      size: 20,
      total: 0
    }
  },
  methods: {
    onPrev () {
      this.page = this.page - 1
      this.getProducts()
    },
    onNext () {
      this.page = this.page + 1
      this.getProducts()
    },
    hasNextPage () {
      if (this.total % this.size === 0) {
        return this.page < this.total / this.size - 1
      } else {
        return this.page < parseInt(this.total / this.size)
      }
    },
    formatData (origin) {
      const temp = origin.reduce(
        (result, item, index) => {
          const sectionIndex = parseInt(index / 4)
          if (result[sectionIndex] === undefined) {
            result[sectionIndex] = []
          }
          result[sectionIndex] = [...result[sectionIndex], item]
          return result
        },
        []
      )
      return temp.map((section, sectionIndex) => {
        if (sectionIndex === temp.length - 1) {
          for (; section.length < 4;) {
            section = [...section, {}]
          }
        }
        return section
      })
    },
    async getProducts () {
      const params = {
        functionalArea: this.$route.query.areaId,
        page: this.page,
        size: this.size
      }
      const { result: { records, total } } = await getProducts(params)
      this.data = this.formatData(records)
      this.total = total
    },
    toCustom ({ itemCode, name }) {
      const url = `https://weixin.btevolution.com/www/${itemCode}/${name}`
      window.open(url, '__self')
    },
    toDetail ({ id }) {
      this.$router.push({ name: 'detail', query: { productId: id } })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="less" scoped>
.main-menu {
  flex: 1;
  height: 90vh;
  overflow-y: auto;
  .title {
    display: flex;
    height: 60px;
    div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      &.active {
        color: #cab58c;
        font-size: 17px;
        font-weight: bold;
      }
    }
  }
  .main-content {
    flex: 1;
    margin: 0 6px;
    .section {
      display: flex;
      &.first {
        border-top: 1px solid #ccc;
      }
      .item {
        flex: 1;
        border-right: 1px solid #ccc;
        padding: 0 12px;
        border-bottom: 1px solid #ccc;
        &.first {
          border-left: 1px solid #ccc;
        }
        &.empty {
          border: none;
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
          max-width: 250px;
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
  .buttons {
    margin: 10px 0;
    .button {
      border: 1px solid #ab9d80;
      border-radius: 3px;
      width: 170px;
      height: 40px;
      font-size: 15px;
      font-weight: bold;
      color: #ab9d80;
      margin: 0 10px;
    }
  }
}
</style>
