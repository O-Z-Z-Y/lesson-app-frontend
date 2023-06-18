import axios from "axios";
import VueCookies from 'vue-cookies';

// 요청 인터셉터 추가하기
axios.interceptors.request.use((config) => {
    // 요청이 전달되기 전에 작업 수행
    
    const token = VueCookies.get('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  }, (error) => {
    // 요청 오류가 있는 작업 수행
    console.log('req_err', error)
    return Promise.reject(error);
  });

// 응답 인터셉터 추가하기
axios.interceptors.response.use((response) => {
  // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  // 응답 데이터가 있는 작업 수행
  return response;
}, (error) => {
  // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  // 응답 오류가 있는 작업 수행
  console.log('res_err', error)
  return Promise.reject(error);
});


export default axios;