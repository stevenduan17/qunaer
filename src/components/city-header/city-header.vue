<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="back">
        <span class="iconfont">&#xe624;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'city-header'
  }
</script>

<style lang="stylus" scoped>
  @import "~common/styles/varibles";

  .header
    position relative
    overflow hidden
    height .86rem
    line-height .86rem
    font-size .32rem
    text-align center
    color white
    background $bg-color

    .back
      color white
      position absolute
      font-size .4rem
      width .64rem
      text-align center
      top 0
      left 0

</style>
