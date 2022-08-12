import Select from './src/index.vue'

/* istanbul ignore next */
Select.install = function (Vue) {
  Vue.component(Select.name, Select)
}

export default Select
