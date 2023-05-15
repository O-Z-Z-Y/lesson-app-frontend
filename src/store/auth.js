export default {
  namespaced: true,
  state() {
    return {
      //* authMode: 'signup' | 'login' | 'findEmail'
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
    setAuthMode(context, value) {
      if (['login', 'signup', 'findEmail'].includes(value)) {
        context.commit('SET_AUTHMODE', value)
      } else {
        console.log('올바른 authmode가 아닙니다')
      }
    },
    login({ commit }) {
      commit('SET_LOGGED', true)
    },
    logout({ commit }) {
      commit('SET_LOGGED', false)
      alert('로그아웃 되었습니다')
    }
  },
  getters: {
  }
}