<template>
  <div class="gallery" @click="close">
    <div class="wrapper">
      <swiper :options="options">
        <swiper-slide v-for="url in images" :key="url">
          <img :src="url" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Gallery',
    data () {
      return {
        options: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true,
          observer: true
        },
        images: [
          'http://img1.qunarzz.com/sight/p0/1903/89/89fa5c765dcbc8aa3.water.jpg_r_800x800_4500bf6b.jpg',
          'http://img1.qunarzz.com/sight/p0/1903/19/19be4a46d0967575a3.water.jpg_r_800x800_b565e9fa.jpg',
          'http://img1.qunarzz.com/sight/p0/1903/91/91e5750b11e93d47a3.water.jpg_r_800x800_3fa97d1a.jpg'
        ]
      }
    },
    methods: {
      close () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .gallery
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    background black

    >>> .swiper-container
      overflow inherit

    .wrapper
      width 100%
      height 0
      padding-bottom 100%

      img
        width 100%

      .swiper-pagination
        color white
        bottom -1rem

</style>
