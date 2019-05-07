<template>
  <div class="home">
    <v-header></v-header>
    <v-swiper></v-swiper>
    <icons></icons>
    <recommend></recommend>
    <weekend></weekend>
  </div>
</template>

<script>
  import VHeader from '@/components/v-header/v-header'
  import VSwiper from '@/components/swiper/v-swiper'
  import Icons from '@/components/icons/icons'
  import Recommend from '@/components/recommend/recommend'
  import Weekend from '@/components/weekend/weekend'

  export default {
    name: 'home',
    components: { Weekend, Recommend, Icons, VSwiper, VHeader }
  }
</script>
