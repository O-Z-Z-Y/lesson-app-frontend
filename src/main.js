import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import './assets/tailwind.css'
import router from './router'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

// createApp(App).use(store).mount('#app')

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VuePlyr)
app.mount('#app')
