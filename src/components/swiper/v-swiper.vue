<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swipers" :key="item.id">
        <img :src="item.url" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'v-swiper',
    props: {
      swipers: Array
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: true
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.667%
    background #eee

    >>> .swiper-pagination-bullet-active
      background #ffffff

  img
    width 100%

</style>
