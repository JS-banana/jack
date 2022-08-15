import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import iView from 'view-design'
import 'view-design/dist/styles/iview.css'
import Ahcomponents from '@ah-ailpha/components'
import './styles/index.less'

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(Ahcomponents)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
