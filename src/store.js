import Vue from 'vue'
import Vuex from 'vuex'
import faker from 'faker'
import items from 'raw-loader!../items.json'
import { JobQueue, splitArray } from './utils'

console.log(JSON.parse(items))

function optimizeItem (item) {
  const data = {
    vote: 0,
  }
  Object.defineProperty(data, 'data', {
    configurable: false,
    value: item,
  })
  return data
}

Vue.use(Vuex)

const store = new Vuex.Store({
  state () {
    return {
      items: [],
      loading: false,
      progress: 0,
    }
  },
  getters: {
    itemCount: state => state.items.length,
  },
  mutations: {
    clearItems (state) {
      state.items = []
    },
    addItems (state, items) {
      state.items.push(...items)
    },
    loading (state, value) {
      state.loading = value
    },
    progress (state, value) {
      state.progress = value
    },
    voteItem (state, item) {
      item.vote++
    },
  },
  actions: {
    fetchItems ({ commit }, { count, split, optimize }) {
      commit('clearItems')
      commit('loading', true)
      requestAnimationFrame(async resolve => {
        const data = JSON.parse(items).map(
          item => optimize ? optimizeItem(item) : {
            data: item,
            vote: 0,
          }
        )
        const timeStart = performance.now()
        if (split) {
          const queue = new JobQueue()
          splitArray(data, count).forEach(
            chunk => queue.addJob(done => requestAnimationFrame(() => {
              commit('addItems', chunk)
              done()
            }))
          )
          await queue.start()
        } else {
          commit('addItems', data)
        }
        const timeEnd = performance.now()
        console.log('time', Math.round(timeEnd - timeStart), 'ms', 'split', split, 'optimize', optimize)
        commit('loading', false)
      })
    },
  },
})

export default store
