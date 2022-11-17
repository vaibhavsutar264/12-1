import API_URL from '../../utils/baseConfig/apiBase'
import { Email, Password, UserLogin } from '../../types/authType'
import {
  removeFromLocalStorage,
  setInLocalStorage,
  getFromLocalStorage,
} from '../../hooks/useLocalStorage'
import ApiRouteconstant from '../../services/apiRouteconstant'

const { LOGIN, SETPASSWORD, LOGOUT, FORGOTPASSWORD } = ApiRouteconstant

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
    await API_URL.get(LOGOUT)
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
    const response = await API_URL.patch(SETPASSWORD, passwordData)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// const resetPassword = async (token: any, resetpasswordData: Password) => {
//   try {
//     const { data } = await API_URL.put(RESETPASSWORD, resetpasswordData)
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }

export const forgotPassword = async (emailData: Email) => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } }
    const { data } = await API_URL.post(FORGOTPASSWORD, emailData, config)
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
  // resetPassword,
}

export default authService
