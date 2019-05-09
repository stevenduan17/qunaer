import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '武汉'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  console.error(e)
}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  actions: {
    changeCity (context, city) {
      context.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {
        console.error(e)
      }
    }
  },
  getters: {
    doubleCity (state) {
      // something like computed in component
      return `城市：${state.city}`
    }
  }
})
