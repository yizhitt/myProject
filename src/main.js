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

router.beforeEach((to, from, next) => {
  // 加载CSS
  if (to.meta.css) {
    const cssLink = document.createElement('link');
    cssLink.href = to.meta.css;
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.id = 'css-' + to.path; // 使用路由路径作为ID

    if (!document.querySelector(`link[href="${cssLink.href}"]`)) {
      document.head.appendChild(cssLink);
    }
  }

  // 加载JavaScript
  if (to.meta.script) {
    const script = document.createElement('script');
    script.src = to.meta.script;
    script.id = 'script-' + to.path; // 使用路由路径作为ID

    if (!document.querySelector(`script[src="${script.src}"]`)) {
      document.head.appendChild(script);
    }
  }

  next();
});
router.afterEach((to, from) => {
  // 卸载CSS
  if (from.meta.css) {
    const existingLink = document.getElementById('css-' + from.path);
    if (existingLink) {
      document.head.removeChild(existingLink);
    }
  }

  // 卸载JavaScript
  if (from.meta.script) {
    const existingScript = document.getElementById('script-' + from.path);
    if (existingScript) {
      document.head.removeChild(existingScript);
    }
  }
});


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
