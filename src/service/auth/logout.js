import store from '@/store/store'
import VueCookies from 'vue-cookies'
import router from '@/router';

export function logout() {
  VueCookies.remove('access_token')
  store.dispatch('User/initUserdata')

  alert('성공적으로 로그아웃 되었습니다.')

  //* 접근 권한이 필요한 페이지는 홈으로 보냄
  if (router.currentRoute._value.meta?.roles) {
    alert('세션이 만료되었습니다. 홈 화면으로 돌아갑니다.')
    router.push('/')
  }
}