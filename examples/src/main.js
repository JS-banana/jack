import Vue from 'vue'
import App from './App.vue'
// import {Button} from '../../vue2-vite/dist/lew.umd.js'
// import '../../vue2-vite/dist/style.css'
import components from '../components'
// import components from '../../packages/components'

Vue.config.productionTip = false

Vue.use(components)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
