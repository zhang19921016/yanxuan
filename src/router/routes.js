/**
 * 路有对象,配置路由
 */

import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Find from '../pages/Find/Find.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue'

import Recommend from '../pages/Find/Recommend/Recommend.vue'
import Expert from '../pages/Find/Expert/Expert.vue'
import New from '../pages/Find/New/New.vue'
import Show from '../pages/Find/Show/Show.vue'
import Nhome from '../pages/Find/Nhome/Nhome.vue'


export default[
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
      component: Find,
      children: [
        {
          path: '/find/recommend',
          component: Recommend
        },
        {
          path: '/find/expert',
          component: Expert
        },
        {
          path: '/find/new',
          component: New
        },
        {
          path: '/find/show',
          component: Show
        },
        {
          path: '/find/nhome',
          component: Nhome
        },
        {
          path: '',
          redirect: '/find/recommend'
        },
      ]
    },
    {
      path: '/shopCart',
      component: ShopCart
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
