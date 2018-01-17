import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state () {
    return {
      items: []
    }
  },
  mutations: {
    addItems (state, items) {
      state.items.push(...items)
    }
  },
})

export default store
