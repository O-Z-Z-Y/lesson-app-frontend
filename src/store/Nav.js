export default {
  namespaced: true,
  state() {
    return {
      nav: 'Home'
    }
  },
  mutations: {
    setNav(state, value) {
      state.nav = value
    }
  },
  actions: {
    setNav(context, value) {
      context.commit('setNav', value)
    }
  },
  getters: {
    nav: state => state.nav
  }
}
