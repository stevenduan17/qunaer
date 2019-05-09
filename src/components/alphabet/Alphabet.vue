<template>
  <ul class="list">
    <li v-for="(item,key) of cities" :key="key" class="item">{{key}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'Alphabet',
    props: {
      cities: Object
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles"

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
