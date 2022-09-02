const groups = {
    namespaced: true,
    state: {
      groups: {}
    },
    mutations: {
        SET_groups (state, data) {
        state.groups = data
        console.log(data)
      }
    },
    actions: {
     async getGroups ({ commit }) {
        await fetch('https://nakama1.herokuapp.com/getFamiles')
        .then(res => res.json())
        .then(data =>  commit('SET_groups', data.reverse()))
        console.log('actions from post')
        // commit('SET_groups', params)
      }
    }
  }
  
  export default groups
  