import Vue from 'vue'
import Vuex from 'vuex'

import {reqListData} from '../../api/index'
import {
  RECEIVE_LIST,
} from '../mutation-types'

Vue.use(Vuex)


const state = {
  lists: [],
}
const mutations = {
  [RECEIVE_LIST] (state,{list}) {
    state.lists = list
  },
}

const actions = {
  async getListData ({commit}) {
    const result = await reqListData()
    if (result.code === 0) {
      const list = result.data
      //将数据提交到mutation中
      commit(RECEIVE_LIST,{list})
    }
  },
}


const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}
