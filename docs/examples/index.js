import Button from '../../packages/view-design/src/components/button'
import Card from '../../packages/view-design/src/components/card'
import Radio from '../../packages/view-design/src/components/radio'
import Icon from '../../packages/view-design/src/components/icon'
import '../../packages/view-design/dist/styles/iview.css'

const components = {
    Button,
    ButtonGroup: Button.Group,
    Card,
    Radio,
    RadioGroup: Radio.Group,
    Icon,
}

const iview = {
    ...components,
    iButton: Button,
}

const install = function (Vue, opts = {}) {
    if (install.installed) return

    Object.keys(iview).forEach((key) => {
        Vue.component(key, iview[key])
    })

    // Vue.prototype.$Message = Message;
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

const API = {
    //   version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    ...components,
}

export default API

// module.exports.default = module.exports = API // eslint-disable-line no-undef
