import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    FName : 'Your First Name',
    LName : 'Your Last Name'
  },
  getters: {
  },
  mutations: {
    updateName(state,payload) { 
      state.FName = payload 
    },
    updateLast(state,payload) {
      state.LName = payload 
    }
  },
  actions: {
  },
  modules: {
  }
})
