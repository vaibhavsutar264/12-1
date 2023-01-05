import { SyntheticEvent } from 'react'
import { useDispatch as useAppDispatch } from '../../redux/store'
import { logout } from '../../redux/slices/authSlice'
import { useNavigate, Link } from 'react-router-dom'
import { availableLanguages } from '../../i18n'
import useLocales from '../../hooks/useLocales'
import { useTranslation } from 'react-i18next'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import Globe from '../../assets/images/svg/globe.svg'
import GlobeDark from '../../assets/images/svg/globe-dark.svg'

import {
  getFromLocalStorage,
  setInLocalStorage,
} from '../../hooks/useLocalStorage'
import { apiVrbls, localStorageVar, typeVar } from '../../utils/constants'
import { useSelector } from 'react-redux'
import TclLogo from '../common/elements/Logo'
import LanguageSelector from '../../layouts/dashboard/header/LanguageSelector'

const Header = ({ toggleTheme }: { toggleTheme: any }) => {
  const { i18n } = useTranslation()
  const { t } = useLocales()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { user } = useSelector((state: any) => state.auth || []);
  const logoutHandler = async (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(logout())
    navigate('/')
  }

  const getitem = getFromLocalStorage(localStorageVar.THEME_VAR)

  return (
    <>
      <header>
        <div className="container">
          <TclLogo theme="dark" />
          <ul className="navbar-items">
            <li className="item">
              {user !== null ? (
                <Link to="" onClick={logoutHandler}>
                  {t<string>('logoutBtn')}
                </Link>
              ) : (window.location.pathname.match(/^\/login/) ? ('') : <Link to="/login">{t<string>('loginBtn')}</Link>)}
            </li>
            <li className="item">
            <LanguageSelector/>
            </li>
            <li className="item">

              <div className="right__elementsItem theme__toggle">
                <div className="toggle__wrapper">
                  <button className="lightMode active" onClick={toggleTheme}>
                    <LightModeIcon />
                  </button>
                  <button className="darkMode" onClick={toggleTheme}>
                    <DarkModeIcon />
                  </button>
                </div>
              </div>

            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
