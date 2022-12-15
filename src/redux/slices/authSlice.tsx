import { createSlice } from '@reduxjs/toolkit'
import { dispatch } from '../store'
import { UserLogin, Password, Email, AuthState } from '../../types/authType'
import {
  removeFromLocalStorage,
  setInLocalStorage,
  getFromLocalStorage,
} from '../../hooks/useLocalStorage'
import { userLoginData } from '../../services/api/index'
import { apiDefaultrespons, apiVrbls, localStorageVar, staticErrors } from '../../utils/constants'
import { toast } from 'react-toastify'

const initialState: AuthState = {
  user: null,
  profile: undefined,
  isError: false,
  isLoading: false,
  isSuccess: false,
  isAuthenticated: false,
  message: '',
  emailSent: '',
  userInfo: '',
  resetmessage: '',
  forgotMessage: ''
}

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true
      state.isAuthenticated = false
    },
    hasError(state, action) {
      state.isLoading = false
      state.isError = true
      state.isAuthenticated = false
      state.message = action.payload.data?.message
    },
    loginSuccess: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
      state.user = action.payload
      state.isAuthenticated = true
      state.message = action.payload.message
    },
    getUserInfoSuccess: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
      state.userInfo = action.payload
      state.isAuthenticated = true
      state.message = action.payload.message
    },
    setPasswordSuccess: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.message = action.payload.message as string
    },
    forgotPasswordSuccess: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.emailSent = action.payload.message as string
      state.forgotMessage = action.payload.data
    },
    resetPasswordSuccess: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.resetmessage = action.payload.data
    },
    logOutSuccess: (state) => {
      state.isLoading = false
      state.user = null
      state.userInfo = null
      state.isAuthenticated = false
    },
  },
})

// reducers
export default userSlice.reducer

// actions
export const { startLoading, hasError } = userSlice.actions

// -----------------------------------------------------------------

export const login = (userData: UserLogin) => {
  dispatch(userSlice.actions.startLoading())
  return async () => {
    try {
      const { data }: any = await userLoginData.login(userData)
      if (data) {
        const token: any = data.data.data[apiVrbls.USER.ACCESS_TOKEN]
        if (token) { setInLocalStorage(localStorageVar.TOKEN_VAR, token) }
        const user = { token: token, email: userData.email }
        const { data: userInfo }: any = await userLoginData.getUserInfo(userData.email);
        dispatch(userSlice.actions.resetPasswordSuccess({ data: "" }))
        if (userInfo && userInfo.data.data) {
          dispatch(userSlice.actions.loginSuccess(userInfo.data.data))
          setInLocalStorage(localStorageVar.USER_VAR, token)
        } else {
          toast.error(userInfo.data.message)
          dispatch(userSlice.actions.hasError(null))
        }
      }
    } catch (response: any) {
      const { data = { data: { message: staticErrors.serverInactive } } } = response.response.data;
      toast.error(data.message)
      dispatch(userSlice.actions.hasError(data))
    }
  }
}


export const userInfo = () => {
  dispatch(userSlice.actions.startLoading())
  return async () => {
    try {
      const response: any = await userLoginData.getUserInfo(null)
      const { data } = response
      if (response) {
        const firstName: any = data.data.data.firstname
        const lastName: any = data.data.data.lastName
        const emailId: any = data.data.data.emailId
        const user = { firstName: firstName, lastName: lastName, emailId: emailId }
        // const resp = { user }
        dispatch(userSlice.actions.getUserInfoSuccess(user))
      }
    } catch ({ data = apiDefaultrespons.LOGIN_ERRRO }) {
      dispatch(userSlice.actions.hasError(data))
    }
  }
}

export const logout = (body: any) => {
  dispatch(userSlice.actions.startLoading())
  return async () => {
    try {
      const { data } = await userLoginData.logout(body)
      dispatch(userSlice.actions.logOutSuccess())
      if (data) {
        toast.success(data.data.message);
        removeFromLocalStorage(localStorageVar.TOKEN_VAR)
        removeFromLocalStorage(localStorageVar.USER_VAR)
      } else {
        toast.error(data.data.message)
        removeFromLocalStorage(localStorageVar.TOKEN_VAR)
        removeFromLocalStorage(localStorageVar.USER_VAR)
      }
    } catch (response: any) {
      const { data = { data: { message: staticErrors.serverInactive } } } = response.response.data;
      toast.error(data.message)
      removeFromLocalStorage(localStorageVar.TOKEN_VAR)
      removeFromLocalStorage(localStorageVar.USER_VAR)
      dispatch(userSlice.actions.logOutSuccess())
    }
  }
}
export const updatePassword = (passwordData: Password) => {
  dispatch(userSlice.actions.startLoading())
  return async () => {
    try {
      const response = await userLoginData.updatePassword(passwordData)
      dispatch(userSlice.actions.setPasswordSuccess(response.data))
      return response.data
    } catch (error) {
      dispatch(userSlice.actions.hasError(error))
    }
  }
}

export const forgotPassword = (userEmail: Email) => {
  dispatch(userSlice.actions.startLoading())
  return async () => {
    try {
      const { data } = await userLoginData.forgotPassword(userEmail)
      if (data) {
        dispatch(userSlice.actions.forgotPasswordSuccess(data.data))
        toast.success(data.data.message)
      } else {
        toast.error(data.data.message)
        dispatch(userSlice.actions.hasError(null))
      }
    } catch (response: any) {
      const { data = { data: { message: staticErrors.serverInactive } } } = response.response.data;
      toast.error(data.message)
      dispatch(userSlice.actions.hasError(data))
    }
  }
}

export const resetPassword = (body: any) => {
  dispatch(userSlice.actions.startLoading())
  return async () => {
    try {
      const { data } = await userLoginData.resetPassword(body)
      if (data.data) {
        if (data.data.data == "SUCCESS") {
          toast.success("Password reset successfull");
          dispatch(userSlice.actions.resetPasswordSuccess(data.data))
        } else {
          toast.success(data.data.message)
          dispatch(userSlice.actions.hasError(data))
        }
      }
    } catch (response: any) {
      const { data = { data: { message: staticErrors.serverInactive } } } = response.response.data;
      toast.error(data.message)
      dispatch(userSlice.actions.hasError(data))
    }
  }
}
