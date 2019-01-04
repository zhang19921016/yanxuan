<template>
  <div id="footer" ref="footerNavs">
    <a href="javascript:;" :class="{'active':$route.path.indexOf(nav.path)>=0}"  v-for="(nav,index) in navs" :key="index" @click="toggleClass(index)" >
      <i class="iconfont" :class="nav.className"></i>
      <span>{{nav.name}}</span>
    </a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navs: [
          {code: 0,className: 'icon-shouye1',name:'首页',path: '/home'},
          {code: 1,className: 'icon-leimupinleifenleileibie',name:'分类',path: '/classify'},
          {code: 2,className: 'icon-shiwu',name:'识物',path: '/find'},
          {code: 3,className: 'icon-gouwuche',name:'购物车',path: '/shopCart'},
          {code: 4,className: 'icon-geren',name:'个人',path: '/personal'},
        ],
      }
    },
    mounted () {
      this.initActive();
    },
    methods: {
      toggleClass (index) {
        this.$router.replace(this.navs[index].path)
        let that = this.$refs.footerNavs.children
        that = Array.prototype.slice.call(that)
        that.forEach(item => item.className = '')
        that[index].className = 'active'
      },
      initActive () {
        const path = this.$route.path
        const that = this.$refs.footerNavs.children
        const newArr = this.navs.filter(item => path.indexOf(item.path) >= 0)
        if (newArr.length > 0) {
          const index = this.navs.indexOf(newArr[0])
          that[index].className = 'active'
        }

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #footer
    position fixed
    left 0
    bottom 0
    z-index 100
    display flex
    text-align center
    justify-content space-around
    width 100%
    height 1.30667rem
    margin-top -1.30667rem
    background #fff
    border-top 1px solid #d9d9d9
    a
      display flex
      flex-direction: column
      align-items center
      justify-content center
      &.active
        color #b4282d
      span
        display block
        font-size .32rem
        margin-top .09333rem
        line-height 1


</style>
