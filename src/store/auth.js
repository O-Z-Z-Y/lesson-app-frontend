import cookies from 'vue-cookies'
import router from '@/router';

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
      if (['login', 'signup', 'findPassword'].includes(value)) {
        context.commit('SET_AUTHMODE', value)
      } else {
        console.log('올바른 authmode가 아닙니다')
      }
    },
    login({ commit }) {
      commit('SET_LOGGED', true)
    },
    logout({ commit }) {
      cookies.remove('access_token')
      commit('SET_LOGGED', false)
      
      //* 접근 권한이 있는 페이지는 홈으로 보냄
      if (router.currentRoute._value.meta?.roles) {
        alert('로그아웃 되었습니다.')
        router.push('/')
      }
    }
  },
  getters: {
  }
}