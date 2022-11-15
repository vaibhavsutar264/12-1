import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from '../components/Home/HomeScreen'
import Login from '../components/login/login-screen/Login'
import SetPassword from '../components/login/set-password/SetPassword'
import Notfound from '../components/Notfound/Notfound'
import PrivateRoutes from '../utils/PrivateRoutes'
import ForgotPassword from '../components/login/forgot-password/ForgotPassword'

const RouteHandler = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/checkprotected" element={<HomeScreen />} />
          <Route path="/setpassword" element={<SetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default RouteHandler
