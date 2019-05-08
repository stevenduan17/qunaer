<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
  import CityHeader from '@/components/city-header/city-header'
  import CitySearch from '@/components/city-search/city-search'
  export default {
    name: 'City',
    components: { CitySearch, CityHeader }
  }
</script>

<style lang="stylus" scoped>

</style>
