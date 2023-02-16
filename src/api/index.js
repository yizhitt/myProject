// 当前这个模块：API进行统一管理
import requests from './request';
import mockRequests from './mockAjax';

export const reqCategoryList = () => requests({
  url: 'http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList',
  method: 'get'
})

export const reqGetBannerList = () => mockRequests.get('/banner')

export const reqFloorList = () => mockRequests.get('/floor')