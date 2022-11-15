import React, { SyntheticEvent } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useAppDispatch } from '../../redux/store'
import { logout } from '../../redux/auth/auth.slice'
import { useNavigate, Link } from 'react-router-dom'
import Logo from '../../assets/images/CPaaSLogo.png'
import '../../i18n'
import useLocales from '../../hooks/useLocales'
import { useTranslation } from 'react-i18next'
import { availableLanguages } from '../../i18n'

const Header = () => {
  const { i18n } = useTranslation()
  const { t } = useLocales()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const logoutHandler = async (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(logout())
    navigate('/')
  }

  return (
    <>
      <header>
        <Navbar className="py-0" variant="dark" expand="lg" collapseOnSelect>
          <Container fluid>
            <Link className="navbar-brand logo w-auto" to="/">
              <img className="img-fluid" src={Logo} alt="CPAAS TCL" />
              {/* {t<string>("CpaasHeading")} */}
            </Link>
            {/* <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            {localStorage.token ? (<Nav >
              <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
            </Nav>) :(<Nav className='ms-auto'>
            <Nav.Link ></Nav.Link>
          </Nav>) }
            <Nav >
              <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
        </Navbar.Collapse> */}
            <ul className="nav w-auto width-adjusting-css">
              <li className="nav-item d-flex align-items-center justify-content-start">
                {localStorage.token ? (
                  <Nav>
                    <Nav.Link onClick={logoutHandler}>
                      {t<string>('logoutBtn')}
                    </Nav.Link>
                  </Nav>
                ) : (
                  <Nav className="ms-auto">
                    <Nav.Link></Nav.Link>
                  </Nav>
                )}
                {localStorage.token ? (
                  <Nav></Nav>
                ) : (
                  <Nav>
                    <Nav.Link href="/login">{t<string>('loginBtn')}</Nav.Link>
                  </Nav>
                )}
              </li>
              <li className="nav-item width-adjusting-css">
                <select
                  className="form-select language-select"
                  aria-label="Default select example"
                  defaultValue={i18n.language}
                  onChange={(e) => {
                    i18n.changeLanguage(e.target.value)
                    localStorage.setItem('lng', e.target.value)
                  }}
                >
                  {availableLanguages.map((language) => (
                    <option key={language}>{language}</option>
                  ))}
                </select>
              </li>
            </ul>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header
