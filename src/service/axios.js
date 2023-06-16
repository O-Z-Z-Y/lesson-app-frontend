// import axios from 'axios';
// import VueCookies from 'vue-cookies';

// // 요청 인터셉터 추가하기
// axios.interceptors.request.use(async function (config) {
//     // 요청이 전달되기 전에 작업 수행
    
//     const token = VueCookies.get('access_token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     console.log(config);
//     return config;
//   }, function (error) {
//     // 요청 오류가 있는 작업 수행
//     return Promise.reject(error);
//   });

// // 응답 인터셉터 추가하기
// axios.interceptors.response.use(function (response) {
//     // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
//     // 응답 데이터가 있는 작업 수행

//     return response;
//   }, async function (error) {
//     // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
//     // Do something with response error
//     console.log('에러일 경우', error.config);
//     const errorAPI = error.config;
//     if(error.response.data.status===401 && errorAPI.retry===undefined){
//       errorAPI.retry = true;
//       console.log('토큰이 이상한 오류일 경우');
//       //* TODO: 토큰을 새로 호출
//       return await axios(errorAPI);
//     }
//     return Promise.reject(error);
//   });


// export default axios;