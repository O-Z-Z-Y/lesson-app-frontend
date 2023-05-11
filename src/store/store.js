import { createStore } from 'vuex'
import Nav from './Nav'
import modal from './modal'
import courses from './courses'
import auth from './auth'
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  modules: {
    Nav,
    Modal: modal,
    Courses: courses,
    Auth: auth,
  },
  plugins: [createPersistedState({
    // paths에 입력한 모듈만 적용
    paths: ['Nav','Courses'],
  })],
})

export default store
