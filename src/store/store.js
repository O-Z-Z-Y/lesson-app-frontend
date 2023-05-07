import { createStore } from 'vuex'
import Nav from './Nav'
import modal from './modal'
import courses from './courses'

const store = createStore({
  modules: {
    Nav,
    Modal: modal,
    Courses: courses
  }
})

export default store
