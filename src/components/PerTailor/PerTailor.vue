<template>
  <div class="s-personalTailorModule">
    <div class="title">私人订制</div>
    <div class="swiper-container" id="swiper-container-personal">
      <div class="swiper-wrapper">
        <ul class="swiper-slide" v-for="(personalAddress,index) in personalAddresses" :key="index">
          <li class="slide-item" v-for="(item,index) in personalAddress" :key="index">
            <img :src="item.url" alt="">
            <div class="info">
              <span>{{item.content}}</span>
              <span>&nbsp;</span>
              <span class="price">¥{{item.price}}</span>
            </div>
          </li>
        </ul>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name: '',
    data () {
      return {
        personalAddresses: [
          [
            {
              url:'http://yanxuan.nosdn.127.net/899e50fd27d1db605fd5486f173492b2.png?imageView&quality=65&thumbnail=330x330',
              content:'3双/5双装 女式原野系...',
              price: 36.9
            },
            {
              url:'http://yanxuan.nosdn.127.net/1979054e3a1c8409f10191242165e674.png?imageView&quality=65&thumbnail=330x330',
              content:'纯牛奶',
              price: 88
            },
            {
              url:'http://yanxuan.nosdn.127.net/2dc80f89502207f3f55997f95cd6825e.png?imageView&quality=65&thumbnail=330x330',
              content:'女式立裁紧身运动衣',
              price: 239
            },
          ],
          [
            {
              url:'http://yanxuan.nosdn.127.net/bddb509c2da682444968b22f681dad27.png?imageView&quality=65&thumbnail=330x330',
              content:'男/女幸运红舒适中筒袜组...',
              price: 49
            },
            {
              url:'http://yanxuan.nosdn.127.net/64f33b256b0f8660b8b6184dbf9bfdc2.png?imageView&quality=65&thumbnail=330x330',
              content:'阿胶糕私享装 500克',
              price: 158
            },
            {
              url:'http://yanxuan.nosdn.127.net/44a81df67df863005db9a23f7e310e90.png?imageView&quality=65&thumbnail=330x330',
              content:'100%羊毛 女式全成型...',
              price: 669
            },
          ],
          [
            {
              url:'http://yanxuan.nosdn.127.net/897ddfb7a57f0b4dc5c39590373cef55.png?imageView&quality=65&thumbnail=330x330',
              content:'日本制造 24K金T型美...',
              price: 459
            },
            {
              url:'http://yanxuan.nosdn.127.net/122a30188b07fa93daf3257da917296b.png?imageView&quality=65&thumbnail=330x330',
              content:'网易智造T300无线吸尘...',
              price: 1599
            },
            {
              url:'http://yanxuan.nosdn.127.net/78373dc771dd3be969bd15a3538378b3.png?imageView&quality=65&thumbnail=330x330',
              content:'全棉超柔无捻干发帽',
              price: 29
            },
          ],
          [
            {
              url:'http://yanxuan.nosdn.127.net/822bebafc5d20d9659d16ddf2bebc0c2.png?imageView&quality=65&thumbnail=330x330',
              content:'微电波美眼笔',
              price: 79
            },
            {
              url:'http://yanxuan.nosdn.127.net/82de8fdea1c8bba21b26099612ff5605.png?imageView&quality=65&thumbnail=330x330',
              content:'严选礼品卡 500元面值',
              price: 500
            },
            {
              url:'http://yanxuan.nosdn.127.net/fa953c6e175c00897e653a87785382c0.png?imageView&quality=65&thumbnail=330x330',
              content:'懒人抹布',
              price: 13.99
            }
          ]
        ]
      }
    },
    mounted () {
      new Swiper ('#swiper-container-personal', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .s-personalTailorModule
    background-color #fff
    margin-bottom .26667rem
    .title
      width 100%
      height 1.33333rem
      line-height 1.33333rem
      padding 0 .4rem
      background #fff
      overflow hidden
      font-size: .42667rem;
      font-family: PingFangSC-Regular;
    .swiper-container
      width 100%
      height 185px
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          width 100%
          .slide-item
            padding 0!important
            margin-left .26667rem
            width 2.88rem
            float left
            color #333
            img
              background-color #f5f5f5
              border-radius 4
              margin-bottom .16rem
              width 2.88rem
              height 2.88rem
            .info
              margin-bottom .13333rem
              padding 0 .13333rem
              font-size .32rem
              overflow visible
              white-space normal
              line-height .48rem
              .price
                color #b4282d
      .swiper-pagination
        bottom .32rem

</style>
