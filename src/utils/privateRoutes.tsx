import { Outlet, Navigate } from 'react-router-dom'
import { getFromLocalStorage } from '../hooks/useLocalStorage'

const PrivateRoutes = () => {
  const auth = getFromLocalStorage('token')
  return auth && auth !== null ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
