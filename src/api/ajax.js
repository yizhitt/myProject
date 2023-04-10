// 对于axios进行二次封装
import axios from 'axios';
// 在当前模块中引入store
import store from '@/store'

const requests = axios.create({
  baseURL: 'http://gmall-h5-api.atguigu.cn/api',
  timeout: 5000,
});

// 请求拦截器
requests.interceptors.request.use((config) => {
  if(store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token
  }
  return config;
});

requests.interceptors.response.use((res) => {
  return res.data;
}, (error) => {
  return Promise.reject(new Error('faile'));
})

// 对外暴露
export default requests;
