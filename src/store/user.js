export default {
  namespaced: true,
  state() {
    return {
      userId: '',
      username: '',
      userEmail: '',
      userCart: [],
      userAccessList: [],
      userPaidItems: [],
      orderNumber: ''
    }
  },
  mutations: {
    SET_USERID(state, value) {
      state.userId = value
    },
    SET_USERNAME(state, value) {
      state.username = value
    },
    SET_USEREMAIL(state, value) {
      state.userEmail = value
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

    SET_USERPAIDITEMS(state, array) {
      state.userPaidItems = array
    },

    SET_ORDERNUMBER(state, value) {
      state.orderNumber = value
    }
  },
  actions: {
    getUserName(context, value) {
      context.commit('SET_USERNAME', value)
    },
    getUserdata({ commit }, user) {
      commit('SET_USERID', user.id);
      commit('SET_USERNAME', user.name)
      commit('SET_USEREMAIL', user.email)
    },
    initUserdata({ commit }) {
      commit('SET_USERID', '');
      commit('SET_USERNAME', '')
      commit('SET_USEREMAIL', '')
      commit('SET_USERCART', [])
      commit('SET_USERACCESSLIST', [])
      commit('SET_USERPAIDITEMS', [])
    }
  },
  getters: {
    username: state => state.username
  }
}
