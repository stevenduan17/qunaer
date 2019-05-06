import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import 'common/styles/reset.css'
import 'common/styles/border.css'

FastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
