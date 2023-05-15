import { createStore } from 'vuex'
import nav from './nav'
import modal from './modal'
import courses from './courses'
import auth from './auth'
import user from './user'
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  modules: {
    Nav: nav,
    Modal: modal,
    Courses: courses,
    Auth: auth,
    User: user,
  },
  plugins: [createPersistedState({
    // paths에 입력한 모듈만 적용
    paths: ['Nav','Courses', 'User'],
  })],
})

export default store
