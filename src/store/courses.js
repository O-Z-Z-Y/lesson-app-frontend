import axios from "axios"

export default {
  namespaced: true,
  state() {
    return {
      mainCourseList: [],
      subCourseList: [],

      //* maincourseitem
      mainCategory: null,
      mainThumbnail: "썸네일",
      mainTitle: "",
      mainDescription: "",
      mainCoursePrice: null,

      //* subcourseitem
      subIndexnumber: null,
      subTitle: '',
      subContent: '',
      subLink: '',
    }
  },
  mutations: {
    // maincourse
    SET_MAINCOURSELIST(state, array) {
      state.mainCourseList = array
    },
    SET_MAINCATEGORY(state, id) {
      state.mainCategory = id;
    },
    SET_MAINTHUMBNAIL(state, url) {
      state.mainThumbnail = url;
    },
    SET_MAINTITLE(state, title) {
      state.mainTitle = title;
    },
    SET_MAINDESCRIPTION(state, info) {
      state.mainDescription = info
    },
    SET_MAINCOURSEPRICE(state, value) {
      state.mainCoursePrice = value
    },

    // subcourse
    SET_SUBCOURSELIST(state, array) {
      state.subCourseList = array
    },
    SET_SUBINDEXNUMBER(state, index) {
      state.subIndexnumber = index
    },
    SET_SUBTITLE(state, title) {
      state.subTitle = title
    },
    SET_SUBLINK(state, url) {
      state.subLink = url
    },
    SET_SUBCONTENT(state, value) {
      state.subContent = value
    }
  },
  actions: {
    async fetchMainCourseList({commit}) {
      const response = await axios.get(`/api/v1/jobs/maincourse/list`)
      commit('SET_MAINCOURSELIST', response.data.mainItems)
    },
    async fetchSubCourseList({commit, state}) {
      try {
        const response = await axios.get(`/api/v1/jobs/subcourse/list/${state.mainCategory}`)
        commit('SET_SUBCOURSELIST', response.data.result)
      } catch (error) {
        console.log(error)
        //* TODO: 임시방편으로 빈 배열처리, 백엔드에서 빈 배열 or 잘못된 요청을 구분해주면 로직 재작성
        commit('SET_SUBCOURSELIST', [])
      }
    },
  },
  getters: {
    category: state => state.category
  }
}