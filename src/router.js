import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/login/login')
    },
    {
      path: '/index',
      name: 'index',
      redirect :'/index/system',
      component: () => import('./views/main/index'),
      children: [
        {
          path: '/index/system',
          component: () => import('./views/main/system')
        },
        {
          path: '/index/department',
          component: () => import('./views/orginization/department')
        },
        {
          path: '/index/position',
          component: () => import('./views/orginization/position')
        },
        {
          path: '/index/postlevel',
          component: () => import('./views/orginization/postlevel')
        },
      ]
    },
  ]
})
