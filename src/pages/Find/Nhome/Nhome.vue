<template>
  <div class="home">
    <div class="content" v-for="(home,index) in homes">
      <Gap></Gap>
      <div class="inner">
        <div class="top">{{home.title}}</div>
        <div class="middle">
          <img  v-lazy="home.picUrl" alt="">
        </div>
        <div class="bottom">
          <i class="iconfont icon-yanjing"></i>
          <span>{{home.readCount}}人看过</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Gap from '../../../components/Gap/Gap.vue'
  export default {
    name: '',
    data () {
      return {}
    },
    mounted () {
      this.$store.dispatch('getHomes')
    },
    computed: {
      ...mapState({
        homes: state => state.find.homes
      })
    },
    components: {
      Gap
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home
    width 100%
    .content
      width 100%
      .inner
        padding 0 15px
        .top
          width 100%
          background #fff
          margin .2rem 0
          font-size 18px
          color #333
          line-height 24px
          overflow hidden
          text-overflow ellipsis
          display -webkit-box
          -webkit-line-clamp 3
          -webkit-box-orient vertical
          font-family PingFangSC-Regular
        .middle
          width 100%
          height 3.76rem
          margin-bottom .2rem
          overflow hidden
          border-radius .08rem
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
</style>
