import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/',
    name: 'BookMall',
    component: () => import('../views/BookMall')
  },
  {
    path: '/bookshell',
    name: 'bookshell',
    component: () => import('../views/BookShell')
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('../views/Community')
  },
  {
    path: '/discover',
    name: 'discover',
    component: () => import('../views/Discover')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/Mine')
  },
  {
    path: '/bookcategory',
    name: 'bookcategory',
    props:true,
    component: () => import('../views/BookCategory')
  },
  {
    path: '/categoryinfo',
    name: 'categoryinfo',
    props:route=>({...route.query}),
    component: () => import('../views/CategoryInfo')
  },
  {
    path: '/bookinfo',
    name: 'bookinfo',
    props:route=>({...route.query}),
    component: () => import('../views/BookInfo')
  },
  {
    path: '/reading',
    name: 'reading',
    props:route=>({...route.query}),
    component: () => import('../views/Reading')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
