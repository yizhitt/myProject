import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

export default [{
  path: '*',
  redirect: '/home'
}, {
  path: '/home',
  name: 'home',
  component: Home,
  meta: {
    show: true,
    script: 'https://www.zjzwfw.gov.cn/jpcc_files/web1/tplConfig/index.js'
  }
}, {
  path: '/login',
  name: 'login',
  component: Login,
  meta: {
    show: false,
    css: 'https://www.zjzwfw.gov.cn/jpcc_files/web1/tplConfig/index.css'
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
  path: '/detail/:skuId',
  name: 'detail',
  component: Detail,
  meta: {
    show: true
  }
},
{
  path: '/addcartsuccess',
  name: 'addcartsuccess',
  component: AddCartSuccess,
  meta: {
    show: true
  }
},
{
  path: '/shopcart',
  name: 'ShopCart',
  component: ShopCart,
  meta: {
    show: true
  }
},
]
