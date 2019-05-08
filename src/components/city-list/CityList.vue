<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="b-list">
          <div class="button-wrapper">
            <div class="button">武汉</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="b-list">
          <div class="button-wrapper">
            <div class="button">武汉</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">广州</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <ul class="item-list">
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
        </ul>
        <div class="title border-topbottom">A</div>
        <ul class="item-list">
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
        </ul>
        <div class="title border-topbottom">A</div>
        <ul class="item-list">
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
        </ul>
        <div class="title border-topbottom">A</div>
        <ul class="item-list">
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
        </ul>
        <div class="title border-topbottom">A</div>
        <ul class="item-list">
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
        </ul>
        <div class="title border-topbottom">A</div>
        <ul class="item-list">
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
          <li class="item border-bottom">阿拉善</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'

  export default {
    name: 'CityList',
    mounted () {
      this.scroll = new BetterScroll(this.$refs.wrapper)
    }
  }
</script>

<style lang="stylus" scoped>

  .list
    overflow hidden
    position absolute
    top 1.68rem
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

      .item-list
        line-height .76rem
        padding-left .2rem

</style>
