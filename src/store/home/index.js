import { reqCategoryList, reqGetBannerList, reqFloorList } from '@/api';
// home模块的小仓库
const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
};
// mutations是唯一修改state的地方
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList
  }
};
// actions用户处理派发action地方的，可以书写异步语句、自己逻辑的地方
const actions = {
  // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
  async categoryList({ commit }) {
    // console.log({commit},'123')
    let result = await reqCategoryList();
    if (result.code == 200) {
      commit('CATEGORYLIST', result.data)
    }
  },
  // 获取首页轮播图的数据
  async getBannerList({ commit }) {
    let result = await reqGetBannerList()
    if (result.code == 200) {
      commit('GETBANNERLIST', result.data)
    }
  },
  // 获取Floor数据
  async getFloorList({ commit }) {
    let result = await reqFloorList()
    if (result.code == 200) {
      commit('GETFLOORLIST', result.data)
    }
  }
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters
}