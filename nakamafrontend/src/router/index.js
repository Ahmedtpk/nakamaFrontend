import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import nakamaHome from '../views/nakamaHome.vue'
import loggInnPage from '../views/loggInnPage.vue'
import registrerPage from '../views/registrerPage.vue'
import mineSider from '../views/mineSider.vue'
import logedInPage from '../views/logedInPage.vue'
import GroupPage from '../views/GroupPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import friendPage from '../views/friendPage.vue'
import ComponentHost from '../views/ComponentHost.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/friendPage',
    name: 'friendPage',
    component: friendPage
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
    path: '/ComponentHost',
    name: 'ComponentHost',
    component: ComponentHost
  },
  {
    path: '/mineSider',
    name: 'mineSider',
    component: mineSider
  },
  {
    path: '/GroupPage',
    name: 'GroupPage',
    component: GroupPage
  },
  {
    path: '/ProfilePage',
    name: 'ProfilePage',
    component: ProfilePage
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
