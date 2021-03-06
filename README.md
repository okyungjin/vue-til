# π· Table of Contents
- [π· Table of Contents](#-table-of-contents)
- [π‘ About Vue TIL](#-about-vue-til)
- [π¨ Build Setup](#-build-setup)
- [π Dev Notes](#-dev-notes)
  - [βοΈ Routerμ μ½λ μ€νλ¦¬ν μ μ©νκΈ°](#οΈ-routerμ-μ½λ-μ€νλ¦¬ν-μ μ©νκΈ°)
    - [[Before] μ½λ μ€νλ¦¬ν](#before-μ½λ-μ€νλ¦¬ν)
    - [[After] μ½λ μ€νλ¦¬ν](#after-μ½λ-μ€νλ¦¬ν)
- [π« Troubleshooting](#-troubleshooting)


# π‘ About Vue TIL

# π¨ Build Setup
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

# π Dev Notes
## βοΈ Routerμ μ½λ μ€νλ¦¬ν μ μ©νκΈ°
SPAλ μ΄κΈ° νλ©΄ μ§μ μμ νλ‘μ νΈμ νμν jsνμΌμ λ‘λνλ€. λΌμ°ν°λ₯Ό ν΅ν΄ νλ©΄μ μ΄λν  λ μμμ λ λ°μμ€μ§ μκΈ°μ λΆλλ¬μ΄ νλ©΄ μ΄λμ΄ κ°λ₯νλ€.

νμ§λ§, μ΄κΈ° μ§μ μμ λ‘λνλ μμμ μ©λμ΄ ν΄ κ²½μ° μ¬μ©μλ λΉ νλ©΄μΈ μνλ‘ λκΈ°ν΄μΌ νλ€. μ΄λ¬ν λ¬Έμ λ `μ½λ μ€νλ¦¬ν` μ μ μ©νμ¬ ν΄κ²°ν  μ μλ€.

`μ½λ μ€νλ¦¬ν` μ΄κΈ°μ νμν μμμ μ μΈν λλ¨Έμ§λ₯Ό ν΄λΉ νλ©΄μ μ§μν  λ λ‘λνλλ‘ νλ λ°©μμ΄λ€.

Vue Routerμ `dynamic import` λ₯Ό μ¬μ©νμ¬ μ½λ μ€νλ¦¬νμ κ°λ¨νκ² κ΅¬νν  μ μλ€.

### [Before] μ½λ μ€νλ¦¬ν
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
μ΄κΈ° μ§μμ λͺ¨λ  js νμΌμ λ‘λνλ―λ‘ router μ΄λ μμ νμΌ λ‘λλ₯Ό νμ§ μλλ€.

![before](https://user-images.githubusercontent.com/31913666/173238155-9df33c2a-c81e-4a28-9697-129b0165064a.gif)


<br>

### [After] μ½λ μ€νλ¦¬ν
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

router μ΄λ μμ ν΄λΉ νλ©΄μ λν νμΌ λ‘λκ° λ°μνλ©° μ¬μ§μ μμλ λ‘λνμ§ μλλ€.

![after](https://user-images.githubusercontent.com/31913666/173238230-3a5d3f10-6009-4dfe-80a9-0b6a5ee28285.gif)



# π« Troubleshooting





