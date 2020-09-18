import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { api } from "./assets/js/config";

import axios from "axios";
import qs from "qs";
Vue.config.keyCodes.caps = 20;
Vue.prototype.axios = axios;
Vue.config.productionTip = false
axios.interceptors.request.use(function (config) {
  if (config.method == "post") {
    config.data = qs.stringify(config.data);
  }
  return config;
});
axios.interceptors.response.use(
  response => {
    if (response.data) {
      // 没登录 跳转登录页面
      // if (response.data.msg && response.data.msg == 112) {
      //   router.push({
      //     path: '/login',
      //     query: router.currentRoute.fullPath
      //   })
      // }
      return response.data;
    } else {
      return response;
    }
  },
  error => {
    return Promise.reject(error);
  }
);
axios.defaults.baseURL = api.baseUrl;
// 允许携带cookie
// axios.defaults.withCredentials = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
