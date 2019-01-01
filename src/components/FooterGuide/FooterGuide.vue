<template>
  <div id="footer">
    <a href="javascript:;" v-for="(nav,index) in navs" :key="index" :class="nav.className" @click="toggleClass(index)">
      <i class="icon_nav"></i>
      <span>{{nav.name}}</span>
    </a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navs: [
          {code: 0,className: '',name:'首页',path: '/home'},
          {code: 1,className: '',name:'分类',path: '/classify'},
          {code: 2,className: '',name:'识物',path: '/find'},
          {code: 3,className: '',name:'购物车',path: '/shopCart'},
          {code: 4,className: '',name:'个人',path: '/personal'},
        ],
      }
    },
    methods: {
      toggleClass (index) {

        this.$router.replace(this.navs[index].path)
        this.navs.forEach(nav => {
          nav.className = ''
          this.navs[index].className = 'nav_' + index
        })


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
    margin-top -1.30667rem
    background #fff
    border-top 1px solid #d9d9d9
    a
      display flex
      flex-direction: column
      align-items center
      justify-content center
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
      &.nav_0
        i
          background-position 0 -2.66667rem
        span
          color #b4282d
      &.nav_1
        i
          background-position 0 -1.33333rem
        span
          color #b4282d
      &.nav_2
        i
          background-position 0 -4rem
        span
          color #b4282d
      &.nav_3
        i
          background-position 0 0
        span
          color #b4282d
      &.nav_4
        i
          background-position 0 -5.33333rem
        span
          color #b4282d
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
