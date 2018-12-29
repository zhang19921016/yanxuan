<template>
  <div id="footer">
    <a href="javascript:;" v-for="(nav,index) in navs" :key="index" :class="{active:hasActive}" @click="toggleClass">
      <i class="icon_nav"></i>
      <span>{{nav}}</span>
    </a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navs: ['首页','分类','识物','购物车','个人'],
        hasActive: false
      }
    },
    methods: {
      toggleClass () {
        this.hasActive = !this.hasActive
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #footer
    position fixed
    left 0
    bottom 0
    z-index 5
    display flex
    text-align center
    justify-content space-around
    width 100%
    height 1.30667rem
    background #fff
    border-top 1px solid #d9d9d9
    a
      display flex
      flex-direction: column
      align-items center
      justify-content center
      &.active
        i
          background-position 0 -3.33333rem
        span
          color #b4282d
      &:nth-child(1)
        i
          background-position 0 -3.33333rem
      &:nth-child(2)
        i
         background-position 0 -2rem
      &:nth-child(3)
        i
          background-position 0 -4.66667rem
      &:nth-child(4)
        i
          background-position 0 -.66667rem
      &:nth-child(5)
        i
         background-position 0 -6rem
      .icon_nav
        display inline-block;
        vertical-align middle;
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-2a8cea5605.png);
        background-repeat no-repeat
        background-size .53333rem 6.53333rem
        width .53333rem
        height .53333rem
      span
        display block
        font-size .32rem
        margin-top .09333rem
        line-height 1


</style>
