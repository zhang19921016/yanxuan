// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mock'

//图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from './common/img/loading.gif'
Vue.use(VueLazyload, {
  loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
