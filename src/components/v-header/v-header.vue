<template>
  <div class="header">
    <div class="left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe632;</span> 输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="right">{{this.city}}<span class="iconfont">&#xe64a;</span></div>
    </router-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'v-header',
    computed: {
      ...mapState(['city'])
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles"

  .header
    height .86rem
    display flex
    line-height .86rem
    background $bg-color
    color #ffffff

    .left
      width .64rem
      float left

      span
        display inline-block
        width 100%
        text-align center

    .search
      flex 1
      height .64rem
      line-height .64rem
      background #ffffff
      text-align center
      margin .12rem .2rem
      border-radius .14rem
      color #ccc

    .right
      min-width 1.04rem
      padding 0 .1rem
      float right
      text-align center
      color white

      span
        margin-left .1rem
        font-size .2rem

</style>
