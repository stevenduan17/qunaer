<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.url" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'v-swiper',
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: {
            delay: 30000,
            disableOnInteraction: false
          }
        },
        swiperList: [
          {
            id: 1,
            url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
          },
          {
            id: 2,
            url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e0c5d91cb9b435518bb223b81b70874e.jpg_750x200_f2d5c66a.jpg'
          },
          {
            id: 3,
            url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e9f92741ef8b1cb0472ced96150d0d1c.jpg_750x200_1f0a2392.jpg'
          }
        ]
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
