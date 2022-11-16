import React from 'react'
import './i18n'
import Header from './components/Header/Header'
import Toggle from './themes/toggle'
import { useDarkMode } from './themes/useDarkMode'
import { GlobalStyles, lightTheme, darkTheme } from './themes/globalStyles'
import { ThemeProvider } from 'styled-components'
import useAuth from './hooks/useAuth'
import RouteHandler from './route/routeHandler'
import './assets/sass/global/global.scss'
import { ToastContainer } from 'react-toastify'

const App = () => {
  useAuth()
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={themeMode}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyles />
      <RouteHandler />
      <h6 className="mode-text">
        Mode - {process.env.NODE_ENV} user - {process.env.name}
      </h6>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
