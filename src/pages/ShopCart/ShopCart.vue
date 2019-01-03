<!--购物车路由组件-->

<template>
  <div class="shopCart">
    <div class="header">
      <div class="inner">
        <span class="shop">购物车</span>
        <a href="javascript:;">
          <span>领券</span>
        </a>
      </div>
    </div>
    <div class="section">
      <ul class="server">
        <li>
          <i class="icon"></i>
          <span>30天无忧退货</span>
        </li>
        <li>
          <i class="icon"></i>
          <span>48小时快速退款</span>
        </li>
        <li>
          <i class="icon"></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
      <div class="cart">
        <div class="img"></div>
        <p>去添加点什么吧</p>
      </div>
      <div class="button">登录</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shopCart
    width 100%
    .header
      position fixed
      top 0
      left 0
      z-index 10
      width 100%
      height 1.17333rem
      padding 0 .4rem
      background-color #fff
      line-height 1.17333rem
      text-align center
      .inner
        width 100%
        height 1.17333rem
        text-align center
        .shop
          display inline-block
          vertical-align top
          height 1.17333rem
          font-size .48rem
        a
          float right
          width 45px
          color #B4282D
          font-size .4rem
    .section
      position fixed
      top 1.17333rem
      left 0
      bottom: 0
      z-index 0
      width 100%
      background-color #f4f4f4
      text-align center
      .server
        display flex
        justify-content space-between
        height .93333rem
        padding 0 .4rem
        li
        -ms-flex-align center
        -moz-align-items center
        align-items center
        font-size .32rem
        color #666
        .icon
          display inline-block
          vertical-align middle
          background-image:url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png)
          background-repeat no-repeat
          background-size 98%
          width .13333rem
          height .13333rem
          margin-right .08rem
      .cart
        width 100%
        margin-top  5rem
        height 4rem
        text-align center
        margin-bottom .36667rem
        .img
          vertical-align middle
          display inline-block
          width 3.30667rem
          height 3.30667rem
          margin-bottom .10667rem
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png)
          background-size 3.30667rem 3.30667rem
          background-position center center
          background-repeat no-repeat
        p
          line-height 1
          font-size .37333rem
          color #999
          margin-top -.2rem
      .button
        margin auto
        width 6.4rem
        height 1.22667rem
        font-size .4rem
        text-align center
        line-height 1.22667rem
        color #fff
        background-color #b4282d
        border-radius .04rem
</style>
