export default {
  namespaced: true,
  state() {
    return {
      category: 0
    }
  },
  mutations: {
    SET_CATEGORY(state, id) {
      state.category = id;
    }
  },
  actions: {
    set({ commit }) {
      commit('SET_CATEGORY')
    }
  },
  getters: {
    category: state => state.category
  }
}