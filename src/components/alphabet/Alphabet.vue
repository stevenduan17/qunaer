<template>
  <ul class="list">
    <li v-for="key of letters"
        :key="key"
        class="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleClick"
        :ref="key">
      {{key}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Alphabet',
    props: {
      cities: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        isOnTouch: false,
        startY: 0,
        timer: null
      }
    },
    computed: {
      letters () {
        const letters = []
        for (let i in this.cities) {
          // noinspection JSUnfilteredForInLoop
          letters.push(i)
        }
        return letters
      }
    },
    updated () {
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
      handleClick (e) {
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart () {
        this.isOnTouch = true
      },
      handleTouchMove (e) {
        if (this.isOnTouch) {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 89
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)
        }
      },
      handleTouchEnd () {
        this.isOnTouch = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles"

  .list
    position absolute
    right 0
    top 1.68rem
    bottom 0
    width .4rem
    display flex
    flex-direction column
    justify-content center

    .item
      text-align center
      line-height .4rem
      color $bg-color

</style>
