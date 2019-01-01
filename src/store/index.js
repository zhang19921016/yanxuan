/**
 *vuex最核心的管理模块
 */
import Vue from 'vue'
import Vuex from 'vuex'

import classify from './modules/classify'
import actions from './actions'
import getters from './getters'
//声明使用插件
Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    classify
  },
  actions,
  getters
})
