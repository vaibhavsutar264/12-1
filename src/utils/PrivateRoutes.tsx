import { Outlet, Navigate } from 'react-router-dom'
import { getFromLocalStorage } from '../hooks/useLocalStorage'
// import API_URL from '../services/baseConfig/ApiBase';

const PrivateRoutes = () => {
  // let auth = axios.defaults.headers.common["Authorization"] ;
  // let token = getFromLocalStorage("token");
  // let auth = API_URL.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const auth = getFromLocalStorage('token')
  return auth && auth !== null ? <Outlet /> : <Navigate to="/login" />
  // auth? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRoutes
// import React from 'react'

// const PrivateRoutes = () => {
//   return (
//     <div>PrivateRoutes</div>
//   )
// }

// export default PrivateRoutes
