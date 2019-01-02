<!--识物路由组件-->

<template>
  <div class="find">
    <!--头部-->
    <div class="header">
      <div class="left">
        <i class="iconfont icon-shouye1"></i>
      </div>
      <div class="middle">
        <a href="javascript:;">发现</a>
        <a href="javascript:;">甄选家</a>
      </div>
      <div class="right">
        <i class="iconfont icon-sousuo1"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <!--导航-->
    <div class="navs">
      <div class="public" :class="{'active':index === activeNum}" v-for="(tab,index) in tabs" :key="index" @click="toggle(index)">{{tab.tabName}}</div>
    </div>
    <keep-alive>
      <router-view class="router"/>
    </keep-alive>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: '',
    data () {
      return {
        activeNum: 0, //0代表下标为0的元素拥有active类
        paths: ['/find/recommend','/find/expert','/find/new','/find/show','/find/nhome']
      }
    },
    mounted () {
      this.$store.dispatch('getTabs')
      const index = this.paths.indexOf(this.$route.path)
      this.activeNum = index
    },
    methods: {
      toggle (index) {
        const path = this.paths[index]
        this.$router.replace(path)
        this.activeNum = index

      }
    },
    computed: {
      ...mapState({
        tabs: state => state.find.tabs
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .find
    width 100%
    .header
      position fixed !important
      top 0
      left 0
      z-index 10
      width 100%
      height 50px
      background-color #fafafa
      border-bottom .01rem solid #d9d9d9
      padding 0 .26rem 0 .24rem
      .left
        float left
        height  50px
        width 1.46rem
      .middle
        position absolute
        width 3.2rem
        height 50px
        line-height 50px
        text-align center
        left 50%
        top 0
        margin-left -1.6rem
        font-size .56rem
        color #7F7F7F
        z-index 1
        a:first-child
          font-size .56rem
          color #b4282d
          font-weight bold
          margin-right 10px
        a:last-child
          font-size 14px
      .right
        float right
    .navs
      width 100%
      height 36px
      background #fafafa
      border-bottom .01rem solid #d9d9d9
      overflow: hidden;
      position: fixed
      top 50px
      left 0
      z-index 20
      display flex
      justify-content space-around
      flex-flow row wrap
      padding-bottom 15px
      .public
        height 36px
        line-height 36px
        font-size 14px
        color #7F7F7F
        padding 0 .08rem
        margin 0 .2rem
        vertical-align middle
        &.active
          color #B4282D
          border-bottom .04rem solid #B4282D
    .router
      margin-top 86px
</style>
