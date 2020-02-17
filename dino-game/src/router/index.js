import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/register',
    name: 'about',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/scan',
    name: 'scan',
    component: () => import('../views/Scan.vue')
  },
  {
    path: '/play',
    name: 'play',
    component: () => import('../views/Play.vue')
  },
  {
    path: '/score',
    name: 'score',
    component: () => import('../views/Score.vue')
  },
  {
    path: '/share',
    name: 'share',
    component: () => import('../views/Share.vue')
  }
  

]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
