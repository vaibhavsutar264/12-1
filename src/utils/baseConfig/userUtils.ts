export const getUserFromStorage = () => {
  const userData = localStorage.getItem('user')
  if (userData) {
    return JSON.parse(userData)
  }
  return userData
}
