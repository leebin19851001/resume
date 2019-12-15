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
  },
  login (params) {
    return axios.get('/api/login', { params: {
      ...params
    } })
  },
  getSloganAll () {
    return axios.get('/api/getSloganAll')
  },
  addSlogan (params) {
    return axios.get('/api/addSlogan', { params: {
      ...params
    } })
  },
  getSloganByLimit (params) {
    return axios.get('/api/getSloganByLimit', { params: {
      ...params
    } })
  }
}

export default api
