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
    SET_NOTICELIST(state, value) {
      state.noticeList = value
    },
    SET_TOTALNOTICE(state, value) {
      state.totalNotice = value
    }
  },
  actions: {
    async fetchNoticeList({commit}) {
      const response = await axios.get(`api/v1/jobs/notice/list/${this.noticePageIndex}`)
      console.log(response.data)
      commit('SET_NOTICELIST', response.data.items)
      commit('SET_TOTALNOTICE', response.data.totalNotice)
    },
  },
  getters: {
    noticeList: state => state.noticeList
  }
}
