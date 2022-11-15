import axios from 'axios'

// const axiosInstance = axios.create();

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000',
})

axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  (error: any) => {
    if (error.response.status === 401) {
      console.log('Unauthorized, logging out ...')
      localStorage.clear()
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (res) => {
    if (res.status === 201) {
      console.log('Successful')
    }
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default axiosInstance
