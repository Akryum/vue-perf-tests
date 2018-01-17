import Vue from 'vue'
import router from './router'
import store from './store'
import VirtualScroller from 'vue-virtual-scroller'
import App from './App.vue'

Vue.use(VirtualScroller)

Vue.config.performance = true

new Vue({
  el: '#app',
  router,
  store,
  ...App,
})
