import axios from '../service/axios.js'
const api = {
  searcyUserInfoById (userId) {
    return axios.get('/searcyUserInfoById?userId=' + userId)
  },
  registerUser (userId, password) {
    return axios.get('/register?userId=' + userId + '&password=' + password)
  }
}

export default api
