import { createStore } from 'vuex'
import user from './modules/user'
import posts from './modules/posts'
import groups from './modules/groups'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    posts,
    user,
    groups
  }
})
