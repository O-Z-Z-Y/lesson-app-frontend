export default {
  namespaced: true,
  state() {
    return {
      nav: 'Home'
    }
  },
  mutations: {
    SET_NAV(state, value) {
      state.nav = value
    }
  },
  actions: {
    set(context, value) {
      context.commit('SET_NAV', value)
    }
  },
  getters: {
    nav: state => state.nav
  }
}
