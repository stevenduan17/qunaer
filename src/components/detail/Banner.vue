<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img src="http://img1.qunarzz.com/sight/p0/1805/f9/f9fa2c4b30dc9f5aa3.img.jpg_600x330_d94bb1ca.jpg" alt="">
      <div class="info">
        <div class="title">木兰天池</div>
        <div class="count"><span class="iconfont">&#xe626;</span> 3</div>
      </div>
    </div>
    <gallery v-show="showGallery" @close="closeGallery"></gallery>
  </div>
</template>

<script>
  import Gallery from '@/components/gallery/Gallery'

  export default {
    name: 'Banner',
    components: { Gallery },
    data () {
      return {
        showGallery: false
      }
    },
    methods: {
      handleBannerClick () {
        this.showGallery = true
      },
      closeGallery () {
        this.showGallery = false
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .banner
    color white
    position relative
    overflow hidden
    height 0
    padding-bottom 55%

    img
      width 100%

    .info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      background-image linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))

      .title
        flex 1
        font-size .32rem
        padding 0 .2rem

      .count
        margin .14rem .2rem 0 0
        padding 0 .2rem
        height .32rem
        line-height .32rem
        font-size .24rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)

</style>
