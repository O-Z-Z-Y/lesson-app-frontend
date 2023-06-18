import axios from '../axios'
import { login } from './login'

export async function signup(name, email, password, phonenumber) {
  const response = await axios.post('/api/v1/customer/register', {
    name: name,
    email: email,
    password: password,
    phonenumber: phonenumber
  })
  alert(`${response.data.customer.name}님의 회원가입을 환영합니다.`)

  //* login 처리
  try {
    await login(email, password)
  } catch(error) {
    console.log(error)
  }
}

