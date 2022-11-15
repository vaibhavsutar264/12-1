import { useLayoutEffect, useState } from 'react'
import { useAppSelector } from '../redux/store'
import { setHttpToken } from '../utils/baseConfig/apiBase'

function useAuth() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)
  const { user } = useAppSelector((state) => state.auth)

  useLayoutEffect(() => {
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
    setHttpToken(user?.token)
    setCheckingStatus(false)
  }, [user])
  return { loggedIn, checkingStatus }
}

export default useAuth
