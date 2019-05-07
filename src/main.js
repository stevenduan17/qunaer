import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

FastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
