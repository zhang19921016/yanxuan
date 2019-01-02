
import Vue from 'vue'
import Vuex from 'vuex'

import {reqTabs,reqRecommends,reqExperts,reqHomeData,reqGetList,reqGetCollection} from '../../api/index'
import {
  RECEIVE_TABS,
  RECEIVE_RECOMMEND,
  RECEIVE_EXPERTS,
  RECEIVE_NEWS,
  RECEIVE_HOMES,
  RECEIVE_HOMEDATA,
  RECEIVE_LISTS,
  RECEIVE_COLLECTION
} from '../mutation-types'

Vue.use(Vuex)


const state = {
  tabs: [],
  recommends:[],
  experts: [],
  news: [],
  homes: [],
  homeDate: {},
  lists: [],
  collections: {}
}
const mutations = {
  [RECEIVE_TABS] (state,{tabs}) {
    state.tabs = tabs
  },
  [RECEIVE_RECOMMEND] (state,{recommends}) {
    state.recommends = recommends
  },
  [RECEIVE_EXPERTS] (state,{experts}) {
    state.experts = state.experts.concat(experts)
  },
  [RECEIVE_NEWS] (state,{news}) {
    state.news = state.news.concat(news)
  },
  [RECEIVE_HOMES] (state,{homes}) {
    state.homes = homes
  },
  [RECEIVE_HOMEDATA] (state,{homeDate}) {
    state.homeDate = homeDate
  },
  [RECEIVE_LISTS] (state,{lists}) {
    state.lists= lists
  },
  [RECEIVE_COLLECTION] (state,{collections}) {
    state.collections = collections
  }
}

const actions = {
  async getTabs ({commit}) {
    const result = await reqTabs()
    if (result.code === '200') {
      const tabs = result.data
      //将数据提交到mutation中
      commit(RECEIVE_TABS,{tabs})
    }
  },
  async getRecommends ({commit}) {
    const result = await reqRecommends()
    if (result.code === '200') {
      const recommends = result.data
      //将数据提交到mutation中
      commit(RECEIVE_RECOMMEND,{recommends})
    }
  },
  async getExperts ({commit}) {
    const result = await reqExperts(5,4)
    if (result.code === '200') {
      const experts = result.data.result
      //将数据提交到mutation中
      commit(RECEIVE_EXPERTS,{experts})
    }
  },
  async getNews ({commit,state}) {
    if (state.experts.length>0) {
      return
    }
    const result = await reqExperts(5,5)
    if (result.code === '200') {
      const news = result.data.result
      //将数据提交到mutation中
      commit(RECEIVE_NEWS,{news})
    }
  },
  async getHomes ({commit}) {
    const result = await reqExperts(5,6)
    if (result.code === '200') {
      const homes = result.data.result
      //将数据提交到mutation中
      commit(RECEIVE_HOMES,{homes})
    }
  },
  async getHomeDate ({commit}) {
    const result = await reqHomeData()
    if (result.code === '200') {
      const homeDate = result.data
      //将数据提交到mutation中
      commit(RECEIVE_HOMEDATA,{homeDate})
    }
  },
  async getLists ({commit}) {
    const result = await reqGetList()
    if (result.code === '200') {
      const lists = result.data.topicList
      //将数据提交到mutation中
      commit(RECEIVE_LISTS,{lists})
    }
  },
  async getCollections ({commit}) {
    const result = await reqGetCollection()
    if (result.code === '200') {
      const collections = result.data
      //将数据提交到mutation中
      commit(RECEIVE_COLLECTION,{collections})
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
