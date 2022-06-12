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
