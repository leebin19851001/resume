import api from '../api/index.js'

export default {
  namespaced: true,
  state: {
    user: null,
    isLoading: false
  },
  mutations: {
    setUser (state, userObj) {
      state.user = userObj
    },
    setIsLoading (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    async login (context, userObj) {
      context.commit('setIsLoading', true)
      const resp = await api.login(userObj)
      console.log(resp)
      if (resp.data) {
        context.commit('setUser', resp)
        localStorage.setItem('loginUser', JSON.stringify(resp.data))
        return true
      }
      context.commit('setIsLoading', false)
      return false
    },
    logOut (context) {
      context.commit('setUser', {})
    },
    asyncUser (context) {
      let user = localStorage.getItem('loginUser')
      if (user) {
        const userObj = JSON.parse(user)
        context.commit('setUser', userObj)
      }
    }
  }
}
