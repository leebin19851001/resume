import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultPage from '../layout/DefaultPage.vue'
import Index from '../views/Index'
import store from '../store/index'
import Resume from '../views/Resume'
import Admin from '../layout/Admin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'defaultPage',
    component: DefaultPage,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: Index
      },
      {
        path: 'resume',
        name: 'resume',
        component: Resume
      },
      {
        path: 'about',
        name: 'about',
        meta: {
          needLogin: false
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
  {
    path: '/blank',
    name: 'blankPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../layout/BlankPage.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: 'sloganList',
        name: 'sloganList',
        component: () => import('../components/admin/slogan/SloganList')
      },
      {
        path: 'sloganAdd',
        name: 'sloganAdd',
        component: () => import('../components/admin/slogan/SloganAdd')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.needLogin) {
    if (store.state.loginStore.isLogin) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
