# 🏷 Table of Contents
- [🏷 Table of Contents](#-table-of-contents)
- [💡 About Vue TIL](#-about-vue-til)
- [🔨 Build Setup](#-build-setup)
- [📕 Dev Notes](#-dev-notes)
  - [✔️ Router에 코드 스플리팅 적용하기](#️-router에-코드-스플리팅-적용하기)
    - [[Before] 코드 스플리팅](#before-코드-스플리팅)
    - [[After] 코드 스플리팅](#after-코드-스플리팅)
- [🔫 Troubleshooting](#-troubleshooting)


# 💡 About Vue TIL

# 🔨 Build Setup
```bash
# Project setup
npm install

# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build

# Run your unit tests
npm run test:unit

# Lints and fixes files
npm run lint
```

# 📕 Dev Notes
## ✔️ Router에 코드 스플리팅 적용하기
SPA는 초기 화면 진입 시에 프로젝트에 필요한 js파일을 로드한다. 라우터를 통해 화면을 이동할 때 자원을 더 받아오지 않기에 부드러운 화면 이동이 가능하다.

하지만, 초기 진입 시에 로드하는 자원의 용량이 클 경우 사용자는 빈 화면인 상태로 대기해야 한다. 이러한 문제는 `코드 스플리팅` 을 적용하여 해결할 수 있다.

`코드 스플리팅` 초기에 필요한 자원을 제외한 나머지를 해당 화면에 진입할 때 로드하도록 하는 방식이다.

Vue Router의 `dynamic import` 를 사용하여 코드 스플리팅을 간단하게 구현할 수 있다.

### [Before] 코드 스플리팅
```js
import Vue from 'vue';
import VueRouter from 'vue-router';

import LoginPage from '@/views/LoginPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/sign-up',
      component: SignUpPage,
    },
  ],
});
```
초기 진입에 모든 js 파일을 로드하므로 router 이동 시에 파일 로드를 하지 않는다.

![before](https://user-images.githubusercontent.com/31913666/173238155-9df33c2a-c81e-4a28-9697-129b0165064a.gif)


<br>

### [After] 코드 스플리팅
```js
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'), // dynamic import
    },
    {
      path: '/sign-up',
      component: () => import('@/views/SignUpPage.vue'), // dynamic import
    },
  ],
});
```

router 이동 시에 해당 화면에 대한 파일 로드가 발생하며 재진입 시에는 로드하지 않는다.

![after](https://user-images.githubusercontent.com/31913666/173238230-3a5d3f10-6009-4dfe-80a9-0b6a5ee28285.gif)



# 🔫 Troubleshooting





