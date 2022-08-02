import * as Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default Router({
  //mode: 'hash',
  //base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('../src/views/Login.vue'),
      children: [
        // Dashboard
        {
          name: 'Login',
          path: 'login',
          component: () => import('@/views/Login.vue'),
        },
        // Pages
      ],
    },
  ],
})

