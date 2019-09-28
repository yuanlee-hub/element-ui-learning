import Vue from 'vue'
import ElementUI from 'element-ui'
import './assets/base.css'
import './assets/element-ui-theme.css'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import App from './App.vue'

Vue.use(ElementUI)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
