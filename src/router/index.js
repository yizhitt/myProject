import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '*',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        show: true
      }
    }, {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        show: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        show: false
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        show: true
      }
    }
  ]
})
