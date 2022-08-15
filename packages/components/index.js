import AhButton from './src/button/index'
import AhSelect from './src/select/index'

const components = {
  AhButton,
  AhSelect,
}

const install = function (Vue) {
  if (install.installed) return

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })

  // Vue.prototype.$Message = Message;
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  ...components,
  install,
}

export default API
