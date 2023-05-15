export default {
  namespaced: true,
  state() {
    return {
      username: ''
    }
  },
  mutations: {
    SET_USERNAME(state, value) {
      state.username = value
    }
  },
  actions: {
    getUserName(context, value) {
      context.commit('SET_USERNAME', value)
    }
  },
  getters: {
    username: state => state.username
  }
}
