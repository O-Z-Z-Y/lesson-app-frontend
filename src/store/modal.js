export default {
  namespaced: true,
  state() {
    return {
      //* modalMode: 'auth' | 'courses'
      modalMode: '',
      modalOpened: false
    }
  },
  mutations: {
    SET_MODAL(state, value) {
      state.modalOpened = value
    },
    SET_MODALMODE(state, value) {
      state.modalMode = value
    },
  },
  actions: {
    openModal({ commit }) {
      commit('SET_MODAL', true)
    },
    closeModal({ commit }) {
      commit('SET_MODAL', false)
    },
    setAuthModal({ commit }) {
      commit('SET_MODALMODE', 'auth')
    },
    setCourseModal({ commit }) {
      commit('SET_MODALMODE', 'courses')
    }
  },
  getters: {
    openModal: state => state.modalOpened
  }
}