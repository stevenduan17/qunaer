<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" class="input">
  </div>
</template>

<script>
  export default {
    name: 'city-search'
  }
</script>

<style lang="stylus" scoped>
  @import "~common/styles/varibles"

  .search
    height .72rem
    background $bg-color
    padding .1rem

    .input
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666

</style>
