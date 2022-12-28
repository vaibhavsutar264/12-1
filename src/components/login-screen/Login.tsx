import { useEffect, useState } from 'react'
import { login, resetLoginParms } from '../../redux/slices/authSlice'
import {
    useDispatch as useAppDispatch,
    useSelector as useAppSelector,
} from '../../redux/store'
import { Link, useNavigate } from 'react-router-dom'
import {
    Box,
    styled,
    Button,
    ButtonProps,
    FormGroup,
    FormControl,
} from '@mui/material'
import { purple } from '@mui/material/colors'
import useLocales from '../../hooks/useLocales'
import { getFromLocalStorage } from '../../hooks/useLocalStorage'
import { apiVrbls, appRoutes, localStorageVar } from '../../utils/constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { PrimaryInput } from '../common/elements/PrimaryInput'
import { validateEmail } from '../../utils/helpers'
import { LoginFormSchema } from '../../utils/yupschemas'


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

const Login = () => {
    const { t } = useLocales()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { user, isError, isAuthenticated } = useAppSelector((state: any) => state.auth || {})
    const [val, setVal] = useState('')
    useEffect(() => {
        if (!isAuthenticated) {
            dispatch(resetLoginParms())
        }
        if (getFromLocalStorage(localStorageVar.TOKEN_VAR) && getFromLocalStorage(localStorageVar.TOKEN_VAR) !== null) {
            if (user) {
                if (user.attributes[apiVrbls.USER.IS_LOGGED_IN_FIRST]) {
                    navigate(appRoutes.SET_PASSWORD)
                } else {
                    navigate(appRoutes.DASHBOARD)
                }
            }
        }
    }, [user, navigate, isAuthenticated, dispatch])

    const { register, handleSubmit, formState, control, getValues } = useForm<any>({
        mode: "onChange",
        resolver: yupResolver(LoginFormSchema),
    });
    const DoLogin = (d: any) => {
        const userDetails: any = {
            email: d.user,
            password: d.password
        }
        dispatch(login(userDetails, d.user))
    }

    return (
        <>
            <Box
                sx={{ flexGrow: 1 }}
                id="login-form"
                className="account__form login-form">
                <div className="form__inner">
                    <Box sx={{ width: 1 }} className="account__form__header">
                        <h3 className="title">{t<string>('login')}</h3>
                        <span className="box-help-text">{t<string>('enterEmailIdPassword')}</span>
                    </Box>
                    <Box sx={{ width: 1 }} className="account__form__error">
                        <p className="error__msg">
                            {isError ? (<p>{t<string>('yourEmailIdPasswordNotMatch')}</p>) : ('')}
                        </p>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} className="account__form__body">
                        <form onSubmit={handleSubmit((d) => DoLogin(d))} action="#" method="post">
                            <FormGroup>
                                {/* Email id Input */}
                                <PrimaryInput
                                    register={{ ...register('user') }}
                                    label={'enterYourEmailID'}
                                    fieldName={'user'}
                                    formState={formState}
                                    typeName={'email'}
                                    onInput={setVal}
                                />
                                {/* Password Input */}
                                <PrimaryInput
                                    register={{ ...register('password') }}
                                    label={'password'}
                                    fieldName={'password'}
                                    formState={formState}
                                    typeName={'password'}
                                />
                                <FormControl
                                    className="input-wrapper password-checkHide no-margin fp-margin"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        position: 'relative',
                                        width: 1,
                                        margin: '20px 0px',
                                    }}>
                                    <Link
                                        to={appRoutes.FORGOT_PASSWORD}
                                        id={appRoutes.FORGOT_PASSWORD}
                                        className="forgot-password"
                                        style={{ width: 'max-content', fontFamily: 'ubuntu' }}>
                                        {t<string>('forgotPassword')}
                                    </Link>
                                </FormControl>
                                {/* Login Button */}
                                <FormControl
                                    className="input-wrapper submitBtn"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        position: 'relative',
                                        width: 1,
                                        marginTop: '50px',
                                    }}>
                                    <ColorButton
                                        type="submit"
                                        id="btn-enable-style"
                                        data-testid="button-element"
                                        variant="contained"
                                        className={`customBtn-01 ${(validateEmail(val)) ? 'btn-enable-style' : 'no-pointers'} `}
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
        </>
    )
}
export default Login
