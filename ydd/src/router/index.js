// this file is the router of ydd
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Todo from '@/components/Todo'
import softwareCenter from '@/components/softwareCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/yddEconomics',
      name: 'todolist',
      component: Todo
    },
    {
      path: '/softwareCenter',
      name: 'softwareCenter',
      component: softwareCenter
    },
  ]
})
