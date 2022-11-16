import * as React from 'react'
import { SyntheticEvent, useState, useEffect } from 'react'
import { login, reset } from '../../../redux/auth/authSlice'
import { UserLogin } from '../../../types/authType'
// import { Form, Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { useFormik } from 'formik'
import schema from './Yup'
// import { login } from "../../../redux/action-thunks/userActions";
// import { RootState } from "../../../store";
// import  logo  from "../images/CPaaSLogo.png";
import { useNavigate } from 'react-router-dom'
// import { useAlert } from "react-alert";
// import styled, { ThemeProvider } from "styled-components"
// import {UserState} from "../../../redux/slices/userSlice"

// Importing Material UI
import {
  Box,
  TextField,
  InputLabel,
  styled,
  Button,
  ButtonProps,
  FormGroup,
  FormControl,
} from '@mui/material'
import { purple } from '@mui/material/colors'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
// Importing Images
import Background from '../../../assets/images/login-bg.jpg'
import ChartImg from '../../../assets/images/svg/Chart.svg'
import PieChartImg from '../../../assets/images/svg/PieCharts.svg'
import SalesImg from '../../../assets/images/svg/Sales.svg'
import VoiceImg from '../../../assets/images/svg/Voice.svg'
import ChatImg from '../../../assets/images/svg/Chat.svg'
import VideoImg from '../../../assets/images/svg/Video.svg'
import WhatsappImg from '../../../assets/images/svg/Whatsapp.svg'
import useLocales from '../../../hooks/useLocales'
import { getFromLocalStorage } from '../../../hooks/useLocalStorage'

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  height: '70px',
  width: '100%',
  borderRadius: '35px',
  mixBlendMode: 'luminosity',
  opacity: 0.5,
  '&:hover': {
    backgroundColor: purple[700],
  },
}))

interface State {
  email: string
  password: string
  amount: string
  weight: string
  weightRange: string
  showPassword: boolean
}

