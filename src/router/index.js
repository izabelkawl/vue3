import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  }, {
    path: '/status',
    name: 'StatusDef',
    component: () => import(/* webpackChunkName: "home" */ '../views/StatusDef.vue')
  },
  {
    path: '/kalendarz',
    name: 'Calendar',
    component: () => import(/* webpackChunkName: "home" */ '../views/Cal.vue')
  },
  {
    path: '/raporty',
    name: 'Events',
    component: () => import(/* webpackChunkName: "home" */ '../views/Events.vue')
  },
  {
    path: '/konto/logowanie',
    name: 'Login',
    component: () => import(/* webpackChunkName: "home" */ '../views/Login.vue')
  },
  {
    path: '/konto/rejestracja',
    name: 'Register',
    component: () => import(/* webpackChunkName: "home" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
