import axios from 'axios'

const api = axios.create({
  baseURL: process.env.backendUrl,
})

api.interceptors.response.use(null, function (error) {
  if (error.response.status === 401) {
    console.log('Error - Bad Request')
  }
  return Promise.reject(error)
})

export default {
  async searchBooks(text) {
    return await api.get('search.json?q='+text+'&limit=100000')
  },

}