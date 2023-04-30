import { createStore } from 'vuex'
import Nav from './Nav'
import modal from './modal'

const store = createStore({
  modules: {
    Nav,
    Modal: modal
  }
})

export default store
