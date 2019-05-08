<template>
  <ul class="list">
    <li v-for="item of words" :key="item" class="item">{{item}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'Alphabet',
    data () {
      return {
        words: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N']
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/styles/varibles"

  .list
    position absolute
    right 0
    top 1.68rem
    bottom 0
    width .4rem
    display flex
    flex-direction column
    justify-content center

    .item
      text-align center
      line-height .4rem
      color $bg-color

</style>
