import API_URL from '../../utils/baseConfig/apiBase'
import { Email, Password, UserLogin } from '../../types/authType'
import {
  removeFromLocalStorage,
  setInLocalStorage,
} from '../../hooks/useLocalStorage'
import axios from 'axios'
import ApiRouteconstant from '../../services/apiRouteconstant'
import { getFromLocalStorage } from '../../hooks/useLocalStorage'

const { LOGIN, PASSWORD } = ApiRouteconstant

const login = async (userData: UserLogin) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const response = await API_URL.post(LOGIN, userData, config)
  if (response.data) {
    setInLocalStorage('user', JSON.stringify(response.data.data))
    const token: any = response.data.data.token
    if (token) {
      API_URL.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setInLocalStorage('token', token)
    }
  }
  return response.data
}

const logout = async () => {
  removeFromLocalStorage('token')
  try {
    await axios.get(`http://localhost:4000/api/v1/auth/logout`)
  } catch (error) {
    console.log(error)
  }
}

const updatePassword = async (passwordData: Password) => {
  try {
    const token = await getFromLocalStorage('token')
    if (token) {
      API_URL.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    const response = await API_URL.patch(PASSWORD, passwordData)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const forgotPassword = async (emailData: Email) => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } }

    const { data } = await axios.post(
      `/api/v1/password/forgot`,
      emailData,
      config
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

const authService = {
  logout,
  login,
  updatePassword,
  forgotPassword,
}

export default authService
