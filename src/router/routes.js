/**
 * 路有对象,配置路由
 */

/*import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Find from '../pages/Find/Find.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue'*/

const Home = () => import('../pages/Home/Home.vue')
const Classify = () => import('../pages/Classify/Classify.vue')
const Find = () => import('../pages/Find/Find.vue')
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue')
const Personal = () => import('../pages/Personal/Personal.vue')

import Recommend from '../pages/Find/Recommend/Recommend.vue'
import Expert from '../pages/Find/Expert/Expert.vue'
import New from '../pages/Find/New/New.vue'
import Show from '../pages/Find/Show/Show.vue'
import Nhome from '../pages/Find/Nhome/Nhome.vue'

/*const Recommend = () => import('../pages/Find/Recommend/Recommend.vue')
const Expert = () => import('../pages/Find/Expert/Expert.vue')
const New = () => import('../pages/Find/New/New.vue')
const Show = () => import('../pages/Find/Show/Show.vue')
const Nhome = () => import('../pages/Find/Nhome/Nhome.vue')*/

import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'
import Search from '../pages/Search/Search.vue'
import Success from '../pages/Success/Success.vue'


export default[
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter:true
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        showFooter:true
      }
    },
    {
      path: '/find',
      component: Find,
      meta: {
        showFooter:true
      },
      children: [
        {
          path: '/find/recommend',
          component: Recommend,
          meta: {
            showFooter:true
          }
        },
        {
          path: '/find/expert',
          component: Expert,
          meta: {
            showFooter:true
          }
        },
        {
          path: '/find/new',
          component: New,
          meta: {
            showFooter:true
          }
        },
        {
          path: '/find/show',
          component: Show,
          meta: {
            showFooter:true
          }
        },
        {
          path: '/find/nhome',
          component: Nhome,
          meta: {
            showFooter:true
          }
        },
        {
          path: '',
          redirect: '/find/recommend'
        },
      ]
    },
    {
      path: '/shopCart',
      component: ShopCart,
      meta: {
        showFooter:true
      }
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path:'/login',
      component: Login
    },
    {
      path:'/register',
      component: Register
    },
    {
      path:'/search',
      component: Search
    },
    {
      path:'/success',
      component: Success
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
