import React from 'react'
// import { Routes, Route } from "react-router-dom";
// import HomeScreen from "./components/Home/HomeScreen";
// import Login from "./components/login/login-screen/Login";
// import SetPassword from "./components/login/set-password/SetPassword";
import './i18n'
import Header from './components/Header/Header'
import { Toggle } from './themes/toggle'
import { useDarkMode } from './themes/useDarkMode'
import { GlobalStyles, lightTheme, darkTheme } from './themes/globalStyles'
import { ThemeProvider } from 'styled-components'
// import Notfound from "./components/Notfound/Notfound";
import useAuth from './hooks/useAuth'
import RouteHandler from './route/routeHandler'
// import PrivateRoutes from './utils/PrivateRoutes'
import './assets/sass/global/global.scss'
// import ForgotPassword from "./components/login/forgot-password/ForgotPassword";

const App = () => {
  useAuth()
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={themeMode}>
      <Header />
      <GlobalStyles />
      <RouteHandler />
      <h6 className="mode-text">
        Mode - {process.env.NODE_ENV} user - {process.env.name}
      </h6>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default App
