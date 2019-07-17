import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/pages/Login/Login'


Vue.use(Router)



export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
      children: [

      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
