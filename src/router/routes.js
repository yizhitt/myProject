import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'


export default [{
  path: '*',
  redirect: '/home'
}, {
  path: '/home',
  name: 'home',
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
  // 下面这种写法：代表的是params参数可以传递|当然也可以不传递 ?(正则：两次代表出现次数0|1)
  path: '/search/:keyWord?',
  name: 'search',
  component: Search,
  meta: {
    show: true
  }
},
{
  path: '/detail/:skuid',
  name: 'detail',
  component: Detail,
  meta: {
    show: true
  }
}
]