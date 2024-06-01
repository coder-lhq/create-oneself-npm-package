const requireComponent = require.context('./', true, /\.vue$/)
// 批量注册组件
const install = function (Vue) {
    if (install.installed) return
    install.installed
    requireComponent.keys().forEach(element => {
        const config = requireComponent(element)
        const componentName = config.default.name
        Vue.component(componentName, config.default || config)
    })
}

// 环境监测 确保是vue环境
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}
