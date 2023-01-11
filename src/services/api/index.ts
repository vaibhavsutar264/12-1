import axios from 'axios'
import { getFromLocalStorage } from '../../hooks/useLocalStorage'
import { logout } from '../../redux/slices/authSlice'
import { store, dispatch } from '../../redux/store'
import { Password } from '../../types/authType'
import { apiHelpers, apiRoutes, apiVrbls, appRoutes, localStorageVar } from '../../utils/constants'
import { setRefreshTokens } from '../../utils/helpers'
import {
  billingTransformer,
  forgotPasswordTransformer,
  loginTransformer,
  logoutTransformer,
  resetPasswordTransformer,
  userInfoTransformer,
  refrshTokenTransformer,
  changePasswordTransformer
} from '../../utils/transformers'
import routes from './routes'

const excludeULS = [apiRoutes.REFRESH_TOKEN, apiRoutes.LOGIN, apiRoutes.LOGOUT];


const httpInstance = (transformer: any) => {
  const Inst = axios.create({
    baseURL: routes.BASE_URL,
    ...(transformer && { transformResponse: [transformer] }),
    headers: {
      [apiHelpers.HEADER_CONTENT_TYPE]: apiHelpers.CONTENT_TYPE_APP_JSON,
      [apiHelpers.HEADER_AUTHORIZATION]: `${apiHelpers.TOKEN_TYPE} ${getFromLocalStorage(localStorageVar.TOKEN_VAR) || null
        }`,
    },
  });

  // Interceptor for session managment
  Inst.interceptors.response.use(
    // returning if success response
    (response: any) => { return response },
    async (error) => {
      // Handling error response

      // checking api url should exclude interceptor or not
      if (!excludeULS.map((u) => `${error.config.baseURL}${u}`).includes(error.config.url)) {
        console.log("came to interceptor");

        // checking for unauthorized error 401
        if (error.response.status === 401) {

          // if unauthorized calling the refresh token to get new access token
          const refreshCall = await userLoginData.refreshToken({
            refreshToken: getFromLocalStorage(localStorageVar.REFRESH_TOKEN),
            username: store.getState().auth.user[apiVrbls.USER.EMAIL_ID]
          });

          // checking the response for refresh token
          if (refreshCall.status === 200) {

            // if refresh token resonse valid then setting new access tokens to local storage with promise function
            setRefreshTokens(refreshCall.data).then(() => {

              // after setting tokens to local storage updating tokens in base request
              error.config.headers = {
                [apiHelpers.HEADER_AUTHORIZATION]: `${apiHelpers.TOKEN_TYPE} ${getFromLocalStorage(localStorageVar.TOKEN_VAR) || null}`,
              };

              // calling the base request again with new token
              return Inst.request(error.config);
            }).catch(() => {

              // if something wronf with setting the tokens to local storage then logout
              dispatch(logout())
            });
          } else {

            // if refresh token response not 200 then logout
            dispatch(logout())
          }
        } else {

          // if error is not 401 then return same error it will handle in transformer and slice level
          return Promise.reject(error);
        }
      } else {

        // if req URL is excludable then returning the error
        return Promise.reject(error);
      }
    });

  return Inst
}
const requests = {
  get: (url: string, transformer: any) => httpInstance(transformer).get(url),
  post: (url: string, body: any, transformer: any) =>
    httpInstance(transformer).post(url, body),
  patch: (url: string, body: Password) => httpInstance(null).patch(url, body),
  put: (url: string, body: any) => httpInstance(null).put(url, body),
  postPdf: (url: string, data: any, transformer: any) =>
    httpInstance(transformer).get(url, {
      responseType: 'blob',
      headers: { [apiHelpers.HEADER_CONTENT_TYPE]: apiHelpers.CONTENT_TYPE_APP_PDF },
    }),
}

const userLoginData = {
  login: (body: any) =>
    requests.post(`${routes.BASE_URL}${routes.LOGIN}`, body, loginTransformer),
  refreshToken: (body: any) =>
    requests.post(`${routes.BASE_URL}${routes.REFRESH_TOKEN}`, body, refrshTokenTransformer),
  logout: (bdy: any) =>
    requests.post(`${routes.BASE_URL}${routes.LOGOUT}`, bdy, logoutTransformer),
  updatePassword: (body: Password) =>
    requests.post(`${routes.BASE_URL}${routes.SET_PASSWORD}`, body, null),
  forgotPassword: (body: any) =>
    requests.post(
      `${routes.BASE_URL}${routes.FORGOT_PASSWORD}`,
      body,
      forgotPasswordTransformer
    ),
  resetPassword: (body: any) =>
    requests.post(
      `${routes.BASE_URL}${routes.RESET_PASSWORD}`,
      body,
      resetPasswordTransformer
    ),
  changePassword: (body: any) =>
    requests.post(
      `${routes.BASE_URL}${routes.CHANGE_PASSWORD}`,
      body,
      changePasswordTransformer
    ),
  getUserInfo: (emailId: any) =>
    requests.get(
      `${routes.BASE_URL}${routes.GET_USER_INFO}?username=${emailId}`,
      userInfoTransformer
    ),
}

const billing = {
  loadInvoices: (data: any) =>
    requests.get(
      `${routes.BASE_URL}${routes.GET_INVOICES}?q=${data.searchValue}${data.fromDate ? `&fromDate=${data.fromDate}` : ''}${data.toDate ? `&toDate=${data.toDate}` : ''}`,
      billingTransformer
    ),
  viewInvoice: (data: any) =>
    requests.get(`${routes.BASE_URL}${routes.VIEW_INVOICES}`, null),
  downloadInvoice: (data: any) =>
    requests.postPdf(
      `${routes.BASE_URL}${routes.DOWNLOAD_INVOICES}`,
      data,
      null
    ),
  downloadInvoiceCdr: (data: any) =>
    requests.postPdf(
      `${routes.BASE_URL}${routes.DOWNLOAD_INVOICES_CDR}`,
      data,
      null
    ),
}
const account = {
  getAccountDetails: () =>
    requests.get(`${routes.BASE_URL}${routes.GET_ACCOUNT_BILLING_DETAILS}`, null),
  editUserDetails: (body: any) =>
    requests.post(`${routes.BASE_URL}${routes.UPDATE_USER_INFO}`, body, null),
}

export { userLoginData, billing, account }
