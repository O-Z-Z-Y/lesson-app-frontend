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

//* 비밀번호 강도 체크
export function checkPasswordStrength(password) {
  // 비밀번호 안전도를 검사하는 함수
  // 대소문자 포함여부 ?
  const minLength = 8;
  const passwordLowerCase = password.toLowerCase();
  // const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(passwordLowerCase);
  const hasNumber = /\d/.test(passwordLowerCase);
  // eslint-disable-next-line no-useless-escape
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(passwordLowerCase);

  if (passwordLowerCase.length < minLength) {
      return '비밀번호는 최소 ' + minLength + '자 이상이어야 합니다.';
  }

  if (!(hasLowerCase && hasNumber && hasSpecialChar)) {
      return '비밀번호는 영어, 숫자, 특수문자를 모두 포함해야 합니다.';
  }

  return ''
}