import axios from '../axios'
import store from '@/store/store'
import VueCookies from 'vue-cookies'
import { getAccessList } from '../courses/maincourse';

export async function login(email, password) {
  try {
    const response = await axios.post('/api/v1/customer/login', {
      email: email,
      password: password
    });

    //* 토큰 유효기간 60*60 = 1hour
    VueCookies.set('access_token', response.data.token, 60*60)
    store.dispatch('User/getUserdata', response.data.user)
    validateCart(response.data.user.abandonedcart, email)
    await getAccessList()
    store.commit('Auth/SET_LOGGED', true)
  } catch(error) {
    console.log(error)
  }
}

export async function fetchUserdata() {
  try {
    const response = await axios.get('/api/v1/customer/getcustomer')
    store.dispatch('User/getUserdata', response.data.user)
    await getAccessList()
  } catch(error) {
    console.log(error)
  }
}

//* 장바구니에 존재하지 않는 아이템이 담겨져 있을 경우, 업데이트한다
async function validateCart(items, email) {
  const filteredcart = items.filter(itemId => store.state.Courses.mainCourseList.some(item => item.id === itemId))

  //* 객체의 동등성은 참조 비교를 기반으로 하기 때문에 문자열로 변환
  if (JSON.stringify(items) != JSON.stringify(filteredcart)) {
    try {
        const response = await axios.post('/api/v1/customer/savecart', {
            email: email,
            cart: filteredcart
        })
        store.commit('User/SET_USERCART', response.data.updateCart.abandonedcart)
    } catch (error) {
        console.log(error)
    }
  } else {
    store.commit('User/SET_USERCART', items)
  }
}