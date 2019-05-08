<template>
  <div class="home">
    <v-header :city="info.city"></v-header>
    <v-swiper :swipers="info.swipers"></v-swiper>
    <icons :icons="info.icons"></icons>
    <recommend :recommends="info.recommends"></recommend>
    <weekend :weekends="info.weekends"></weekend>
  </div>
</template>

<script>
  import VHeader from '@/components/v-header/v-header'
  import VSwiper from '@/components/swiper/v-swiper'
  import Icons from '@/components/icons/icons'
  import Recommend from '@/components/recommend/recommend'
  import Weekend from '@/components/weekend/weekend'
  import { getInfo } from '@/common/api'

  export default {
    name: 'home',
    components: { Weekend, Recommend, Icons, VSwiper, VHeader },
    data () {
      return {
        info: {
          city: '',
          swipers: [],
          icons: [],
          recommends: [],
          weekends: []
        }
      }
    },
    mounted () {
      this._getInfo()
    },
    methods: {
      _getInfo () {
        getInfo().then((info) => {
          this.info = info
        })
      }
    }
  }
</script>
