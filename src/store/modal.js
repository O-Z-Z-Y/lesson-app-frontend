export default {
  namespaced: true,
  state() {
    return {
      showModal: false
    }
  },
  mutations: {
    SHOW_MODAL(state) {
      state.showModal = true
    },
    HIDE_MODAL(state) {
      state.showModal = false
    }
  },
  actions: {
    show({ commit }) {
      commit('SHOW_MODAL')
    },
    hide({ commit }) {
      commit('HIDE_MODAL')
    }
  },
  getters: {
    showModal: state => state.showModal
  }
}
