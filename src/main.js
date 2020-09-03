//整个项目的入口文件
import Vue from 'vue'
//根组件
import App from './App.vue'
Vue.config.productionTip = false

//路由
import router from '@/router/index.js'
//状态管理
// import store from './store'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'



///HTTP请求,把http封装的方法，挂载到原型链上
import http from './utils/api'
Vue.prototype.$http = http

Vue.use(ElementUI)

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
