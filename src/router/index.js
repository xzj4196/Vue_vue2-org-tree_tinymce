import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Type from '@/components/OrganizationChart'
import TimeLine from '@/components/timeLine'
import Table from '@/components/table'
import DataTable from '@/components/DataTable'

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
    }
  ]
})
