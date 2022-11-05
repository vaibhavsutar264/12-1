import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  loading?: boolean
  error?: String
  userInfo: { email?: String; password?: String; success?: Boolean; error?: String; token?: any; }
  token?: any
  data?:any
  email?:String
  userLogin?:any
}

interface Action {
  payload?: string
}

export interface BasicUser {
  email?: any;
  role?: any;
  token?:any;
  password?: any;
}

const initialState: UserState = {
  loading: true,
  userInfo:{},
  data:[{"email":"","password":"","token":"", "error":""}],
  error:""
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state: UserState = { userInfo: {} },
      action: PayloadAction<BasicUser>) => ({
      ...state,
      loading: false,
      data: action.payload,
    }),
    userLogout: () => initialState,
  },
});

export default userSlice.reducer;

export const {
  userLogin: userLoginActionCreator,
  userLogout: userLogoutActionCreator,
} = userSlice.actions;
