import * as React from 'react'
import { SyntheticEvent, useState, useEffect } from 'react'
import { login } from '../../../redux/slices/authSlice'
import { AuthState, UserLogin } from '../../../types/authType'
import {
    RootState,
    useDispatch as useAppDispatch,
    useSelector as useAppSelector,
} from '../../../redux/store'
import { useFormik } from 'formik'
import schema from './Yup'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Typography } from '@mui/material'

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
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
// Importing Images
import useLocales from '../../../hooks/useLocales'
import { getFromLocalStorage } from '../../../hooks/useLocalStorage'
import BackgroundBox from '../../common/elements/backGroundBox'
import BannerBg from '../../common/elements/banner'
import { useSelector } from 'react-redux'
import { base64Encode } from '../../../utils/Base64EncodeDecode'
import { apiVrbls, appRoutes } from '../../../utils/constants'
import Header from '../../header/Header'
import { useDarkMode } from '../../../themes/useDarkMode'


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

const Login = ({toggleTheme}:any) => {
    const { t } = useLocales()
    const navigate = useNavigate()
    const [open, setOpen] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useAppDispatch()
    const { user, isError, isSuccess, message, isAuthenticated } = useAppSelector(
        (state: any) => state.auth || {}
    )
    useEffect(() => {
        if (isAuthenticated) {
            console.log(message)
        }
    }, [isError, message, isAuthenticated])


    useEffect(() => {
        if (getFromLocalStorage('token') && getFromLocalStorage('token') !== null) {
            if (user) {
                if (user.attributes[apiVrbls.USER.IS_LOGGED_IN_FIRST]) {
                // if (user) {
                    navigate(appRoutes.SET_PASSWORD)
                } else {
                    navigate(appRoutes.DASHBOARD)
                    // navigate(appRoutes.ROOT)
                }
            }
        }
    }, [user, navigate])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: () => {
            const userDetails: UserLogin = {
                email: email,
                password: password,
            }
            dispatch(login(userDetails,email))
        },
    })
    const { handleSubmit, handleChange, touched, errors } = formik

    const handleEmailChange = (e: SyntheticEvent) => {
        e.preventDefault()
        setEmail((e.target as HTMLInputElement).value)
        const emailVariable = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/
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
            (e.target as HTMLInputElement).className = 'form-control input-custom'
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
            <Header toggleTheme={toggleTheme} />
            <Box className="account__screen">
                {/* ACCOUNT SCREEN BANNER START*/}
                <BannerBg />
                {/* ACCOUNT SCREEN BANNER END */}
                {/* ACCOUNT SCREEN ANIMATION START */}
                <BackgroundBox />
                {/* ACCOUNT SCREEN ANIMATION END */}
                {/* ACCOUNT FORM START */}
                <Box
                    sx={{ flexGrow: 1 }}
                    id="login-form"
                    className="account__form login-form"
                >
                    <div className="form__inner">
                        <Box sx={{ width: 1 }} className="account__form__header">
                            <h3 className="title">{t<string>('login')}</h3>
                        </Box>
                        <Box sx={{ width: 1 }} className="account__form__error">
                            <p className="error__msg">
                                {message && message.message == 'Incorrect username or password' ? (
                                    <p>{t<string>('yourEmailIdPasswordNotMatch')}</p>
                                ) : (
                                    ''
                                )}
                            </p>
                        </Box>
                        <Box sx={{ flexGrow: 1 }} className="account__form__body">
                            <form onSubmit={handleSubmit} action="#" method="post">
                                <FormGroup>
                                    <FormControl
                                        className="input-wrapper yes-margin"
                                        data-margin={true}
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
                                            className="input-field"
                                            required
                                            id="username"
                                            label={t<string>('enterYourEmailID')}
                                            variant="standard"
                                            sx={{ width: 1, borderRadius: '10px !important', border: 'none !important' }}
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
                                    {touched.email && errors.email && (
                                        <p>
                                            {errors.email == 'Enter your email' ? (
                                                <p className="text-error">{t<string>('email')}</p>
                                            ) : (
                                                ''
                                            )}
                                            {errors.email == 'email must be a valid email' ? (
                                                <p className="text-error">
                                                    {t<string>('mustBeValidEmail')}
                                                </p>
                                            ) : (
                                                ''
                                            )}
                                        </p>
                                    )}

                                    <FormControl
                                        className="input-wrapper password-checkHide no-margin"
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
                                            sx={{ width: 1, borderRadius: '10px !important' }}
                                            type={values.showPassword ? 'text' : 'password'}
                                            autoComplete="false"
                                            name="password"
                                            inputProps={{ 'data-testid': 'password-element' }}
                                            className="form-control input-custom input-field"
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
                                                            {!values.showPassword ? (
                                                                <VisibilityOffOutlinedIcon />
                                                            ) : (
                                                                <VisibilityOutlinedIcon />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </FormControl>
                                    {touched.password && errors.password && (
                                        <p>
                                            {errors.password == 'Enter your password' ? (
                                                <p className="text-error">
                                                    {t<string>('enterPassword')}
                                                </p>
                                            ) : (
                                                ''
                                            )}
                                            {errors.password ==
                                                'password must be at least 5 characters' ? (
                                                <p className="text-error">
                                                    {t<string>('atleastFiveCharPassword')}
                                                </p>
                                            ) : (
                                                ''
                                            )}
                                        </p>
                                    )}
                                    <FormControl
                                        className="input-wrapper password-checkHide no-margin fp-margin"
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
                                            style={{ width: 'max-content', fontFamily: 'ubuntu' }}
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
                                            sx={{
                                                fontSize: '18px',
                                                lineHeight: '21px',
                                                fontFamily: 'ubuntu',
                                                letterSpacing: '-0.72px',
                                            }}
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
