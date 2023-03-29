import { reqGetDetailInfo, reqAddOrUpdateShopCart } from "@/api"
const state = {
  detailInfo: {}
};
const mutations = {
  GETDETAILINFO(state, detailInfo) {
    state.detailInfo = detailInfo
  }
};
const actions = {
  // 获取产品信息的action
  async getDetailInfo({ commit }, skuId) {
    let result = await reqGetDetailInfo(skuId);
    if (result.code == 200) {
      commit('GETDETAILINFO', result.data)
    }
  },
  // 将产品添加到购物车中
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    // 加入购物车返回的解构
    // 加入购物车以后（发请求），前台将参数带给服务器
    // 服务器写入数据成功，并没有返回其他的数据，只是返回code=200，代表这次操作成功
    // 因为服务器没有返回其余数据，因此咱们不需要三连环存储数据
    let result = await reqAddOrUpdateShopCart(skuId, skuNum)
    // 判断服务器加入购物车成功
    if(result.code == 200) {
      return "ok"
    } else {
      // 代表加入购物车失败
      return Promise.rejece(new Error('faile'))
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
  spuSaleAttrList(state) {
    return state.detailInfo.spuSaleAttrList || []
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}