<template>
  <div class="login">
    <PerHeader />
    <div class="content">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="userLogin">
        <div class="inner">
          <div class="public username">
            <input type="text" :placeholder="isPhoneLogin?'请输入手机号':'邮箱账号'">
          </div>
          <div class="public pwd" :class="{on: loginTypes!==0 }">
            <input type="text" :placeholder="loginTypes ===0?'请输入短信验证码':'请输入密码'" v-if="isPhoneLogin">
            <input type="text" placeholder="密码" v-else>
            <button class="btn-code" v-if="isPhoneLogin && loginTypes === 0">获取验证码</button>
          </div>
          <div class="help">
            <div class="left">
              <span v-if="isPhoneLogin">{{loginTypes === 0?'遇到问题?':'忘记密码'}}</span>
              <span @click="$router.replace('/register')" v-else >注册账号</span>
            </div>
            <div class="right" @click="toggleLogin">
              <span v-if="isPhoneLogin">{{loginTypes === 0?'使用密码验证登录?':'使用短信验证登录'}}</span>
              <span v-else>忘记密码</span>
            </div>
          </div>
          <div class="btn btn-login">
            <span>登录</span>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="btn other-login" @click="$router.replace('/personal')">
          <span>其他登录方式</span>
        </div>
        <div class="userRegister" v-if="isPhoneLogin" @click="$router.replace('/register')">
          <span>注册帐号</span>
          <i class="icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import PerHeader from '../../components/PerHeader/PerHeader.vue'
  export default {
    name: '',
    data () {
      return {
        isPhoneLogin: true,  //是否手机登陆,true为是
        loginTypes: 0, //0代表着手机短信验证 1代表手机密码登陆
      }
    },
    mounted () {
      PubSub.subscribe('msg', (msg, data) => {
        this.isPhoneLogin = data
      })
    },
    methods: {
      toggleLogin () {
        if (this.loginTypes === 0) {
          this.loginTypes = 1
        }else{
          this.loginTypes = 0
        }

      }
    },
    components: {
      PerHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .login
    width 100%
    .content
      width 100%
      position fixed
      top 1.17333rem
      left 0
      z-index 10
      .btn
        width 100%
        height 1.28rem
        font-size 0.4rem
        text-align center
        line-height 1.28rem
        border-radius 3px
      .logo
        width 100%
        text-align center
        margin-top .74667rem
        margin-bottom 0
        img
          width 2.56rem
          height .85333rem
      .userLogin
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
            margin-bottom 0.4rem
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
          .pwd
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
            &.on
              margin-top -.5rem
          .help
            height 0.582rem
            line-height 0.582rem
            padding 0.233rem 0 2.24rem
            .left
              float left
              height 0.6rem
              text-decoration none
              cursor pointer
              color #7f7f7f !important
              font-size 0.4rem
              line-height 0.6rem
            .right
              float right
              background none
              color #333
              font-size 0.4rem
              height 0.6rem
              padding 0
              line-height 0.6rem
          .btn-login
            background #b4282d
            margin-top -1.1rem
            cursor pointer
            color #fff
      .footer
        margin-top .3rem
        padding 0 .53333rem
        .other-login
          color #b4282d
          background-color transparent
          border 1px solid #b4282d

        .userRegister
          margin-top .12667rem
          text-align center
          line-height .53333rem;
          span
            font-size .37333rem
            line-height .53333rem
            color #333
          .icon
            margin-left .05333rem
            transform translateY(.1rem)
            display inline-block
            vertical-align middle
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png)
            background-repeat no-repeat
            background-size 100% 100%
            width .37333rem
            height .37333rem
</style>
