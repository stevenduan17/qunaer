<template>
  <div class="home">
    <v-header></v-header>
    <v-swiper></v-swiper>
    <icons></icons>
  </div>
</template>

<script>
  import VHeader from '@/components/v-header/v-header'
  import VSwiper from '@/components/swiper/v-swiper'
  import Icons from '@/components/icons/icons'

  export default {
    name: 'home',
    components: { Icons, VSwiper, VHeader }
  }
</script>
