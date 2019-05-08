<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of weekends" :key="index">
        <div class="image-wrapper">
          <img :src="item.url" alt="">
        </div>
        <div class="content">
          <p class="content-title">{{item.title}}</p>
          <p class="content-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'weekend',
    props: {
      weekends: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins"

  .weekend
    .title
      margin-top .2rem
      line-height .8rem
      text-indent .2rem
      background #eee

    .image-wrapper
      overflow hidden
      height 0
      padding-bottom 33.9%

      img
        width 100%

    .content
      padding .1rem
      min-width 0

      .content-title
        color #666
        line-height .44rem
        font-size .32rem
        ellipse()

      .content-desc
        color #666
        line-height .58rem
        ellipse()
</style>
