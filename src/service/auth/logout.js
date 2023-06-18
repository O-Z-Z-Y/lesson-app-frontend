import store from '@/store/store'
import VueCookies from 'vue-cookies'
import router from '@/router';

export function logout() {
  VueCookies.remove('access_token')
  store.dispatch('User/initUserdata')

  //* 접근 권한이 필요한 페이지는 홈으로 보냄
  if (router.currentRoute._value.meta?.roles) {
    alert('세션이 만료되었습니다. 다시 로그인하세요.')
    router.push('/')
  }
}