import { reqCartList } from "@/api"
const state = {
  cartList: []
}
const mutations = {
  GETCARLIST(state, cartList) {
    state.cartList = cartList
  }
}
const actions = {
  // 获取购物车列表数据
  async getCartList({ commit }) {
    let result = await reqCartList()
    if (result.code == 200) {
      commit("GETCARLIST", result.data)
    }
    console.log(result)
  }
}
const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  },

}

export default {
  state,
  mutations,
  actions,
  getters
}