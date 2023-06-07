export default {
  namespaced: true,
  state() {
    return {
      username: '',
      userCart: [],
      userAccessList: [],
    }
  },
  mutations: {
    SET_USERNAME(state, value) {
      state.username = value
    },

    SET_USERCART(state, array) {
      state.userCart = array
    },
    GET_CARTITEM(state, itemId) {
      state.userCart.push(itemId)
    },
    REMOVE_CARTITEM(state, itemId) {
      state.userCart = state.userCart.filter(id => id !== itemId);
    },
    
    SET_USERACCESSLIST(state, array) {
      state.userAccessList = array
    },
    GET_USERACCESSITEM(state, itemId) {
      state.userAccessList.push(itemId)
    },
    REMOVE_USERACCESSITEM(state, itemId) {
      state.userAccessList = state.userAccessList.filter(id => id !== itemId);
    },
  },
  actions: {
    getUserName(context, value) {
      context.commit('SET_USERNAME', value)
    },
  },
  getters: {
    username: state => state.username
  }
}
