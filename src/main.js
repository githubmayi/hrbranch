import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
import Echarts from 'echarts'
import plugins from './plugins/vue.plugins.js'

Vue.config.productionTip = false
Vue.use(elementUI)
Vue.use(plugins)
Vue.prototype.$axios = Axios
Vue.prototype.$echarts = Echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
