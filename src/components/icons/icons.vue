<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div v-for="item of page" :key="item.title" class="icon">
          <div class="image"><img :src="item.icon" alt=""></div>
          <p>{{item.title}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'icons',
    data () {
      return {
        list: [
          {
            icon: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            title: '景点门票'
          }, {
            icon: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            title: '一日游'
          }, {
            icon: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            title: '武汉必游'
          }, {
            icon: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
            title: '亲子游'
          }, {
            icon: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
            title: '游乐场'
          }, {
            icon: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
            title: '动植物园'
          }, {
            icon: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
            title: '踏青赏花'
          }, {
            icon: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
            title: '武汉欢乐谷'
          }, {
            icon: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
            title: '极地海洋'
          }, {
            icon: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
            title: '东湖绿道'
          }
        ]
      }
    },
    computed: {
      pages () {
        const pages = []
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles"

  .icons
    margin-top .1rem

    >>> .swiper-slide
      display flex
      flex-wrap wrap
      height 0
      padding-bottom 50%

      .icon
        position relative
        overflow hidden
        flex 0 0 25%
        width 25%
        height 0
        padding-bottom 25%

        .image
          position absolute
          top 0
          left 0
          right 0
          bottom .44rem
          box-sizing border-box
          padding .1rem

          img
            display block
            margin 0 auto
            height 100%

        p
          position absolute
          left 0
          right 0
          bottom 0
          text-align center
          line-height .44rem
          height .44rem
          color $dark-text-color

</style>
