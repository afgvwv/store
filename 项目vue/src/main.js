// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入vuex
import store from "./store"

// 引入element-ui
import ElementUi from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)
// 引入重置样式
import "./assets/css/reset.css"
// 处理公共组件
import commonCoponents from "./components/index"

for(let i in commonCoponents){
  Vue.component(i,commonCoponents[i])
}

//  处理过滤器
 import filters from "./filters"
 for(let i in filters){
   Vue.filter(i,filters[i])
 }

// 图片前缀
Vue.prototype.$imgPre = "http://localhost:3000"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
