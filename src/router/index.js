import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
Vue.use(Router)

export const routes = [
  {
    path: '/',
    redirect: '/collapse'
  },
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
        component: () => import('../views//pageHeader')
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
    path: '/Progress',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Progress',
        component: () => import('../views/Progress')
      }
    ]
  },
  {
    path: '/Button',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Button',
        component: () => import('../views/Button')
      }
    ]
  }
]

export default new Router({
  routes
})
