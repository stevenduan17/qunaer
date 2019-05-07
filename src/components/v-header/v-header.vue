<template>
  <div class="header">
    <div class="left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe632;</span> 输入城市/景点/游玩主题
    </div>
    <div class="right">城市<span class="iconfont">&#xe64a;</span></div>
  </div>
</template>

<script>
  export default {
    name: 'v-header'
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles"

  .header
    height .86rem
    display flex
    line-height .86rem
    background #00bcd4
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
      border-radius .32rem
      color #ccc

    .right
      width 1.24rem
      float right
      text-align center

      span
        margin-left .1rem
        font-size .2rem

</style>
