<template>
  <div class="wrap">
    <div class="expert" ref="expert">
      <div class="inner" v-for="(expert,index) in experts" :key="index">
        <Gap></Gap>
        <div class="inner-one" v-if="expert.type === 0">
          <div class='top'>
            <img v-lazy="expert.avatar" alt="">
            <span>{{expert.nickname}}</span>
          </div>
          <div class="text">
            {{expert.title}}
          </div>
          <div class="middle">
            <img v-lazy="expert.picUrl" alt="">
          </div>
          <div class="bottom">
            <i class="iconfont icon-yanjing"></i>
            <span>{{expert.readCount}}人看过</span>
          </div>
        </div>
        <div class="inner-two"  v-else>
          <div class="left">
            <div class="top">
              <img v-lazy="expert.avatar" alt="">
              <span>{{expert.nickname}}</span>
            </div>
            <div class="text">{{expert.title}}</div>
            <div class="desc">{{expert.subTitle}}</div>
            <div class="bottom">
              <i class="iconfont icon-yanjing"></i>
              <span>{{expert.readCount}}人看过</span>
            </div>
          </div>
          <div class="right">
            <img v-lazy="expert.picUrl" alt="">
          </div>
        </div>
      </div>
      <div class="inner" v-for="(expert,index) in newExperts" :key="index" v-if="newExperts.length>0">
        <Gap></Gap>
        <div class="inner-one" v-if="expert.type === 0">
          <div class='top'>
            <img v-lazy="expert.avatar" alt="">
            <span>{{expert.nickname}}</span>
          </div>
          <div class="text">
            {{expert.title}}
          </div>
          <div class="middle">
            <img v-lazy="expert.picUrl" alt="">
          </div>
          <div class="bottom">
            <i class="iconfont icon-yanjing"></i>
            <span>{{expert.readCount}}人看过</span>
          </div>
        </div>
        <div class="inner-two"  v-else>
          <div class="left">
            <div class="top">
              <img v-lazy="expert.avatar" alt="">
              <span>{{expert.nickname}}</span>
            </div>
            <div class="text">{{expert.title}}</div>
            <div class="desc">{{expert.subTitle}}</div>
            <div class="bottom">
              <i class="iconfont icon-yanjing"></i>
              <span>{{expert.readCount}}人看过</span>
            </div>
          </div>
          <div class="right">
            <img v-lazy="expert.picUrl" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {reqExperts} from '../../../api'
  import Gap from '../../../components/Gap/Gap.vue'
  import {mapState} from 'vuex'
  export default {
    name: '',
    data () {
      return {
        noData: false,
        newExperts: []
      }
    },
    mounted () {
      this.$store.dispatch('getExperts')
      this.scrollFn()
    },
    computed: {
      ...mapState({
        experts: state => state.find.experts
      }),
    },
    methods: {
      scrollFn () {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll('.wrap',{
              click: true
            })
          }else{
            this.scroll.refresh();
          }
          let n = 0;
          this.scroll.on("pullingUp",async () => {
            console.log('updated');
            n++;
            //发送请求
            const result = await reqExperts(5,4)
            if (result.code === '200') {
              const experts = result.data.result
              //更改newExperts
              this.newExperts = this.newExperts.concat(experts)
            }
            setTimeout(() => {
              // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
              this.scroll.finishPullUp()
            }, 2000)
          });
        })
      }
    },
    components: {
      Gap
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .wrap
    width 100%
    height 667px
    overflow hidden
    .expert
      width 100%
      .inner
        width 100%
        background #fff
        margin .2rem 0
        .inner-one
          padding 0 15px
          .top
            width 100%
            height 28px
            font-size 16px
            color #333
            line-height 28px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            margin 14px 0
            img
              width 28px
              height 28px
              border-radius 50%
              border .01rem solid #d9d9d9
              margin-right .12rem
            span
              display inline-block
              width 28px
              height 28px
              transform translateY(-6px)
          .text
            font-size 18px
            color #333
            line-height 27px
            margin -.08rem 0 .16rem 0
            overflow hidden
            text-overflow ellipsis
            font-family PingFangSC-Regular

          .middle
            width 100%
            height 188px
            border-radius .08rem
            margin-bottom .2rem
            img
              width 100%
              height 100%
          .bottom
            width 100%
            height 16.89px
            margin-bottom 15px
            font-size 12px
            color: #999;
            line-height 16.89px
            margin-top .18rem
        .inner-two
          width 100%
          height 168px
          padding 0 15px
          clearFix()
          .left
            width 200px
            height 136px
            float left
            .top
              width 100%
              height 28px
              font-size 16px
              color #333
              line-height 28px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              margin 14px 0
              img
                width 28px
                height 28px
                border-radius 50%
                border .01rem solid #d9d9d9
                margin-right .12rem
              span
                display inline-block
                height 28px
                transform translateY(-6px)
            .text
              font-size 18px
              color #333
              height 50px
              line-height 27px
              margin -.08rem 0 .16rem 0
              overflow hidden
              text-overflow ellipsis
              display -webkit-box
              -webkit-line-clamp 2
              -webkit-box-orient vertical
              font-family PingFangSC-Regular
            .desc
              width 100%
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              font-size 14px
              line-height .4rem
              padding-top .08rem
              color #7f7f7f
            .bottom
              width 100%
              height 16.89px
              margin-bottom 15px
              font-size 12px
              color: #999;
              line-height 16.89px
              margin-top .18rem
          .right
            width 136px
            height 136px
            float right
            border-radius .08rem
            img
              width 100%
              height 100%
</style>
