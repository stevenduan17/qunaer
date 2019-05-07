<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of list" :key="index">
        <div class="image-wrapper">
          <img :src="item.url" alt="">
        </div>
        <div class="content">
          <p class="content-title">{{item.title}}</p>
          <p class="content-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'weekend',
    data () {
      return {
        list: [
          {
            url: 'http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg',
            title: '武汉必打卡',
            desc: '到武汉感受神奇的热干面之都'
          },
          {
            url: 'http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg',
            title: '武汉必打卡',
            desc: '到武汉感受神奇的热干面之都'
          }, {
            url: 'http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg',
            title: '武汉必打卡',
            desc: '到武汉感受神奇的热干面之都'
          }, {
            url: 'http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg',
            title: '武汉必打卡',
            desc: '到武汉感受神奇的热干面之都'
          }, {
            url: 'http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg',
            title: '武汉必打卡',
            desc: '到武汉感受神奇的热干面之都'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins"

  .weekend
    .title
      margin-top .2rem
      line-height .8rem
      text-indent .2rem
      background #eee

    .image-wrapper
      overflow hidden
      height 0
      padding-bottom 33.9%

      img
        width 100%

    .content
      padding .1rem
      min-width 0

      .content-title
        color #666
        line-height .44rem
        font-size .32rem
        ellipse()

      .content-desc
        color #666
        line-height .58rem
        ellipse()
</style>
