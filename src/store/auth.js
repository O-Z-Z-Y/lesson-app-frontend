export default {
  namespaced: true,
  state() {
    return {
      authMode: '',
      isLogged: false,
    }
  },
  mutations: {
    SET_AUTHMODE(state, value) {
      state.authMode = value
    },
    SET_LOGGED(state, value) {
      state.isLogged = value
    }
  },
  actions: {
  },
  getters: {
  }
}