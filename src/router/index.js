import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Index from '@/components/index'
import Type from '@/components/OrganizationChart'
import TimeLine from '@/components/timeLine'
import Table from '@/components/table'
import DataTable from '@/components/DataTable'
import Parent from '@/components/parent'
import Txt from '@/components/txt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/type',
      name: 'OrganizationChart',
      component: Type
    },
    {
      path: '/time',
      name: 'timeLine',
      component: TimeLine
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },
    {
      path: '/DataTable',
      name: 'DataTable',
      component: DataTable
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/txt',
      name: 'Txt',
      component: Txt
    }
  ]
})
