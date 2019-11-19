import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Type from '@/components/OrganizationChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/type',
      name: 'OrganizationChart',
      component: Type
    }
  ]
})
