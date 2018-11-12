<template>
<div class="recommend">
  <div class="recommend-content">
    <div>
      <div class="slider-wrapper" v-if="recommends.length">
        <slider>
          <div v-for="item in recommends">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" alt="">
            </a>
          </div>
        </slider>
      </div>
      <div class="recomend-list">
        <h1 class="list-title">热门歌单推荐</h1>
      </div>
    </div>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
import {getRecommend, getMscList} from 'api/recommend'
import {ERR_OK} from 'api/config'
import slider from 'base/slider/slider'
export default {
  components: {
    slider
  },
  data() {
    return {
      recommends: []
    }
  },
  created() {
    this.$nextTick(() => {
      this._getRecommend()
      this._getMscList()
    })
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
//          console.log(this.recommends)
        }
//        console.log(this.recommends.length)
      })
    },
    _getMscList() {
      getMscList().then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recomend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)

</style>
