import { reqGetDetailInfo } from "@/api"
const state = {
  detailInfo: {}
};
const mutations = {
  GETDETAILINFO(state, detailInfo) {
    state.detailInfo = detailInfo
  }
};
const actions = {
  async getDetailInfo({ commit }, skuId) {
    let result = await reqGetDetailInfo(skuId);
    if (result.code == 200) {
      commit('GETDETAILINFO', result.data)
    }
  }
};
const getters = {
  categoryView(state) {
    return state.detailInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.detailInfo.skuInfo || {}
  },
  skuSaleAttrValueList(state) {
    return state.detailInfo.skuInfo.skuSaleAttrValueList || []
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}