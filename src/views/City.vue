<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <alphabet></alphabet>
  </div>
</template>

<script>
  import CityHeader from '@/components/city-header/city-header'
  import CitySearch from '@/components/city-search/city-search'
  import CityList from '@/components/city-list/CityList'
  import Alphabet from '@/components/alphabet/Alphabet'

  export default {
    name: 'City',
    components: { Alphabet, CityList, CitySearch, CityHeader }
  }
</script>

<style lang="stylus" scoped>

</style>
