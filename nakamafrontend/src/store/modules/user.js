const user = {
    namespaced: true,
    state: {
      user: {}
    },
    mutations: {
      SET_USER () {
        // state.user = data
      }
    },
    actions: {
      recivedUser () {
        console.log('actions')
        // commit('SET_USER', params)
      }
    }
  }
  
  export default user
  