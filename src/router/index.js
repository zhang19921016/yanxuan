/**
 * 路由器对象  配置路由
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history', // 去除路由路径中的#
  routes
})
