<!--个人路由组件-->

<template>
  <div class="personal">
    <!--头部-->
    <PerHeader/>
    <!--内容区-->
    <div class="section">
      <div class="top">
        <div class="logo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="btnWrap">
          <div class="btn btnPhone" @click="goLogin(true)">
            <i class="icon iconPhone"></i>
            <span>手机号码登录</span>
          </div>
          <div class="btn btnEmai" @click="goLogin(false)">
            <i class="icon iconEmail"></i>
            <span>邮箱帐号登录</span>
          </div>
          <div class="btn-text">
            <span>手机号快捷注册</span>
            <i class="icon-text"></i>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="itemWrap">
          <span class="item">
            <i class="iconfont icon-weixin"></i>
            <span>微信</span>
          </span>
        </div>
        <div class="itemWrap">
          <span class="item">
            <i class="iconfont icon-QQ"></i>
            <span>QQ</span>
          </span>
        </div>
        <div class="itemWrap">
          <span class="item">
            <i class="iconfont icon-weibo"></i>
            <span>微博</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import PerHeader from '../../components/PerHeader/PerHeader.vue'
  export default {
    data () {
      return {
        isPhoneLogin: true,  //是否手机登陆,true为是
      }
    },
    methods: {
      goLogin (flag) {
        if (flag) {
          this.isPhoneLogin = true
        }else{
          this.isPhoneLogin = false
        }
        const data = this.isPhoneLogin
        PubSub.publish('msg', data)
        this.$router.replace('/login')
      }
    },
    components: {
      PerHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personal
    width 100%
    .section
      position fixed
      top 1.17333rem
      left 0
      bottom: 0
      z-index 0
      width 100%
      background #F2F5F4
      .top
        .logo
          padding-top 2.13333rem
          padding-bottom 2.13333rem
          text-align center
          img
            width 3.57333rem
            height 1.2rem
        .btnWrap
          padding 0 .53333rem
          margin-bottom 2.73333rem
          .btn
            margin-bottom .42667rem
            border-radius 2px
            height 1.25333rem
            line-height 1.25333rem
            border 1px solid #b4282d
            text-align center
            font-size .37333rem
            .icon
              margin-right .21333rem
              position relative
              top -.02667rem
              display inline-block
              vertical-align middle
              background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png)
              background-repeat no-repeat
              background-size .53333rem 3.86667rem
              width .53333rem
              height .53333rem
          .btnPhone
            background-color #b4282d
            color #fff
            .iconPhone
              background-position 0 -.66667rem
          .btnEmai
            color #b4282d
            background-color transparent
          .btn-text
            color #333
            font-size .37333rem
            text-align center
            width 100%
            .icon-text
              position relative
              top -.02667rem
              display inline-block
              vertical-align middle
              background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png)
              background-repeat no-repeat
              background-size 100% 100%
              width .37333rem
              height .37333rem
      .bottom
        position: absolute;
        width 100%;
        left 0;
        bottom 1.06667rem
        height .53333rem
        text-align center
        .itemWrap
          height .53333rem
          line-height .53333rem
          border-right 1px solid #979797
          display inline-block
          text-align center
          padding 0 .53333rem
          .item
            display inline-block
            height .53333rem
            position relative
            top -.13333rem
            .iconfont
              float left
              font-size .37333rem
            span
              float left
              font-size .37333rem
              color #7F7F7F
              margin-left .06667rem

</style>
