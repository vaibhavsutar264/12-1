import API_URL from '../../utils/baseConfig/apiBase'
import { Password, UserLogin } from '../../types/authType'
import {
  removeFromLocalStorage,
  setInLocalStorage,
} from '../../hooks/useLocalStorage'
import axios from 'axios'
import ApiRouteconstant from '../../services/apiRouteConstant'
// import { setHttpToken } from "../../services/baseConfig/ApiBase"

const { LOGIN, PASSWORD } = ApiRouteconstant
// const { MOCKLOGIN } = ApiRouteconstant

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
  // const config = { headers: { 'Content-Type': 'application/json' } }
  // const response = await API_URL.post(MOCKLOGIN, userData, config)
  // if (response) {
  //   // setInLocalStorage('user', JSON.stringify(response.data.data))
  //   const token: any = response
  //   if (token) {
  //     API_URL.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //     setInLocalStorage('token', token)
  //   }
  // }
  // return response
}

const logout = async () => {
  removeFromLocalStorage('token')
  try {
    await axios.get(`http://localhost:4000/api/v1/auth/logout`)
  } catch (error) {
    console.log(error)
  }
  // await axios.get(LOGOUT)
  // return response
}

const updatePassword = async (passwordData: Password) => {
  try {
    const response = await API_URL.patch(PASSWORD, passwordData)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
const authService = {
  logout,
  login,
  updatePassword,
}

export default authService
