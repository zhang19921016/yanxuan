<template>
  <div class="s-right">
    <div class="content">
      <div class="banner" >
        <img v-if="lists.length>0"  v-lazy="lists[num].wapBannerUrl" alt="">
      </div>
      <ul class="cateList">
        <li v-for="(item,index) in newLists" :key="index">
          <img  v-lazy="item.bannerUrl" alt="">
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>


</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      lists: Array,
      num: Number
    },
    data () {
      return {
        newLists: []
      }
    },
    computed: {
    },
    watch: {
      lists () {
        const {lists,num} = this
        this.newLists = lists[num].subCateList
        this.$nextTick(() => {
          this.rightScroll = new BScroll('.s-right',{
            click: true
          })
        })
      },
      num () {
        const {lists,num} = this
        this.newLists = lists[num].subCateList
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .s-right
    margin-left 2.16rem
    padding 0 .4rem .4rem .28rem
    height 618px
    .content
      .banner
        width 100%
        height 2.56rem
        border-radius 4px
        margin-bottom .42667rem
        img
          width 100%
          height 100%
      .cateList
        width 100%
      li
        display inline-block
        margin-right .45333rem
        font-size 0
        width 1.92rem
        vertical-align top
        img
          width 1.92rem
          height:1.92rem
        p
          height .96rem
          font-size .32rem
          text-align center
          line-height .48rem
          color #333
</style>
