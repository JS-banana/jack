import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../pages/home.vue'
import BlankLayout from '../components/layout/blankLayout.vue'
// import AhButton from '../demos/button/index.vue'

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
    meta: { title: '首页' },
  },
  {
    path: '/components',
    name: 'ah-components',
    meta: { title: 'components' },
    component: BlankLayout,
    children: [
      // {
      //   path: 'button',
      //   name: 'ah-button',
      //   meta: { title: 'button 按钮' },
      //   component: resolve => require(['../demos/button/index.vue'], resolve),
      // },
    ],
  },
  {
    path: '/pro-components',
    name: 'ah-pro-components',
    meta: { title: 'pro-components' },
    component: BlankLayout,
    children: [
      // {
      //   path: 'pro-sqltiptree',
      //   name: 'ah-pro-sqltiptree',
      //   meta: { title: 'sqltiptree 提示器' },
      //   component: () => import('../demos/pro-sqltiptree/index.vue'),
      // },
    ],
  },
]

// 自动注册 demos 目录下的文件为路由
function registerDemoRoute() {
  const files = require.context('../demos', true, /index\.vue$/)
  let proRoute = routes.find(n => n.name === 'ah-components')

  files.keys().forEach(key => {
    const name = key.match(/\/(.*)\/index\.vue$/)[1]
    const reqCom = files(key).default || files(key)

    const route = {
      path: `${name}`,
      name: `ah-${name}`,
      meta: { title: reqCom.title },
      component: reqCom,
    }

    if (name.startsWith('pro-')) {
      proRoute = routes.find(n => n.name === 'ah-pro-components')
    }

    if (proRoute) proRoute.children.push(route)
  })
}

registerDemoRoute()

export const router = new VueRouter({
  mode: 'hash',
  routes,
})
