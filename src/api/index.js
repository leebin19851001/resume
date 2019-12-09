import axios from '../service/axios'
const api = {
  queryUserInfoByUserId (params) {
    return axios.get('/queryUserInfoByUserId', { params: {
      ...params
    } })
  },
  registerUser (params) {
    return axios.get('/register', { params: {
      ...params
    } })
  }
}

export default api
