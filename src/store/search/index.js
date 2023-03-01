import { reqGetSearchInfo } from "@/api";

const state = {
  searchList: {}
};
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList
  }
};
const actions = {
  // 获取search模块数据
  async getSearchList({ commit }, params = {}) {
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      commit('GETSEARCHLIST', result.data)
    }
  }
};
// 计算属性
// 项目当中getters主要的作用是：简化仓库中的数据
const getters = {
  // 当前形参state，当前仓库中的state，并非大仓库中的那个state
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  trademarkList(state) {
    return state.searchList.trademarkList || []
  },
  attrsList(state) {
    return state.searchList.attrsList || []
  }
};
export default {
  state,
  mutations,
  actions,
  getters
}