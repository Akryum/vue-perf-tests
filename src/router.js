import Vue from 'vue'
import VueRouter from 'vue-router'

import StaticTree from './components/StaticTreeTest'
import StaticBinding from './components/StaticBindingTest'

Vue.use(VueRouter)

const routes = [
  { path: '/static-tree', name: 'static-tree', component: StaticTree },
  { path: '/static-binding', name: 'static-binding', component: StaticBinding },
]

const router = new VueRouter({
  routes,
})

export default router
