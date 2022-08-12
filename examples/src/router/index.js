import VueRouter from 'vue-router'
import Vue from 'vue'
// import Ahcomponents from 'packages/components/src';
import Home from '../pages/home.vue'
import routerView from '../pages/router-view.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ah-home',
    component: Home,
  },
  {
    path: 'components',
    name: 'ah-components',
    component: routerView,
    children: [],
  },
]

// Object.keys(Ahcomponents).forEach(com=>{

// })

const files = require.context('packages', false, /\.js$/)

console.log('files', files)

export const router = new VueRouter({
  mode: 'hash',
  routes,
})
