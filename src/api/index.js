// 当前这个模块：API进行统一管理
import requests from './request';

 export const reqCategoryList = () => requests({
  url: 'http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList',
  method: 'get'
})

