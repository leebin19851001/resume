/* eslint-disable new-cap */
import axios from 'axios'
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: 'leebin19851001_1547731445676'
  }
  return config
}, function () {
  // eslint-disable-next-line new-cap
  // eslint-disable-next-line no-undef
  return new Promise.reject(error)
})

export default axios
