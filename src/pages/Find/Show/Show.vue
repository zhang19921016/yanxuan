<template>
  <div class="show">
    <div class="top" v-if="homeDate.recModule">
      <div class="t-top">{{homeDate.recModule.recommendName}}</div>
      <div class="t-middle">{{homeDate.recModule.globalName}}</div>
      <div class="t-bottom">
        <ul class="content">
          <li v-for="(pic,index) in collections.lookList" :key="index">
            <img :src="pic.avatar" alt="">
          </li>
        </ul>
      </div>
    </div>
    <Gap></Gap>
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
      this.$store.dispatch('getHomeDate')
      this.$store.dispatch('getLists')
      this.$store.dispatch('getCollections')
    },
    computed: {
      ...mapState({
        homeDate: state => state.find.homeDate,
        lists: state => state.find.lists,
        collections: state => state.find.collections
      })
    },
    components: {
      Gap
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .show
    width 100%
    .top
      display flex
      align-items center
      flex-direction column
      flex-shrink 0
      flex-grow 0
      background-color #fff
      padding-top .37333rem
      margin-bottom .26667rem
      padding-bottom .53333rem
      align-content flex-start
      .t-top
        margin-bottom .32rem
        flex-direction row
        align-items center
        color: #7f7f7f;
        font-size .37333rem
        height .53333rem
        line-height .53333rem
        justify-content center
        font-family PingFangSC-Light
      .t-middle
        max-width 6rem
        lines 2
        word-break break-all
        text-align center
        font-size .42rem
        line-height .64rem
        color #333
        overflow hidden
        text-overflow ellipsis
        -webkit-line-clamp: 2
      .t-bottom
        width 10rem
        height 3.2rem
        margin-top .42667rem
        .content
          display flex
          flex-shrink 0
          flex-grow 0
          align-items stretch
          align-content flex-start
          li
            width 3.2rem
            height 3.2rem
            border-radius 4px
            overflow hidden
            margin 0 .13333rem
            img
              width 100%
              height 100%
</style>
