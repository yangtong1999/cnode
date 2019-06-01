import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Login from '@/components/Login'
import registe from '@/components/registe'
import node from '@/components/node'
import newnode from '@/components/newnode'
import information from '@/components/information'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/App',
      name:'App',
      component:App
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/registe',
      name: 'registe',
      component: registe
    },{
      path:'/node',
      name:'node',
      component:node
    },
    {
      path:'/newnode/:id',
      name:'newnode',
      component:newnode
    },
    {
      path:'/information',
      name:'information',
      component:information
    },
  ]
});


