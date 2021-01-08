import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
  state: {
    items: [],
    selectedPath: [],
    statusitems: []
  },
  mutations: {
    database (state, payload) {
      state.items = payload
    },
    setItem (state, payload) {
      state.selectedPath = payload
    },
    statusdef (state, payload) {
      state.statusitems = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
