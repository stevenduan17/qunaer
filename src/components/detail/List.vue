<template>
  <div class="list">
    <div
      class="item"
      v-for="(item,index) of list"
      :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="children">
        <list :list="item.children"></list>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'List',
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>

  .item-title
    line-height .8rem
    font-size .32rem
    padding .2rem

    .item-title-icon
      display: inline-block
      position relative
      top .06rem
      left .06rem
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem

  .children
    padding 0 .24rem

</style>
