// this file is the router of ydd
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import yddEconomics from '@/pages/yddEconomics'
import yddMedia from '@/pages/yddMedia'
import yddZhibo from '@/pages/yddZhibo'
import softwareCenter from '@/pages/softwareCenter'

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
      name: 'yddEconomics',
      component: yddEconomics
    },
    {
      path: '/yddMedia',
      name: 'yddMedia',
      component: yddMedia
    },
    {
      path: '/yddZhibo',
      name: 'yddZhibo',
      component: yddZhibo
    },
    {
      path: '/softwareCenter',
      name: 'softwareCenter',
      component: softwareCenter
    },
  ]
})
