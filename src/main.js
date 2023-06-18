import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import './assets/tailwind.css'
import router from './router'
import VueCookies from 'vue-cookies'
import vClickOutside from 'v-click-outside'

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

import axios from '@/service/axios'

// createApp(App).use(store).mount('#app')

const app = createApp(App)
app.use(router)
router.app = app

app.use(store)
app.use(VuePlyr)
app.use(VueCookies)

// Axios를 Vue 인스턴스의 프로토타입에 등록합니다.
app.config.globalProperties.axios = axios

// v-click-outside
app.use(vClickOutside)
const { bind, unbind } = vClickOutside.directive;

app.directive('click-outside', {
  mounted(el, bindling) {
    bind(el, { value: bindling.value });
  },
  beforeUnmount(el) {
    unbind(el);
  },
});

// 쿠키의 default 만료일은 1일이다. (글로벌 세팅)
// default options config: { expires: '1d', path: '/', domain: '', secure: '', sameSite: 'Lax' }
app.$cookies.config("60 * 60");

app.mount('#app')

export { app };