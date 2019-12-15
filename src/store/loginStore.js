import api from '../api/index.js'

export default {
  namespaced: true,
  state: {
    user: null,
    isLoading: false,
    isLogin: false
  },
  mutations: {
    setUser (state, userObj) {
      state.user = userObj
    },
    setIsLoading (state, payload) {
      state.isLoading = payload
    },
    setIsLogin (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    async login (context, userObj) {
      context.commit('setIsLoading', true)
      const resp = await api.login(userObj)
      if (resp.data.data[0]) {
        context.commit('setUser', resp.data.data[0])
        context.commit('setIsLogin', true)
        localStorage.setItem('isLogin', 'true')
        localStorage.setItem('loginUser', JSON.stringify(resp.data.data[0]))
        return true
      }
      context.commit('setIsLoading', false)
      return false
    },
    logOut (context) {
      console.log('====================')
      context.commit('setUser', {})
      context.commit('setIsLogin', false)
      localStorage.removeItem('loginUser')
      localStorage.removeItem('isLogin')
    },
    asyncUser (context) {
      let isLogin = localStorage.getItem('isLogin')
      if (isLogin === 'true') {
        context.commit('setIsLogin', true)
      }
      let user = localStorage.getItem('loginUser')
      if (user) {
        const userObj = JSON.parse(user)
        context.commit('setUser', userObj)
      }
    }
  }
}
