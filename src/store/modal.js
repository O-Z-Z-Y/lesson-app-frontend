export default {
  namespaced: true,
  state() {
    return {
      modalOpened: false
    }
  },
  mutations: {
    SET_MODAL(state, value) {
      state.modalOpened = value
    }
  },
  actions: {
    openModal({ commit }) {
      commit('SET_MODAL', true)
    },
    closeModal({ commit }) {
      commit('SET_MODAL', false)
    }
  },
  getters: {
    openModal: state => state.modalOpened
  }
}
