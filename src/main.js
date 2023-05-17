import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import './assets/tailwind.css'
import router from './router'
import VuePlyr from 'vue-plyr'
import VueCookies from 'vue-cookies'
import vClickOutside from 'v-click-outside'
import 'vue-plyr/dist/vue-plyr.css'

// createApp(App).use(store).mount('#app')

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VuePlyr)
app.use(VueCookies)

app.use(vClickOutside)
// v-click-outside
const { bind, unbind } = vClickOutside.directive;

app.directive('click-outside', {
  mounted(el, bindling) {
    bind(el, { value: bindling.value });
  },
  beforeUnmount(el) {
    unbind(el);
  },
});

//쿠키의 만료일은 7일이다. (글로벌 세팅)
// default options config: { expires: '1d', path: '/', domain: '', secure: '', sameSite: 'Lax' }
app.$cookies.config("7d");

app.mount('#app')
