import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('@/views/main')
    },
    {
      path: '/article',
      name: 'Article',
      redirect: '/article/template1',
      component: () => import('@/views/articleTemplate/article'),
      children: [
        {
          name: 'Template1',
          path: 'template1',
          component: () => import('@/views/articleTemplate/content/template1')
        },
        {
          name: 'Template2',
          path: 'template2',
          component: () => import('@/views/articleTemplate/content/template2')
        },
        {
          name: 'Template3',
          path: 'template3',
          component: () => import('@/views/articleTemplate/content/template3')
        }
      ]
    }
  ]
})

export default router
