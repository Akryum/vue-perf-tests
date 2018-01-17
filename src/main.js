import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

Vue.config.performance = true

new Vue({
  el: '#app',
  router,
  store,
  ...App,
})
