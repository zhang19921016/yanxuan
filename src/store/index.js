/**
 *vuex最核心的管理模块
 */
import Vue from 'vue'
import Vuex from 'vuex'

import classify from './modules/classify'
import find from './modules/find'
import search from './modules/search'
import actions from './actions'
import getters from './getters'
//声明使用插件
Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    classify,
    find,
    search
  },
  actions,
  getters
})
