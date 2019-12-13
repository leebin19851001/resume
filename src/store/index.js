import Vue from 'vue'
import Vuex from 'vuex'
import loginStore from './loginStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loginStore
  }
})
