<template>
  <div class="register">
    <PerHeader />
    <div class="content">
      <div class="title">
        <span>手机号注册</span>
      </div>
      <div class="userRegister">
        <div class="inner">
          <div class="public username">
            <input type="text" placeholder="请输入手机号">
          </div>
          <div class="public code">
            <input type="text" placeholder="请输入短信验证码">
            <button class="btn-code">获取验证码</button>
          </div>
          <div class="public pwd">
            <input type="text" placeholder="请输入密码">
          </div>
          <div class="btn btn-register">
            <span>注册</span>
          </div>
          <div class="checkout">
            <span class="inputIcon" @click="isSelect = !isSelect">
              <i class="iconfont icon-xuanzhong1" v-if="isSelect"></i>
              <i class="iconfont icon-xuanzhongyuandian" v-else></i>
            </span>
            <span> 我同意<a href="javascript:;">《服务条款》</a>和 <a href="javascript:;">《《网易隐私政策》》</a></span>
          </div>
        </div>
      </div>
      <div class="footer">
        <span>邮箱帐号注册</span>
        <i class="icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import PerHeader from '../../components/PerHeader/PerHeader.vue'
  export default {
    name: '',
    data () {
      return {
        isSelect: true //是否选中选项框
      }
    },
    components: {
      PerHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .register
    width 100%
    .content
      width 100%
      position fixed
      top 1.17333rem
      left 0
      z-index 10
      .title
        padding .53333rem 0 0
        text-align center
        line-height 0
        span
          font-size .48rem
          line-height .69333rem
          color #333
      .userRegister
          width 100%
          height: 286px
          margin-top .23333rem
          .inner
            padding 0 0.555556rem
            padding-top 1.6rem
            .public
              width 100%
              height 1.28rem
              line-height 0.6rem
              bottom-border-1px(#d9d9d9)
              margin-bottom 0.2rem
              input
                width 8.27rem
                height 0.6rem
                font-size 0.4rem
                line-height 0.6rem
                margin 0.39rem 0
                padding-left 0
                -webkit-tap-highlight-color transparent
                letter-spacing normal
                outline none
            .code
              position relative
              input
                width 5.33rem
              .btn-code
                position absolute
                right 0.22rem
                top 0.3rem
                z-index: 100;
                display block
                width 2.3rem
                height 0.75rem
                text-align center
                color #333
                font-size 14px
                background #fff
                line-height 0.75rem
                border 1px solid #7F7F7F
                border-radius 4px
            .btn-register
              background #b4282d
              margin-top .4rem
              cursor pointer
              color #fff
              width 100%
              height 1.28rem
              font-size 0.4rem
              text-align center
              line-height 1.28rem
              border-radius 3px
            .checkout
              color #7f7f7f
              margin-top .3rem
              line-height .55rem
              clearFix()
              .inputIcon
                float left
                margin-right 5px
                width 14px
                margin-top 3px
                height 14px
                line-height 14px
                font-size 12px
                color red
              span
                float left
                color #999
                font-size 12px
                a
                  color #007AFF
      .footer
        margin-top .74667rem
        text-align center
        span
          font-size .37333rem
          line-height .53333rem
          color #333
        .icon
          display inline-block
          vertical-align middle
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png)
          background-repeat no-repeat
          background-size 100% 100%
          width .37333rem
          height .37333rem
          margin-left -.2rem
          position relative
          top .14rem
</style>
