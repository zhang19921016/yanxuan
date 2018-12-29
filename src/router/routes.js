/**
 * 路有对象,配置路由
 */

import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Find from '../pages/Find/Find.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue'

export default[
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/find',
      component: Find
    },
    {
      path: '/shopCart',
      component: ShopCart
    },
    {
      path: '/personal',
      component: Personal
    },
  ]
