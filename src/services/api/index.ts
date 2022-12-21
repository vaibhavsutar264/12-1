import axios from 'axios'
import { getFromLocalStorage } from '../../hooks/useLocalStorage'
import { Password } from '../../types/authType'
import { apiHelpers, appRoutes, localStorageVar } from '../../utils/constants'
import {
  billingTransformer,
  forgotPasswordTransformer,
  loginTransformer,
  logoutTransformer,
  resetPasswordTransformer,
  userInfoTransformer,
  userInfoInternalTransformer
} from '../../utils/transformers'
import routes from './routes'
const httpInstance = (transformer: any) =>
  axios.create({
    baseURL: routes.BASE_URL,
    ...(transformer && { transformResponse: [transformer] }),
    headers: {
      [apiHelpers.HEADER_CONTENT_TYPE]: apiHelpers.CONTENT_TYPE_APP_JSON,
      [apiHelpers.HEADER_AUTHORIZATION]: `${apiHelpers.TOKEN_TYPE} ${
        getFromLocalStorage(localStorageVar.TOKEN_VAR) || null
      }`,
    },
  })

// Intercepter for every request appending headers here
// httpInstance(null).interceptors.request.use(
//   (config: any) => {
//     // config.headers[apiHelpers.HEADER_CONTENT_TYPE] =
//     //   apiHelpers.CONTENT_TYPE_APP_JSON
//     // config.headers[apiHelpers.HEADER_AUTHORIZATION] = `${
//     //   apiHelpers.TOKEN_TYPE
//     // } ${getFromLocalStorage(localStorageVar.TOKEN_VAR) || null}`
//     return config
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       localStorage.clear()
//       window.location.href = appRoutes.LOGIN
//     }
//     return Promise.reject(error)
//   }
// )

// Add a response interceptor
// httpInstance(null).interceptors.response.use(
//   (response) => {
//     return Promise.resolve(response)
//   },
//   ({ response }) => {
//     return Promise.reject(response)
//   }
// )

const requests = {
  get: (url: string, transformer: any) => httpInstance(transformer).get(url),
  post: (url: string, body: any, transformer: any) =>
    httpInstance(transformer).post(url, body),
  patch: (url: string, body: Password) => httpInstance(null).patch(url, body),
  put: (url: string, body: any) => httpInstance(null).put(url, body),
  postPdf: (url: string, data: any, transformer: any) =>
    httpInstance(transformer).get(url, {
      responseType: 'blob',
      headers: { 'Content-Type': 'application/pdf' },
    }),
}

const userLoginData = {
  login: (body: any) =>
    requests.post(`${routes.BASE_URL}${routes.LOGIN}`, body, loginTransformer),
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
  getUserInfo: (emailId: any) =>
    requests.get(
      `${routes.BASE_URL}${routes.GET_USER_INFO}?username=${emailId}`,
      userInfoTransformer
      // `${routes.BASE_URL}${routes.GET_USER_INFO}/${id}`,
      // userInfoInternalTransformer
    ),
}

const billing = {
  loadInvoices: (data: any) =>
    requests.get(
      `${routes.BASE_URL}${routes.GET_INVOICES}?q=${data.searchValue}&Due_date=${data.startDate}&Due_date=${data.endDate}`,
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
  editUserDetails: (body: any ) =>
    requests.post(`${routes.BASE_URL}${routes.UPDATE_USER_INFO}`,body, null),
}

export { userLoginData, billing, account }
