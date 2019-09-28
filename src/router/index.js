import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
Vue.use(Router)

export const routes = [
  {
    path: '/alert',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Alert',
        component: () => import('../views/alert')
      }
    ]
  },
  {
    path: '/page-header',
    component: Layout,
    children: [
      {
        path: '',
        name: 'PageHeader',
        component: () => import('../views/page-header')
      }
    ]
  },
  {
    path: '/crumb',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Crumb',
        component: () => import('../views/crumb')
      }
    ]
  },
  {
    path: '/collapse',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Collapse',
        component: () => import('../views/collapse')
      }
    ]
  },
  {
    path: '/progress',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Progress',
        component: () => import('../views/progress')
      }
    ]
  },
  {
    path: '/button',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Button',
        component: () => import('../views/button')
      }
    ]
  },
  {
    path: '/tag',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Tag',
        component: () => import('../views/tag')
      }
    ]
  }
]

export default new Router({
  routes
})
