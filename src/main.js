import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import './assets/tailwind.css'
import router from './router'

// createApp(App).use(store).mount('#app')

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
