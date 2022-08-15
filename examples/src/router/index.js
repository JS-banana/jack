import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../pages/home.vue'
import BasicLayout from '../layout/layout.vue'
// import BlankLayout from '../layout/router-view.vue'
import AhButton from '../demos/button/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'ah-home',
    component: Home,
  },
  {
    path: '/components',
    name: 'ah-components',
    meta: { title: 'components' },
    component: BasicLayout,
    children: [
      {
        path: '/button',
        name: 'ah-button',
        meta: { title: 'button 按钮' },
        component: AhButton,
      },
    ],
  },
  {
    path: '/pro-components',
    name: 'ah-pro-components',
    meta: { title: 'pro-components' },
    component: BasicLayout,
    children: [
      {
        path: `/pro-sqltiptree`,
        name: `ah-pro-sqltiptree`,
        meta: { title: 'sqltiptree 提示器' },
        component: () => import('../demos/pro-sqltiptree/index.vue'),
      },
    ],
  },
]

// function registerDemoRoute() {
//   const files = require.context('../demos', true, /index\.vue$/)

//   files.keys().forEach(key => {
//     const name = key.match(/\/(.*)\/index\.vue$/)[1]
//     const reqCom = files(key).default || files(key)

//     if (name.startsWith('pro-')) {
//       routes[2].children.push({
//         path: `/${name}`,
//         name: `ah-${name}`,
//         meta: { title: name },
//         component: reqCom,
//       })
//     } else {
//       routes[1].children.push({
//         path: `/${name}`,
//         name: `ah-${name}`,
//         meta: { title: name },
//         component: reqCom,
//       })
//     }
//   })
// }

// registerDemoRoute()

export const router = new VueRouter({
  mode: 'hash',
  routes,
})
