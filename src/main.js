// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

// 引入全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination)

// 引入仓库
import store from '@/store';

// 引入MockServer.js---mock数据
import '@/mock/mockServe'

// 引入swiper样式
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
