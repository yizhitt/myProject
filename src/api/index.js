// 当前这个模块：API进行统一管理
import requests from './request';
import mockRequests from './mockAjax';

export const reqCategoryList = () => requests({
  url: 'http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList',
  method: 'get'
})

// 获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner')
// 获取floor数据
export const reqFloorList = () => mockRequests.get('/floor')

// 获取search模块接口
export const reqGetSearchInfo = (params) => requests({ url: "http://gmall-h5-api.atguigu.cn/api/list", method: "post", data: params })