<!--
首页路由组件
-->

<template>
  <div>
    <div id="header">
      <div class="header-top">
        <a class="logo"></a>
        <div class="search" @click="$router.replace('/search')">
          <i class="icon"></i>
          <span>搜索商品, 共19964款好物</span>
        </div>
        <div class="btn">登录</div>
      </div>
      <div class="header-bottom">
        <ul class="inner-left">
          <li :class="{'active':hasClass === 1}"  @click="toggleClass(1)">
            <a href="javascript:;">推荐</a>
          </li>
          <li :class="{'active':hasClass === 2}" @click="toggleClass(2)">
            <a href="javascript:;">居家</a>
          </li>
          <li :class="{'active':hasClass === 3}" @click="toggleClass(3)">
            <a href="javascript:;">鞋包配饰</a>
          </li>
          <li :class="{'active':hasClass === 4}" @click="toggleClass(4)">
            <a href="javascript:;">服装</a>
          </li>
          <li :class="{'active':hasClass === 5}" @click="toggleClass(5)">
            <a href="javascript:;">电器</a>
          </li>
        </ul>
        <div class="inner-right">
          <span class="inner-icon"></span>
        </div>
      </div>
    </div>
    <div class="swiper-container swiper01">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(address,index) in swiperAddresses" :key="index"><img  v-lazy="address" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div  class="swiper-pagination swiper-pagination-bullets"></div>
      </div>
    <div class="servicePolicy">
      <ul class="g-grow">
        <li class="item">
          <a href="javascript:;">
            <i class="service_icon"></i>
            <span>网易自营品牌</span>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <i class="service_icon"></i>
            <span>30天无忧退货</span>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <i class="service_icon"></i>
            <span>48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="section">
      <ul class="s-carousel">
        <li class="s-carousel-item" v-for="(carouselAddress,index) in carouselAddresses" :key="index">
          <img  v-lazy="carouselAddress.url" alt="">
          <div class="text">{{carouselAddress.name}}</div>
        </li>
      </ul>
      <div class="s-bossRecommendModule">
        <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt="">
      </div>
      <div class="s-sceneLightShoppingGuideModule">
        <div class="s-sceneLightShoppingGuideModule-item" v-for="(optAddress,index) in optAddresses" :key="index">
          <div class="title">{{optAddress.title}}</div>
          <div class="desc">{{optAddress.desc}}</div>
          <div class="images">
            <img class="images-left"  v-lazy="optAddress.url[0]" alt="">
            <img class="images-right"  v-lazy="optAddress.url[1]" alt="">
          </div>
        </div>
      </div>
      <Gap></Gap>
      <PerTailor />
      <!--底部-->
      <div class="s-bottom">
        <div class="s-b-inner">
          <div class="inner-header">
            <a href="javascript:;" class="inner-h-left">下载APP</a>
            <a href="javascript:;" class="inner-h-right">电脑版</a>
          </div>
          <div class="inner-footer"></div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import PerTailor from '../../components/PerTailor/PerTailor.vue'
  import Gap from '../../components/Gap/Gap.vue'
  export default {
    data () {
      return {
        hasClass: 1, //1即为第一个有此类
        swiperAddresses: [
          'https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&amp;quality=75&amp;thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/ddd71df43a50749d140786dce1381e15.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/defcddd6a2241b217da7c957da755981.jpg?imageView&quality=75&thumbnail=750x0'
        ],
        carouselAddresses: [
          {url:'http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png',name:'居家'},
          {url:'http://yanxuan.nosdn.127.net/855a0ee7410f534f3db3f7f3a687c153.png',name:'鞋包服饰'},
          {url:'http://yanxuan.nosdn.127.net/42b4ab968ae5b0f38e608131fb68a095.png',name:'服装'},
          {url:'http://yanxuan.nosdn.127.net/40e494813fae78a483483d32fd7338b1.png',name:'电器'},
          {url:'http://yanxuan.nosdn.127.net/8fab9e34dd0f078fc85dedfa8478b3d5.png',name:'婴童'},
          {url:'http://yanxuan.nosdn.127.net/449019db4190bf9ae98b7f2d62d42e26.png',name:'饮食'},
          {url:'http://yanxuan.nosdn.127.net/50acb3ffe87d9ef77834eb379fe017cc.png',name:'洗护'},
          {url:'http://yanxuan.nosdn.127.net/78616d875a47d3f4639f8448775b138e.png',name:'餐厨'},
          {url:'http://yanxuan.nosdn.127.net/21fd4a2a1cf38ce43c2b23825e5508a8.png',name:'文体'},
          {url:'http://yanxuan.nosdn.127.net/073855a1da7a21bf3cab628b99688cc1.png',name:'特色区'}
        ],
        optAddresses: [
          {url:['http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png?imageView&thumbnail=150x150&quality=75','http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png?imageView&thumbnail=150x150&quality=75'],title:'实时好评榜',desc:'精选优质好物'},
          {url:['http://yanxuan.nosdn.127.net/780b2fc0c98fac7b2862a8a111ee615f.png?imageView&thumbnail=150x150&quality=75','http://yanxuan.nosdn.127.net/77bf1ff658f8557391f1b3204cb8ab3b.png?imageView&thumbnail=150x150&quality=75'],title:'新品热销榜',desc:'好物抢先体验'},
          {url:['http://yanxuan.nosdn.127.net/a07c82f8b26a4ed42b1d697eb9ea418f.png?imageView&thumbnail=150x150&quality=75','http://yanxuan.nosdn.127.net/d1d2488296c5e75967ebfbdf8a36d6cc.png?imageView&thumbnail=150x150&quality=75'],title:'严选线下店首家',desc:'体验选式美学'},
          {url:['http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png?imageView&thumbnail=150x150&quality=75','http://yanxuan.nosdn.127.net/e1d2f0b529eddc9b645997d0f16e9aca.png?imageView&thumbnail=150x150&quality=75'],title:'12月必买好物',desc:'冬日小确幸指南'},
        ],
      }
    },
    methods: {
      toggleClass (index) {
        this.hasClass = index
      }
    },
    mounted () {
      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })

    },
    components: {
      PerTailor,
      Gap
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #header
    position fixed
    top 0
    left 0
    z-index 10
    width 100%
    background #fff
    border-bottom 1px solid #d9d9d9
    .header-top
      display flex
      flex-flow row nowrap
      align-items center
      background #fff
      padding .21333rem .4rem
      .logo
        width 1.84rem
        height .53333rem
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
        display inline-block
        margin-right .26667rem
        background-size cover
        background-position center
      .search
        flex-grow 1
        display flex
        justify-content center
        height .74667rem
        font-size .37333rem
        background-color #ededed
        border-radius .10667rem
        text-align center
        line-height .74667rem
        color #666
        .icon
          display inline-block;
          vertical-align middle;
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat no-repeat
          background-size 100% 100%;
          width .37333rem
          height .37333rem
          margin-right .13333rem
          margin-top .2rem

      .btn
        width .98667rem
        height .53333rem
        line-height .53333rem
        text-align center
        color #b4282d
        border 1px solid #b4282d
        border-radius .10667rem
        margin-left .21333rem
        font-size .32rem
    .header-bottom
      background #fff
      margin-top -.01333rem
      position relative
      .inner-left
        display flex
        flex-flow: row nowrap
        background-color #fff
        padding-right 1.33333rem
        li
          padding 0 .21333rem
          margin-left .34rem
          line-height .8rem
          font-size .37333rem
          color #777
          font-weight 700
          text-align center
          &.active
            a
              padding-bottom 4px
              color #b4282d
              border-bottom 2px solid #b4282d
      .inner-right
        position absolute
        top 0
        right 0
        width 1.33333rem
        height .8rem
        text-align center
        line-height .8rem
        .inner-icon
          margin-top -.3rem
          display inline-block
          vertical-align middle
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png)
          background-repeat no-repeat
          background-size 100% 100%
          width .4rem
          height .4rem
  .swiper01
    width 100%
    height 4.93333rem
    margin-top 74.48px
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        img
          width 100%
          height 4.93333rem
    .swiper-pagination
      bottom 0.4rem
      .swiper-pagination-bullet
        width .53333rem
        height .05333rem
        display inline-block
        background #fff
        opacity .4
        border-radius 0
        margin 0 .13333rem 0 0
      .swiper-pagination-bullet-active
        opacity 1
        background #fff!important
        border-radius 0
  .servicePolicy
    background #fff
    .g-grow
      width 100%
      height .96rem
      padding 0 .4rem
      display flex
      align-items center
      .item
        flex 1
        a
          display inline-block
          height .42667rem
          line-height .42667rem
          .service_icon
            display inline-block
            width .42667rem
            height .42667rem
            vertical-align middle
            background-image url("http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png")
            background-repeat no-repeat
            background-size 100% 100%
          span
            margin-left -6px
            line-height .42667rem
            display inline-block
            vertical-align middle
            font-size .32rem
            background-color #FFFFFF
            color #B4282D
  .s-carousel
    width 100%
    height 5.22667rem
    padding-bottom .69333rem
    .s-carousel-item
      float left
      width 1.46667rem
      height 2.08rem
      margin .3rem .26667rem 0
      img
        width 1.46667rem
        height 1.46667rem
      .text
        margin-top .13333rem
        text-align center
        font-size .32rem
        line-height .48rem
        white-space nowrap
        color #333333
  .s-bossRecommendModule
    width 100%
    height 2.13333rem
    img
      width 100%
      height 100%
  .s-sceneLightShoppingGuideModule
    overflow hidden
    padding .13333rem .4rem .4rem .34667rem
    background #fff
    margin-bottom .26667rem
    .s-sceneLightShoppingGuideModule-item
      width 4.57333rem
      height 3.52rem
      float left
      margin .05333rem 0 0 .05333rem
      padding .26667rem 0 0 .26667rem
      border-radius .05333rem
      background #eee
      .title
        padding-left .13333rem
        font-size .42667rem
        font-family PingFangSC-Medium
        color #333333
      .desc
        padding-left .13333rem
        font-size .32rem
        color #7f7f7f
        margin-top .1333rem
      .images
        width: 100%
        clearFix()
        img
          width 2rem
          height 2rem
          float left
          margin-right .05333rem

  .s-bottom
    width 100%
    border-top 1px solid rgba(0,0,0,.15)
    background-color #414141
    .s-b-inner
      width 10rem
      margin-right auto
      margin-left auto
      text-align center
      padding .72rem .26667rem .37333rem
      .inner-header
        width 100%
        a
          width 2.29333rem
          height: .82667rem
          line-height .82667rem
          font-size .32rem
          color #fff
          margin-right .66667rem
</style>
