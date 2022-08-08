import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
// import {Button} from '../../vue2-vite/dist/lew.umd.js'
// import '../../vue2-vite/dist/style.css'
// import components from '../components'
import Ahcomponents from '@ah-ailpha/components';

Vue.config.productionTip = false;

Vue.use(Ahcomponents);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
