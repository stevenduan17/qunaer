<template>
  <div>
    <router-link
      v-show="showIcon"
      to="/"
      tag="div"
      class="header-abs">
      <span class="iconfont">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showIcon" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="back">
          <span class="iconfont">&#xe624;</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        showIcon: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    activated () {
      window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        const top = document.documentElement.scrollTop
        if (top > 60) {
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = { opacity }
          this.showIcon = false
        } else {
          this.showIcon = true
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles"

  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    background: rgba(0, 0, 0, .8)
    text-align center

    span
      color white
      line-height .8rem

  .header-fixed
    position fixed
    overflow hidden
    top 0
    left 0
    right 0
    height .86rem
    line-height .86rem
    font-size .32rem
    text-align center
    color white
    background $bg-color

    .back
      color white
      position absolute
      font-size .4rem
      width .64rem
      text-align center
      top 0
      left 0
</style>
