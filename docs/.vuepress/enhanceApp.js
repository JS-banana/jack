import ViewUI from 'view-design'
import components from '@ah-ailpha/components'
import ProSqlTipTree from '@ah-ailpha/pro-sqltiptree'

import 'view-design/dist/styles/iview.css'

import vue from 'vue'
vue.use(ViewUI)

export default ({
  Vue,
  // options,
  // router,
  // siteData,
}) => {
  // Vue.use(ViewUI)
  Vue.use(components)
  Vue.use(ProSqlTipTree)
}
