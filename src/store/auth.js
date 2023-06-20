export default {
  namespaced: true,
  state() {
    return {
      //* authMode: 'signup' | 'login' | 'findPassword'
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
      //*{ root: true }를 줄꺼면 2번째 param으로 뭐라도 줘야함
      context.dispatch('Modal/setAuthModal', 'auth', { root: true })

      if (['login', 'signup', 'findPassword'].includes(value)) {
        context.commit('SET_AUTHMODE', value)
      } else {
        console.log('올바른 authmode가 아닙니다')
      }
    },
    //* 로그인 api는 LoginModal.vue에서 관리
    commitLogin({ commit }) {
      commit('SET_LOGGED', true)
    },
    
  },
  getters: {
  }
}