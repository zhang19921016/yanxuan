<template>
  <div class="search">
    <div class="inner">
      <div class="s-top">
        <div class="s-t-left">
          <input type="text" placeholder="高级穿着感 时尚大衣6折起" v-model="value">
        </div>
        <span class="s-t-right" @click="$router.replace('/home')">取消</span>
      </div>
      <div class="black">
        <ul class="searchLists" v-if="showType === 1">
          <li v-for="(searchAuto,index) in searchAutos" :key="index">{{searchAuto}}</li>
        </ul>
        <div v-if="showType === 0">
          <div class="s-middle">
            <span>热门搜索</span>
          </div>
          <div class="s-lists" v-if="searchs">
            <a href="javascript:;" :class="{'active':item.highlight === 1}" v-for="(item,index) in searchs.hotKeywordVOList" :key="index">{{item.keyword}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: '',
    data () {
      return {
        value: '',
        showType: 0 //0代表没有搜索的状态 1代表搜索的状态
      }
    },
    mounted () {
      this.$store.dispatch('getSearchs')
    },
    computed: {
      ...mapState({
        searchs: state => state.search.searchs,
        searchAutos: state => state.search.searchAutos
      })
    },
    watch: {
      value () {
        const value = this.value
        clearTimeout('this.timer')
        this.timer = setTimeout(() =>{
          this.$store.dispatch('getSearchAutoComplete',value)
          this.showType = 1
          if (!value) {
            this.showType = 0
          }
        },2000)

      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .search
    width 100%
    .inner
      width 10rem
      padding 0 .4rem
      .s-top
        margin auto
        overflow hidden
        height 1.17333rem
        display flex
        align-items center
        justify-content space-between
        background-color #fff
        .s-t-left
          width 8rem
          padding-top 0
          padding-left .26667rem
          padding-bottom 0
          border 0
          background-color #f4f4f4
          height .74667rem
          border-radius 4px
          display flex
          align-items center
          justify-content space-between
          &:before
            content ' '
            margin-right .21333rem
            display inline-block
            vertical-align middle
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
            background-repeat no-repeat
            background-size 100% 100%
            width .37333rem
            height .37333rem
          input
            flex 1
            line-height .66667rem
            font-size .37333rem
            border none
            color rgba(0,0,0,.8)
            background-color transparent
            outline none
        .s-t-right
          margin-left .4rem
          font-size .37333rem
      .black
        position fixed
        top 45px
        bottom 0
        left 0
        right 0
        background #f4f4f4
        .searchLists
          width 100%
          background #fff
          padding-left .4rem
          li
            height 1.2rem
            line-height 1.2rem
            font-size .37333rem
            bottom-border-1px(#d9d9d9)
        .s-middle
          height 1.2rem
          font-size .37333rem
          color #999
          display flex
          align-items center
          background #fff
          padding-left .4rem
        .s-lists
          margin-right -.4rem
          margin-bottom -.42667rem
          background #fff
          padding 0 .4rem
          clearFix()
          a
            float left
            padding 0 .2rem
            margin-right .42667rem
            margin-bottom .42667rem
            line-height .61333rem
            border 1px solid #999
            border-radius 4px
            color #333
            vertical-align middle
            font-size 12px
            &.active
              border-color #b4282d
              color #b4282d
</style>
