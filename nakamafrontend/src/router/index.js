import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import nakamaHome from '../views/nakamaHome.vue'
import loggInnPage from '../views/loggInnPage.vue'
import registrerPage from '../views/registrerPage.vue'
import mineSider from '../views/mineSider.vue'
import logedInPage from '../views/logedInPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/logedInPage',
    name: 'logedInPage',
    component: logedInPage
  },
  {
    path: '/nakamaHome',
    name: 'nakamaHome',
    component: nakamaHome
  },
  {
    path: '/loggInnPage',
    name: 'loggInnPage',
    component: loggInnPage
  },
  {
    path: '/registrerPage',
    name: 'registrerPage',
    component: registrerPage
  },
  {
    path: '/mineSider',
    name: 'mineSider',
    component: mineSider
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
