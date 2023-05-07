export default {
  namespaced: true,
  state() {
    return {
      category: 0,
      thumbnail: "썸네일",
      title: "",
      description: "",
    }
  },
  mutations: {
    SET_CATEGORY(state, id) {
      state.category = id;
    },
    SET_THUMBNAIL(state, url) {
      state.thumbnail = url;
    },
    SET_TITLE(state, title) {
      state.title = title;
    },
    SET_DESCRIPTION(state, info) {
      state.description = info
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