<!--
分类路由组件
-->

<template>
  <div>
    <!--头部-->
    <div class="header">
      <div class="inner">
        <i class="icon"></i>
        <span>搜索商品, 共19999款好物</span>
      </div>
    </div>
    <!--主体-->
    <div class="section">
      <div class="s-left">
       <ul class="lists" ref="lists">
         <li class="item" :class="{'active': index === 0}" v-for="(list,index) in lists" :key="index" @click="toggle(index)">
           {{list.name}}
         </li>
       </ul>
      </div>
      <SideList :lists="lists" :num = 'num'/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import SideList from '../../components/SideList/SideList.vue'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        num: 0//左侧list的标识  0即为第一个
      }
    },
    mounted () {
      this.$store.dispatch('getListData')
      this.$nextTick(() => {
        this.leftScroll = new BScroll('.s-left',{
          click: true
        })
      })
    },
    methods: {
      toggle (index) {
        this.num = index
        let lists = this.$refs.lists.children
        lists = Array.prototype.slice.call(lists);
        lists.forEach(item => item.className = 'item')
        lists[index].className = 'item active'
      }
    },
    computed: {
      ...mapState({
        lists: state => state.classify.lists,
      })
    },
    components: {
      SideList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header
    width 100%
    height 44px
    position fixed !important
    left 0
    top 0
    z-index 10
    display flex
    align-items center
    padding 0 .4rem
    background-color #fff
    bottom-border-1px(#ededed)
    .inner
      width 100%
      height .74667rem
      line-height .74667rem
      font-size .37333rem
      background-color #ededed
      border-radius .10667rem
      text-align center
      .icon
        display inline-block
        vertical-align middle
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
        background-repeat no-repeat
        background-size 100% 100%
        width .37333rem
        height .37333rem
        margin-right .13333rem
      span
        color #666
  .section
    width 100%
    margin-top 44px
    position relative
    .s-left
      width 2.16rem
      height 618px
      background-color #fff
      position absolute
      left 0
      top 0
      .lists
        width 100%
        paddingm .53333rem 0
        padding-bottom 1.84rem
        .item
          width 100%
          height .66667rem
          text-align center
          margin-top .53333rem
          border none
          font-size .37333rem
          line-height .66667rem
          text-overflow ellipsis
          white-space nowrap
          overflow hidden

        .active
          color #ab2b2b
</style>
