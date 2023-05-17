import axios from "axios"

export default {
  namespaced: true,
  state() {
    return {
      noticeList: [],
      totalNotice: '',
      noticePageIndex: 1
    }
  },
  mutations: {
    SET_NOTICELIST(state, array) {
      state.noticeList = array
    },
    SET_TOTALNOTICE(state, value) {
      state.totalNotice = value
    }
  },
  actions: {
    async fetchNoticeList({commit, state}) {
      const response = await axios.get(`/api/v1/jobs/notice/list/${state.noticePageIndex}`)
      commit('SET_NOTICELIST', response.data.items)
      commit('SET_TOTALNOTICE', response.data.totalNotice)
    },
  },
  getters: {
    noticeList: state => state.noticeList
  }
}
