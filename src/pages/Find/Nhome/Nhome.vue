<template>
  <div class="home">HOME</div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {}
    },
    mounted () {
      this.$store.dispatch('getHomes')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
