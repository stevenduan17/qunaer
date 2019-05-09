<template>
  <div class="home">
    <v-header></v-header>
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
  import { mapState } from 'vuex'

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
        },
        lastCity: ''
      }
    },
    mounted () {
      this.lastCity = this.city
      this._getInfo()
    },
    activated () {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this._getInfo()
      }
    },
    computed: {
      ...mapState(['city'])
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
