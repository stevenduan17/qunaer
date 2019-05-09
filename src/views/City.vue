<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :city="city"></city-list>
    <alphabet :cities="city.cities"></alphabet>
  </div>
</template>

<script>
  import CityHeader from '@/components/city-header/city-header'
  import CitySearch from '@/components/city-search/city-search'
  import CityList from '@/components/city-list/CityList'
  import Alphabet from '@/components/alphabet/Alphabet'
  import { getCity } from '@/common/api'

  export default {
    name: 'City',
    components: { Alphabet, CityList, CitySearch, CityHeader },
    data () {
      return {
        city: {}
      }
    },
    mounted () {
      getCity().then((city) => {
        this.city = city
      })
    }
  }
</script>

<style lang="stylus" scoped>

</style>
