<template>
  <div class="icons" :options="swiperOption">
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
    props: {
      icons: Array
    },
    data () {
      return {
        swiperOption: {
          autoplay: false
        }
      }
    },
    computed: {
      pages () {
        const pages = []
        this.icons.forEach((item, index) => {
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
