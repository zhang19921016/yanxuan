<template>
  <div class="header">
    <div class="left" @click="$router.replace('/home')"></div>
    <div class="middle"></div>
    <div class="right">
      <i class="icon icon-search"></i>
      <i class="icon icon-cart"></i>
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
  .header
    position fixed !important
    top 0
    left 0
    z-index 10
    width 100%
    height 1.16rem
    background-color #fafafa
    border-bottom .01rem solid #d9d9d9
    padding 0 .21333rem 0 .32rem;
    .left
      width .64rem
      height .58667rem
      display inline-block
      vertical-align middle
      background-position 0 -.98667rem
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png)
      background-repeat no-repeat
      background-size 2.29333rem 5.6rem
    .middle
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      margin auto
      line-height 50px
      text-align center
      display inline-block
      vertical-align middle
      width 2.29333rem
      height .72rem
      background-position 0 -1.70667rem
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png)
      background-repeat no-repeat
      background-size 2.29333rem 5.6rem
    .right
      float right
      .icon
        width .85333rem
        height .85333rem
        display inline-block
        vertical-align middle
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png)
        background-repeat no-repeat
        background-size 2.29333rem 5.6rem
      .icon-search
        background-position 0 -4.74667rem
</style>
