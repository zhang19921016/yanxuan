<template>
  <div class="success">
    <PerHeader/>
    <div class="content">
      <h2>王大锤的个人中心</h2>
      <button class="btn" @click="$router.replace('/personal')">退出登录</button>
    </div>
  </div>
</template>

<script>
  import PerHeader from '../../components/PerHeader/PerHeader.vue'
  export default {
    name: '',
    data () {
      return {}
    },
    components: {
      PerHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .success
    width 100%
    .content
      position fixed
      top 1.17333rem
      left 0
      bottom: 0
      z-index 0
      width 100%
      background-color #f4f4f4
      text-align center
      padding 0 .5rem
      .btn
        width 80%
        height 1.28rem
        font-size 0.4rem
        text-align center
        line-height 1.28rem
        border-radius 3px
        background red
        position absolute
        bottom 2rem
        left 50%
        transform translateX(-50%)
</style>
