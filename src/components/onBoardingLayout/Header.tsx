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
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 100,
                  position: 'relative',
                }}
                size="small"
                id="lang-background-invoices" className='lang-background-loginscreens'
              >
                <img
                  src={(getitem == 'light') ? Globe : GlobeDark}
                  alt="" style={{ width: '18px', height: '18px', position: 'absolute', top: '50%', left: '-12px', transform: 'translateY(-50%)', }} />
                <Select
                  MenuProps={{
                    disableScrollLock: true,
                  }}
                  className='buidfix1'
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={i18n.language == ('en-ZA') ? "English" : (i18n.language == ('en-US') ? "English" : i18n.language)}
                  label="Language"
                  onChange={(e) => {
                    i18n.changeLanguage(e.target.value)
                    setInLocalStorage(localStorageVar.LANG_VAR, e.target.value)
                  }}
                >
                  {availableLanguages.map((language) => (
                    <MenuItem key={language} value={language}>
                      {language == 'en-ZA' ? "English" : language}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
