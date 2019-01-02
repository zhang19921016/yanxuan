import ajax from './ajax'

const BASE = '/api'
let num = 0

//模拟分类的接口函数
export const reqListData = () => ajax('/list')

//获取识物路由中导航
export const reqTabs = () => ajax(BASE + '/find/getTabs.json')

//获取识物导航中推荐的数据
export const reqRecommends = () => ajax(BASE + '/find/recManual.json')

//获取识物导航中达人和上新以及home的数据
export const reqExperts = (b,c) => {
  num++
  return ajax(BASE + '/find/getTabData.json',{page:num,size:b,tabId:c})
}

//获取识物导航中晒物数据
export const reqHomeData = () => ajax(BASE + '/look/homeData.json',{csrf_token:'c39c67c51aeb82a04ad3e23d01e88d3e'})
export const reqGetList = () => ajax(BASE + '/look/getList.json',{page:1,size:20,type:1,csrf_token:'c39c67c51aeb82a04ad3e23d01e88d3e'})
export const reqGetCollection = () => ajax(BASE + '/look/getCollection.json',{id:26,csrf_token:'c39c67c51aeb82a04ad3e23d01e88d3e'})
