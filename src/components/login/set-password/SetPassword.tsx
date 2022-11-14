import React, { FormEvent, useState, useEffect, SyntheticEvent } from 'react'
import { toast } from 'react-toastify'
import { reset, updatePassword } from '../../../redux/auth/auth.slice'
import { Password } from '../../../types/auth.type'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import { styled } from '@mui/material/styles'
import Button, { ButtonProps } from '@mui/material/Button'
import { purple } from '@mui/material/colors'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
// Importing Images
import Background from '../../../assets/images/login-bg.png'
import ChartImg from '../../../assets/images/svg/Chart.svg'
import PieChartImg from '../../../assets/images/svg/PieCharts.svg'
import SalesImg from '../../../assets/images/svg/Sales.svg'
import VoiceImg from '../../../assets/images/svg/Voice.svg'
import ChatImg from '../../../assets/images/svg/Chat.svg'
import VideoImg from '../../../assets/images/svg/Video.svg'
import WhatsappImg from '../../../assets/images/svg/Whatsapp.svg'
import useLocales from '../../../hooks/useLocales'

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
  amount: string
  password: string
  weight: string
  weightRange: string
  showPassword: boolean
}

const SetPassword = () => {
  const { t } = useLocales()
  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
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

  // const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [open, setOpen] = useState(false)
  const { isError, isSuccess, message } = useAppSelector(
    (state: any) => state.auth
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (isError) {
      // toast.error(message)
      console.log(message)

      // dispatch(reset())
    }
    if (isSuccess) {
      toast.success(message)
      setPassword('')
      // setOldPassword("")
      setConfirmPassword('')
      dispatch(reset())
    }
  }, [isError, isSuccess, message, dispatch])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('password and confirm password not same')
      return
    }
    const userPassword: Password = {
      password,
    }
    dispatch(updatePassword(userPassword))
  }

  const handlePasswordChange = (e: SyntheticEvent) => {
    e.preventDefault()
    setPassword((e.target as HTMLInputElement).value)
    const patternVariable =
      "(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?|][()-<>/]).{8,}" //uppercase lowercase symbol and number
    // const patternVariable =".{5,}";
    // const submitButtonElement = document.getElementById("btn-enable-style") as HTMLButtonElement;
    const passwordBoxElement = document.getElementById(
      'password-box'
    ) as HTMLButtonElement
    if ((e.target as HTMLInputElement).value.match(patternVariable)) {
      // submitButtonElement.className="customBtn-01 btn-enable-style"
      passwordBoxElement.className = 'input-wrapper success'
      // setOpen(false);
    } else {
      // submitButtonElement.className="customBtn-01"
      passwordBoxElement.className = 'input-wrapper'
      // setOpen(true);
    }
  }

  // const handlePasswordChange = (e: SyntheticEvent) => {
  //   e.preventDefault();
  //   setPassword((e.target as HTMLInputElement).value)
  //   const patternVariable ="(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?|][()-<>/]).{8,}";
  //   if ((e.target as HTMLInputElement).value.match(patternVariable)) {
  //     (e.target as HTMLInputElement).className="form-control input-custom is-valid"
  //   } else {
  //     (e.target as HTMLInputElement).className="form-control input-custom"
  //   }
  // };

  const handleConfirmPasswordChange = (e: SyntheticEvent) => {
    e.preventDefault()
    setConfirmPassword((e.target as HTMLInputElement).value)
    const confirmPasswordpatternVariable =
      "(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?|][()-<>/]).{8,}" //uppercase lowercase symbol and number
    // const patternVariable =".{5,}";
    const submitButtonElement = document.getElementById(
      'btn-enable-style'
    ) as HTMLButtonElement
    const confirmpasswordBoxElement = document.getElementById(
      'confirm-password-box'
    ) as HTMLButtonElement
    if (
      (e.target as HTMLInputElement).value.match(confirmPasswordpatternVariable)
    ) {
      submitButtonElement.className = 'customBtn-01 btn-enable-style'
      confirmpasswordBoxElement.className =
        'input-wrapper password-checkHide success'
      setOpen(false)
    } else {
      submitButtonElement.className = 'customBtn-01'
      confirmpasswordBoxElement.className = 'input-wrapper password-checkHide'
      setOpen(true)
    }
  }

  return (
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
      <Box sx={{ flexGrow: 1 }} className="account__form login-form">
        <div className="form__inner">
          <Box sx={{ width: 1 }} className="account__form__header">
            <h3 className="title">{t<string>('setPassword')}</h3>
            <p className="sub__title">{t<string>('generatePassword')}</p>
          </Box>
          <Box sx={{ width: 1 }} className="account__form__error">
            <p className="error__msg">{message && message}</p>
          </Box>
          <Box sx={{ flexGrow: 1 }} className="account__form__body">
            <form onSubmit={handleSubmit} action="#" method="post">
              <Box
                className="input-wrapper"
                id="password-box"
                sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  position: 'relative',
                  width: 1,
                  margin: '20px 0px',
                }}
              >
                <InputLabel htmlFor="username" className="label__icon">
                  <LockOpenIcon id="unlock-icon" />
                </InputLabel>
                <TextField
                  required
                  id="password"
                  label={t<string>('password')}
                  variant="standard"
                  sx={{ width: 1 }}
                  name="password"
                  type="password"
                  data-testid="password-element"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Box>

              <Box
                className="input-wrapper password-checkHide"
                id="confirm-password-box"
                sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  position: 'relative',
                  width: 1,
                  margin: '20px 0px',
                }}
              >
                <InputLabel htmlFor="confirmPassword" className="label__icon">
                  <LockOpenIcon id="unlock-icon" />
                </InputLabel>
                <TextField
                  required
                  id="confirmPassword"
                  label={t<string>('confirmPassword')}
                  variant="standard"
                  sx={{ width: 1 }}
                  type={values.showPassword ? 'text' : 'password'}
                  autoComplete="false"
                  name="password"
                  data-testid="confirm-password-element"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
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
              </Box>

              <Box
                className="input-wrapper password-checkHide"
                sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  position: 'relative',
                  width: 1,
                  margin: '20px 0px',
                }}
              >
                <a href="/forgot-password" className="forgot-password">
                  {t<string>('forgotPassword')}
                </a>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  position: 'relative',
                  width: 1,
                  marginTop: '50px',
                }}
              >
                <ColorButton
                  variant="contained"
                  id="btn-enable-style"
                  type="submit"
                  name="submit"
                  disabled={open}
                  className="customBtn-01 btn-enable-style"
                >
                  {t<string>('done')}
                </ColorButton>
              </Box>
            </form>
          </Box>
        </div>
      </Box>
      {/* ACCOUNT FROM END */}
    </Box>
  )
}

export default SetPassword
