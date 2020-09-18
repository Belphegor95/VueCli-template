import Vue from 'vue'
import Vuex from 'vuex'
import persistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    show_user(state, payload) {
      state.user = payload;
    },
    resetState(state) {  // 回复默认的方法(不用传参)
      Object.assign(state, getDefaultState())
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [persistedstate()],
})
// 设置要重置的参数
const getDefaultState = () => {
  return {
    user: {},
  }
}
