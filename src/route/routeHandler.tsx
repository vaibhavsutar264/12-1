import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from '../components/Home/HomeScreen'
import Login from '../components/login/login-screen/Login'
import SetPassword from '../components/login/set-password/SetPassword'
import Notfound from '../components/Notfound/Notfound'
import PrivateRoutes from '../utils/privateRoutes'
import ForgotPassword from '../components/login/forgot-password/ForgotPassword'
import ResetPassword from '../components/login/reset-password/ResetPassword'

const RouteHandler = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/checkprotected" element={<HomeScreen />} />
          <Route path="/setpassword" element={<SetPassword />} />
        </Route>
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default RouteHandler
