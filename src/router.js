import Vue from 'vue'
import VueRouter from 'vue-router'

import StaticTree from './components/StaticTreeTest'
import StaticBinding from './components/StaticBindingTest'
import Child from './components/ChildTest'
import LocalVar from './components/LocalVarTest'

Vue.use(VueRouter)

const routes = [
  { path: '/static-tree', name: 'static-tree', component: StaticTree },
  { path: '/static-binding', name: 'static-binding', component: StaticBinding },
  { path: '/child', name: 'child', component: Child },
  { path: '/local-var', name: 'local-var', component: LocalVar },
]

const router = new VueRouter({
  routes,
})

export default router
