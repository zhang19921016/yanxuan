
import Vue from 'vue'
import Vuex from 'vuex'

import {reqSearchs,reqSearchAutoComplete} from '../../api/index'
import {
  RECEIVE_SEARCHS,
  RECEIVE_SEARCHAUTOCOMPLETE
} from '../mutation-types'

Vue.use(Vuex)


const state = {
  searchs: {},
  searchAutos: []
}
const mutations = {
  [RECEIVE_SEARCHS] (state,{searchs}) {
    state.searchs = searchs
  },
  [RECEIVE_SEARCHAUTOCOMPLETE] (state,{searchAutos}) {
    state.searchAutos = searchAutos
  }
}

const actions = {
  async getSearchs ({commit}) {
    const result = await reqSearchs()
    const searchs = result.data
    //将数据提交到mutation中
    commit(RECEIVE_SEARCHS,{searchs})
  },
  async getSearchAutoComplete ({commit},value) {
    const result = await reqSearchAutoComplete(value)
    console.log(result);
    const searchAutos = result.data
    if (result.code === '200') {
      //将数据提交到mutation中
      commit(RECEIVE_SEARCHAUTOCOMPLETE,{searchAutos})
    }

  }
}
const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}
