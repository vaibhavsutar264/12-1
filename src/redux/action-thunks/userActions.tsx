// import { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { AnyAction, Dispatch } from 'redux'
// import {
//   USER_LOGIN_SUCCESS,
//   USER_LOGIN_REQUEST,
//   USER_LOGOUT,
//   USER_LOGIN_FAIL,
// } from '../../constants/userConstants'
// import { RootState } from '../store'
// import axios from "axios";
// import services from '../../services'
// import { userLoginActionCreator,userLogoutActionCreator,changePasswordActionCreator,changePasswordSuccessActionCreator,changePasswordFailureActionCreator  } from "../slices/userSlice";
// export const login =
//   (
//     email: String,
//     password: String,
//     token: String
//   ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
//   async (
//     dispatch: ThunkDispatch<RootState, unknown, AnyAction>
//   ): Promise<void> => {
//     try {
//       const {data} = await services.loginModuleService.loginAPI({ email, password })
//       // const config = { headers: { "Content-Type": "application/json"} };

//       //   //this config file is required for post request

//       //   const { data } = await axios.post(
//       //       `/api/v1/login`,
//       //       { email, password },
//       //       config
//       //   )

//       console.log(data)

//       const userData =  {"email": data.data.user.email, "role":data.data.user.role, "token":data.data.token}
//       const token: any = data.data.token
//       localStorage.setItem('userInfo', JSON.stringify(data))
//       localStorage.setItem('token', token)
//       dispatch(userLoginActionCreator(userData));

//     } catch (error: any) {
//       dispatch(userLoginActionCreator(error.response));
//     }
//   }

// //set password
// export const setPassword = (passwords:object) => async (dispatch:Dispatch) => {
//   // here user data is myform from ucomponent/user/loginsignup
//   try {
//       const config = { headers: { "Content-Type": "application/json" } };

//       //if there is no image then application.json and if image then multipart/form-data

//       const data = await axios.put(`/api/v1/password/update`, passwords, config);
//     //   if (data) {
//     //     dispatch(changePasswordSuccessActionCreator());
//     // } else {
//     //   dispatch(changePasswordFailureActionCreator());
//     // }
//       //payload is linked with usercontroller res
//       // here success is written becase in usercontroller of backend update profile res send is success true only
//   } catch (error: any) {
//     // dispatch(changePasswordFailureActionCreator(error));
//     console.log(error)
//   }
// }

// // async changePassword(request: ChangePasswordRequest): Promise<string | undefined> {
// //   try {
// //       const response = (await axios.put(`${API_HOST}/${apiRoute.USER}/change-password`, request, {
// //           headers: authUtils.getAuthHeader(),
// //       })) as any;
// //       console.log(response.data?.message);
// //       return response.data?.message;
// //   } catch (error: any) {
// //       console.error(JSON.stringify(error));
// //       return undefined;
// //   }
// // },

// export const logout =
//   (): ThunkAction<void, RootState, unknown, AnyAction> =>
//   async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
//     localStorage.removeItem('token')
//     localStorage.removeItem('userInfo')
//     dispatch(userLogoutActionCreator());
//   }

import React from 'react'

const userActions = () => {
  return <div>userActions</div>
}

export default userActions
