import Vue from 'vue'
import VueRouter from 'vue-router'

import StaticTree from './components/StaticTreeTest'

Vue.use(VueRouter)

const routes = [
  { path: '/static-tree', name: 'static-tree', component: StaticTree },
]

const router = new VueRouter({
  routes,
})

export default router
