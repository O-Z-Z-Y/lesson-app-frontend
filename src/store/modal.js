export default {
  namespaced: true,
  state() {
    return {
      openModal: false
    }
  },
  mutations: {
    OPEN_MODAL(state) {
      state.openModal = true
    },
    CLOSE_MODAL(state) {
      state.openModal = false
    }
  },
  actions: {
    open({ commit }) {
      commit('OPEN_MODAL')
    },
    close({ commit }) {
      commit('CLOSE_MODAL')
    }
  },
  getters: {
    openModal: state => state.openModal
  }
}
