<template>
  <div class="recommend">
    <div class="title">猜你喜欢</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of recommends" :key="index">
        <img :src="item.url" alt="">
        <div class="content">
          <p class="content-title">{{item.title}}</p>
          <p class="content-desc">{{item.desc}}</p>
          <button>查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'recommend',
    props: {
      recommends: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins"

  .recommend
    .title
      margin-top .2rem
      line-height .8rem
      text-indent .2rem
      background #eee

    .item
      display flex
      height 1.9rem

      img
        height 1.7rem
        width 1.7rem
        padding .1rem

      .content
        flex 1
        padding .1rem
        min-width 0

        .content-title
          line-height .54rem
          font-size .32rem
          ellipse()

        .content-desc
          color #ccc
          line-height .58rem
          ellipse()

        button
          background #ff9300
          padding 0 .2rem
          border-radius .08rem
          color #fff
</style>
