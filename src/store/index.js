import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    database (state, payload) {
      state.items = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
