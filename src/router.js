import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/city',
      name: 'city',
      component: () => import('@/views/City')
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/components/detail/Detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
