import './i18n'
import Header from './components/onBoardingLayout/Header'
import { Toggle } from './themes/Toggle'
import { useDarkMode } from './themes/useDarkMode'
import { GlobalStyles, lightTheme, darkTheme } from './themes/globalStyles'
import { ThemeProvider } from 'styled-components'
import useAuth from './hooks/useAuth'
import './assets/sass/global/global.scss'
import { appThemes } from './utils/constants'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Routes from './route/Routes'
import { useEffect } from 'react'

const App = () => {
    const clickEventHandler = (e: any) => {
        try {
            const trEle = e.target.classList.contains("clkIgnr");
            if (trEle === false) {
                const d: any = document;
                const w: any = window;
                d.getElementById(w.Oid).style.display = "none";
                w.Oid = null
            }
        } catch {

        }

    }
    useEffect(() => {
        document.addEventListener('click', clickEventHandler, true);
    }, [])

    useAuth()
    const [theme, toggleTheme] = useDarkMode()
    const themeMode = theme === appThemes.LIGHT_THEME ? lightTheme : darkTheme
    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Routes toggleTheme={toggleTheme} />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            <ToastContainer />
        </ThemeProvider>
    )
}

export default App
