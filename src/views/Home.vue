<template>
  <div class="home">
    <v-header></v-header>
    <v-swiper></v-swiper>
    Test text
  </div>
</template>

<script>
  import VHeader from '@/components/v-header/v-header'
  import VSwiper from '@/components/swiper/v-swiper'

  export default {
    name: 'home',
    components: { VSwiper, VHeader }
  }
</script>
