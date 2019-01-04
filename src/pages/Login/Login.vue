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
            <input type="text" :placeholder="isPhoneLogin?'请输入手机号':'邮箱账号'" v-model="username">
          </div>
          <div class="public pwd" :class="{on: loginTypes!==0 }">
            <input type="text" :placeholder="loginTypes ===0?'请输入短信验证码':'请输入密码'" v-if="isPhoneLogin" v-model="pwd">
            <input type="text" placeholder="密码" v-else v-model="pwd">
            <button class="btn-code" v-if="isPhoneLogin && loginTypes === 0" @click="sendCode">{{computeTime?`已发送${computeTime}s`:'发送验证码'}}</button>
          </div>
          <div class="help">
            <div class="errMsg" v-if="errMsg.length>0">
              <span>{{errMsg}}</span>
            </div>
            <div class="left">
              <span v-if="isPhoneLogin">{{loginTypes === 0?'遇到问题?':'忘记密码'}}</span>
              <span @click="$router.replace('/register')" v-else >注册账号</span>
            </div>
            <div class="right" @click="toggleLogin">
              <span v-if="isPhoneLogin">{{loginTypes === 0?'使用密码验证登录?':'使用短信验证登录'}}</span>
              <span v-else>忘记密码</span>
            </div>
          </div>
          <div class="btn btn-login" @click="login">
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
  import {MessageBox,Toast} from 'mint-ui';
  import PerHeader from '../../components/PerHeader/PerHeader.vue'
  import {reqSendcode,reqLoginSms} from '../../api/'
  export default {
    name: '',
    data () {
      return {
        isPhoneLogin: true,  //是否手机登陆,true为是
        loginTypes: 0, //0代表着手机短信验证 1代表手机密码登陆
        username: '', //用户输入登陆的凭证
        pwd: '' , //密码或短信验证码
        errMsg: '' ,//错误提示
        computeTime: 0, //发送验证码的提示时间
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

      },
      async sendCode () {
        if (!this.flag) {
          this.computeTime = 30
          this.flag = true
          const intervalId = setInterval(() => {
            this.computeTime--
            if (this.computeTime <= 0) {
              this.computeTime = 0
              this.flag = false
              clearInterval(intervalId)
            }

          },1000)
          const result = await reqSendcode(this.username)
          if (result.code === 0) {
            //短信发送成功
            Toast({
              message: '短信发送成功',
              position: 'middle',
              duration: 5000
            });
          }else{
            //短信发送失败
            //清除定时器
            this.computeTime = 0
            //提示重新发送
            MessageBox.alert(result.msg);
          }
        }

      },
      async login () {
        const {username,pwd,isPhoneLogin,loginTypes} = this
        const regMaill = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$") //邮箱正则
        const regPwd  = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/ //密码正则
        const regPhone = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/ //手机号正则
        if (isPhoneLogin) {
          //手机密码登陆
          if (!username) {
            this.errMsg = '账号不能为空!'
          }else if (!pwd) {
            this.errMsg = '密码不能为空!'
          }else if (!regPhone.test(username) && !regPwd.test(pwd)) {
            this.errMsg = '账号或密码错误!'
          }
          //手机登陆
          if (!loginTypes) {
            //短信验证登陆
            const result = await reqLoginSms(username,pwd)
            console.log(result);
            if (result.code !== 0) {
              this.errMsg = '验证码错误!'
            }
          }
        }else{
          //邮箱登陆
          if (!username) {
            this.errMsg = '账号不能为空!'
          }else if (!pwd) {
            this.errMsg = '密码不能为空!'
          }else if (!regMaill.test(username) && !regPwd.test(pwd)) {
            this.errMsg = '账号或密码错误!'
          }
        }
        if (!this.errMsg) {
          this.$router.replace('/success')
        }
        this.username = ''
        this.pwd = ''
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
            .errMsg
              width 298px
              margin-top -3px
              color #b4282d
              font-size 12px
              line-height 20px
              vertical-align top
              word-break break-all
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
