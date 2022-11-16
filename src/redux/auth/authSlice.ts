import { AxiosError } from 'axios'
import { AuthState, Email, Password, UserLogin } from '../../types/authType'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getUserFromStorage } from '../../utils/baseConfig/userUtils'
import authService from './authService'
import { Error } from '../../types/fetchType'

const user = getUserFromStorage()

const initialState: AuthState = {
  user: user ? user : null,
  profile: undefined,
  isError: false,
  isLoading: false,
  isSuccess: false,
  isAuthenticated: false,
  message: '',
}

export const login = createAsyncThunk(
  'auth/login',
  async (user: UserLogin, thunkAPI) => {
    try {
      const data = await authService.login(user)
      return data
    } catch (error) {
      const err = error as AxiosError<Error>
      console.log(error)
      return thunkAPI.rejectWithValue(err.response?.data.error)
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})
export const updatePassword = createAsyncThunk(
  'auth/updatePassword',
  async (userPassword: Password, thunkAPI) => {
    try {
      const data = await authService.updatePassword(userPassword)
      return data
    } catch (error) {
      const err = error as AxiosError<Error>
      console.log(err)
      return thunkAPI.rejectWithValue(err.response?.data.error)
    }
  }
)
export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (userEmail: Email, thunkAPI) => {
    try {
      const data = await authService.forgotPassword(userEmail)
      return data
    } catch (error) {
      const err = error as AxiosError<Error>
      console.log(err)
      return thunkAPI.rejectWithValue(err.response?.data.error)
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state: AuthState) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
      state.isAuthenticated = false
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload.data.token
      state.isAuthenticated = true
      state.message = action.payload.message
    })
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.isAuthenticated = false
      state.message = action.payload as string
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null
      state.isAuthenticated = false
    })
    builder.addCase(updatePassword.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.message = action.payload.message as string
    })
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload as string
    })
    builder.addCase(forgotPassword.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.message = action.payload.message as string
    })
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload as string
    })
  },
})
export const { reset } = authSlice.actions
