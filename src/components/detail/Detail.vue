<template>
  <div>
    <banner></banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
  import Banner from '@/components/detail/Banner'
  import DetailHeader from '@/components/detail/Header'
  import DetailList from '@/components/detail/List'

  export default {
    name: 'Detail',
    components: { Banner, DetailHeader, DetailList },
    data () {
      return {
        list: [
          {
            title: '成人票',
            children: [
              {
                title: '成人三馆联票',
                children: [
                  { title: 'A三馆联票' },
                  { title: 'B三馆联票' }
                ]
              },
              { title: '成人五馆联票' }
            ]
          },
          { title: '学生票' },
          { title: '儿童票' },
          { title: '特惠票' }
        ]
      }
    },
    mounted () {
      // console.log(this.$route.params.id)
    },
    activated () {
      // 获取动态路由参数
      console.log(this.$route.params.id)
    }
  }
</script>

<style lang="stylus" scoped>

  .content
    height 50rem

</style>
