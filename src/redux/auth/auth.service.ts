import API_URL from '../../services/baseConfig/ApiBase'
import { Password, UserLogin } from '../../types/auth.type'
import {
  removeFromLocalStorage,
  setInLocalStorage,
} from '../../hooks/useLocalStorage'
import axios from 'axios'
import ApiRouteconstant from '../../services/ApiRouteconstant'
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
  removeFromLocalStorage('user')
  removeFromLocalStorage('token')
  delete axios.defaults.headers.common['Authorization']
  // const response = await API_URL.post(API_URL + "/logout")
  // return response
}

// export const logout =
//   (): ThunkAction<void, RootState, unknown, AnyAction> =>
//   async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
//     localStorage.removeItem('token')
//     localStorage.removeItem('user')
//   }

const updatePassword = async (passwordData: Password) => {
  const response = await API_URL.patch(PASSWORD, passwordData)

  return response.data
}
const authService = {
  logout,
  login,
  updatePassword,
}

export default authService
