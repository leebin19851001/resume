/* eslint-disable no-undef */
/* eslint-disable new-cap */
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:12306'
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: 'leebin19851001_1547731445676'
  }
  return config
}, function () {
  return new Promise.reject(error)
})

// eslint-disable-next-line semi
export default axios;
