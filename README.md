# lesson-page-frontend

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

## vue-plyr autoplay issue

chrome에서 자동재생 정책에 걸려 음소거를 하지 않으면 영상이 재생되지 않는 이슈

allow를 콤마로 split해서 생긴 문제 -> 세미콜론으로 교체

fix 폴더에 있는 파일을 /node_modules/vue-plyr/dist 에 덮어 쓰세여