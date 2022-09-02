const posts = {
    namespaced: true,
    state: {
      posts: {}
    },
    mutations: {
        SET_POSTS (state, data) {
        state.posts = data
      }
    },
    actions: {
     async recivedposts ({ commit }) {
        await fetch('https://nakama1.herokuapp.com/getallposts')
        .then(res => res.json())
        .then(data =>  commit('SET_POSTS', data.reverse()))
        console.log('actions from post')
        // commit('SET_posts', params)
      }
    }
  }
  
  export default posts
  