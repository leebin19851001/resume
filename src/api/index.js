import axios from '../axios'
const api = {
  queryUserInfoByUserId (params) {
    return axios.get('/api/queryUserInfoByUserId', { params: {
      ...params
    } })
  },
  registerUser (params) {
    return axios.get('/api/register', { params: {
      ...params
    } })
  }
}

export default api
