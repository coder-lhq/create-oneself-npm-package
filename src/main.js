import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import MyNpmComponent from './package'

// Vue.use(MyNpmComponent)
// import MyNpmComponent from 'my-npm-component-perfect'
Vue.use(MyNpmComponent)

new Vue({
  render: h => h(App),
}).$mount('#app')
