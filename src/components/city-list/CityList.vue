<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="b-list">
          <div class="button-wrapper">
            <div class="button active">{{this.current}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="b-list">
          <div class="button-wrapper"
               v-for="item of city.hotCities"
               :key="item.id"
               @click="chooseCity(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div v-for="(item,key) of city.cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <ul class="item-list">
            <li class="item border-bottom" v-for="i of item" :key="i.id" @click="chooseCity(i.name)">{{i.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'CityList',
    props: {
      city: {
        type: Object,
        required: true,
        default () {
          return {}
        }
      },
      letter: String
    },
    mounted () {
      this.scroll = new BetterScroll(this.$refs.wrapper)
    },
    computed: {
      ...mapState({
        current: 'city'
      })
    },
    watch: {
      letter () {
        if (this.letter) {
          const el = this.$refs[this.letter][0]
          this.scroll.scrollToElement(el)
        }
      }
    },
    methods: {
      chooseCity (name) {
        // this.$store.dispatch('changeCity', name)
        this.changeCity(name)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles"

  .list
    overflow hidden
    position absolute
    top 1.78rem
    bottom 0
    left 0
    right 0

    .area
      .title
        line-height .42rem
        background #eee
        padding-left .2rem
        color #666
        font-size .26rem

      .b-list
        padding .1rem .6rem .1rem .1rem
        overflow hidden

        .button-wrapper
          float left
          width 33.33%

          .button
            margin .1rem
            padding .08rem 0
            text-align center
            border .02rem solid #ccc
            border-radius .06rem

          .active
            color white
            background $bg-color

      .item-list
        line-height .76rem
        padding-left .2rem

</style>