const Login = () => {
  const { t } = useLocales()
  const navigate = useNavigate()
  const [open, setOpen] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()
  const { user, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  )
  useEffect(() => {
    if (isError) {
      console.log(isError)
    }
    if (isSuccess) {
      dispatch(reset())
    }
  }, [isError, isSuccess, user, message, dispatch])
  // const { message, success } = data;

  useEffect(() => {
    if (getFromLocalStorage('token') && getFromLocalStorage('token') !== null) {
      navigate('/setpassword')
    }
  }, [isSuccess, navigate])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: () => {
      const user: UserLogin = {
        email: email,
        password: password,
      }
      dispatch(login(user))
      // action.resetForm();
    },
  })
  const { handleSubmit, handleChange, touched, errors } = formik

  const handleEmailChange = (e: SyntheticEvent) => {
    e.preventDefault()
    setEmail((e.target as HTMLInputElement).value)
    const emailVariable = '.{5,}'
    const emailBoxElement = document.getElementById(
      'email-box'
    ) as HTMLInputElement
    if ((e.target as HTMLInputElement).value.match(emailVariable)) {
      emailBoxElement.className = 'input-wrapper success'
    } else {
      emailBoxElement.className = 'input-wrapper'
    }
  }

  const handlePasswordChange = (e: SyntheticEvent) => {
    e.preventDefault()
    setPassword((e.target as HTMLInputElement).value)
    // const patternVariable ="(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?|][()-<>/]).{8,}"; //uppercase lowercase symbol and number
    const patternVariable = '.{5,}'
    const submitButtonElement = document.getElementById(
      'btn-enable-style'
    ) as HTMLButtonElement
    const passwordBoxElement = document.getElementById(
      'password-box'
    ) as HTMLButtonElement
    if ((e.target as HTMLInputElement).value.match(patternVariable)) {
      submitButtonElement.className = 'customBtn-01 btn-enable-style'
      passwordBoxElement.className = 'input-wrapper password-checkHide success'
      setOpen(false)
    } else {
      ;(e.target as HTMLInputElement).className = 'form-control input-custom'
      submitButtonElement.className = 'customBtn-01'
      passwordBoxElement.className = 'input-wrapper password-checkHide'
      setOpen(true)
    }
  }

  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    amount: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  return (
    <>
      <Box className="account__screen">
        {/* ACCOUNT SCREEN BANNER START*/}
        <picture>
          {' '}
          <source srcSet={Background} type="image/webp" />{' '}
          <source srcSet={Background} type="image/png" />{' '}
          <img src={Background} className="account__screen__banner" alt="" />{' '}
        </picture>
        {/* ACCOUNT SCREEN BANNER END */}
        {/* ACCOUNT SCREEN ANIMATION START */}
        <Box sx={{ flexGrow: 1 }} className="account__form__animation">
          <div className="floating-wrapper">
            <div className="floating-wrapper-inner">
              <div className="floating-item floating-item-1">
                <img src={ChartImg} alt="Chart" />
              </div>
              <div className="floating-item floating-item-2">
                <img src={PieChartImg} alt="Pie Chart" />
              </div>
              <div className="floating-item floating-item-3">
                <img src={SalesImg} alt="Sales" />
              </div>
              <div className="floating-item floating-item-4">
                <img src={VoiceImg} alt="Voice" />
              </div>
              <div className="floating-item floating-item-5">
                <img src={ChatImg} alt="Chat" />
              </div>
              <div className="floating-item floating-item-6">
                <img src={VideoImg} alt="Video" />
              </div>
              <div className="floating-item floating-item-7">
                <img src={WhatsappImg} alt="Whatsapp" />
              </div>
            </div>
          </div>
        </Box>
        {/* ACCOUNT SCREEN ANIMATION END */}
        {/* ACCOUNT FORM START */}
        <Box
          sx={{ flexGrow: 1 }}
          id="login-form"
          className="account__form login-form"
        >
          <div className="form__inner">
            <Box sx={{ width: 1 }} className="account__form__header">
              <h3 className="title">{t<string>('loginHeading')}</h3>
              <p className="sub__title">{t<string>('enterEmailAndPassword')}</p>
            </Box>
            <Box sx={{ width: 1 }} className="account__form__error">
              <p className="error__msg">{message && message}</p>
            </Box>
            <Box sx={{ flexGrow: 1 }} className="account__form__body">
              <form onSubmit={handleSubmit} action="#" method="post">
                <FormGroup>
                  <FormControl
                    className="input-wrapper"
                    id="email-box"
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      position: 'relative',
                      width: 1,
                      margin: '20px 0px',
                    }}
                  >
                    <InputLabel
                      htmlFor="username"
                      id="label__icon"
                      className="label__icon"
                    >
                      <MailOutlineIcon id="mail-icon" />
                    </InputLabel>
                    <TextField
                      required
                      id="username"
                      label={t<string>('email')}
                      variant="standard"
                      sx={{ width: 1 }}
                      type="email"
                      inputProps={{
                        'data-testid': 'email-element',
                        autoComplete: 'off',
                      }}
                      name="email"
                      onChange={handleChange}
                      onInput={handleEmailChange}
                      value={email}
                    />
                  </FormControl>
                  {touched.email && errors.email && <p>{errors.email}</p>}

                  <FormControl
                    className="input-wrapper password-checkHide"
                    id="password-box"
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      position: 'relative',
                      width: 1,
                      margin: '20px 0px',
                    }}
                  >
                    <InputLabel htmlFor="password" className="label__icon">
                      <LockOpenIcon id="unlock-icon" />
                    </InputLabel>
                    <TextField
                      required
                      id="password"
                      label={t<string>('password')}
                      variant="standard"
                      sx={{ width: 1 }}
                      type={values.showPassword ? 'text' : 'password'}
                      autoComplete="false"
                      name="password"
                      inputProps={{ 'data-testid': 'password-element' }}
                      className="form-control input-custom"
                      value={password}
                      onInput={handlePasswordChange}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              className="password-toggle"
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {values.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>
                  {touched.password && errors.password && (
                    <p>{errors.password}</p>
                  )}
                  <FormControl
                    className="input-wrapper password-checkHide"
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      position: 'relative',
                      width: 1,
                      margin: '20px 0px',
                    }}
                  >
                    <a
                      href="/forgot-password"
                      id="forgot-password"
                      className="forgot-password"
                    >
                      {t<string>('forgotPassword')}
                    </a>
                  </FormControl>
                  <FormControl
                    className="input-wrapper submitBtn"
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      position: 'relative',
                      width: 1,
                      marginTop: '50px',
                    }}
                  >
                    <ColorButton
                      type="submit"
                      id="btn-enable-style"
                      data-testid="button-element"
                      disabled={open}
                      variant="contained"
                      className="customBtn-01"
                    >
                      {t<string>('loginBtn')}
                    </ColorButton>
                  </FormControl>
                </FormGroup>
              </form>
            </Box>
          </div>
        </Box>
        {/* ACCOUNT FROM END */}
      </Box>
    </>
  )
}

export default Login
