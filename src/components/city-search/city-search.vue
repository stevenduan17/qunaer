<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        type="text"
        placeholder="输入城市名或拼音"
        class="input">
    </div>
    <div class="content" ref="content" v-show="keyword">
      <ul>
        <li v-for="item in list" :key="item.id" class="border-bottom">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<!--suppress JSUnfilteredForInLoop -->
<script>
  import BetterScroll from 'better-scroll'

  export default {
    name: 'city-search',
    props: {
      cities: Object
    },
    data () {
      return {
        keyword: '',
        timer: null,
        list: []
      }
    },
    mounted () {
      this.scroll = new BetterScroll(this.$refs.content)
    },
    watch: {
      keyword () {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.list = []
          return
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result
        }, 100)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/styles/varibles"

  .search
    height .72rem
    background $bg-color
    padding .1rem

    .input
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666

  .content
    z-index 1
    position absolute
    top 1.78rem
    left 0
    right 0
    bottom 0
    overflow hidden
    background #eee

    li
      line-height .62rem
      padding-left .22rem
      background white
      color #666

</style>
