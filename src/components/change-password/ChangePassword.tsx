import { useEffect, useState } from 'react'
import { BreadCrums } from '../common/elements/BreadCrum'
import { breadCrums, dataTables } from '../../utils/constants'
import {
    useSelector
} from '../../redux/store'
import {
    useDispatch as useAppDispatch,
    useSelector as useAppSelector,
} from '../../redux/store'
import { Email } from '../../types/authType'
import { forgotPassword, resetForgotPaswordPrms } from '../../redux/slices/authSlice'
import { Typography } from '@mui/material'
import {
    Box,
    styled,
    Button,
    ButtonProps,
    FormGroup,
    FormControl,
} from '@mui/material'
import { FormProvider } from '../hook-form'
import { purple } from '@mui/material/colors'
import useLocales from '../../hooks/useLocales'

import { PrimaryInput } from '../common/elements/PrimaryInput'
import { validateEmail } from '../../utils/helpers'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ForgotPasswordSchema } from '../../utils/yupschemas'





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


export const ChangePassword = ({ toggleTheme }: { toggleTheme: any }) => {

    const { dashBoardWidth } = useSelector((state: any) => state.common);

    // form ( from forgot password )

    const { forgotPassEmail } = useAppSelector((state: any) => state.auth)
    const dispatch = useAppDispatch()
    const { t } = useLocales()
    const [val, setVal] = useState('')

    const { register, handleSubmit, formState, getValues } = useForm<any>({
        mode: "onChange",
        resolver: yupResolver(ForgotPasswordSchema),
    });
    const forgotPass = (d: any) => {
        const userEmail: Email = { email: d.user }
        console.log(userEmail);
        dispatch(forgotPassword(userEmail))
    }

    useEffect(() => {
        dispatch(resetForgotPaswordPrms())
    }, [])

    return (
        <div >
            <div className="dashboard__content" style={{
                // width: `${window.innerWidth - +`${dashBoardWidth}`.split('p')[0]}px`,
                marginLeft: `${dashBoardWidth}`, width: `calc(100% - ${dashBoardWidth}.split('p')[0]}px`
            }}>
                <div className="content__header">
                    <BreadCrums data={breadCrums.BILLING} />
                </div>
                <Typography
                    className="helper__title"
                    variant="body1"
                    sx={{
                        fontFamily: 'ubuntu',
                        letterSpacing: 0,
                        opacity: 0.6,
                        mt: '20px',
                    }}
                >
                    {t<string>('changePasswordInstruction')}
                </Typography>

                {/* form starts here */}
                <Box sx={{ flexGrow: 1 }} id="login-form" className="account__form change-password-form">
                    <div className="form__inner">
                        <Box
                            sx={{ flexGrow: 1, paddingTop: '0 !important' }}
                            className="account__form__body"
                        >
                            <FormProvider onSubmit={handleSubmit((d) => forgotPass(d))}>
                                <FormGroup>
                                    {/* Email Input feilds */}
                                    <PrimaryInput
                                        register={{ ...register('user') }}
                                        label={'oldPassword'}
                                        classNameInput={"input-field"}
                                        fieldName={'user'}
                                        formState={formState}
                                        typeName={'password'}
                                        onInput={setVal}
                                        variantForInput={"standard"}
                                        sxForInput={{ width: 1, borderRadius: '10px !important', border: 'none !important' }}
                                        dataTestId='email-element'
                                    />
                                    <PrimaryInput
                                        register={{ ...register('user') }}
                                        label={'newPassword'}
                                        classNameInput={"input-field"}
                                        fieldName={'user'}
                                        formState={formState}
                                        typeName={'password'}
                                        onInput={setVal}
                                        variantForInput={"standard"}
                                        sxForInput={{ width: 1, borderRadius: '10px !important', border: 'none !important' }}
                                        dataTestId='email-element'
                                    />
                                    <PrimaryInput
                                        register={{ ...register('user') }}
                                        label={'confirmNewPassword'}
                                        classNameInput={"input-field"}
                                        fieldName={'user'}
                                        formState={formState}
                                        typeName={'password'}
                                        onInput={setVal}
                                        variantForInput={"standard"}
                                        sxForInput={{ width: 1, borderRadius: '10px !important', border: 'none !important' }}
                                        dataTestId='email-element'
                                    />
                                    {/* submit button */}
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
                                            variant="contained"
                                            className={`customBtn-01 ${(validateEmail(val)) ? 'btn-enable-style' : 'no-pointers'} `}
                                            sx={{
                                                fontSize: '18px',
                                                lineHeight: '21px',
                                                fontFamily: 'ubuntu',
                                                letterSpacing: '-0.72px',
                                            }}
                                        >
                                            DONE
                                        </ColorButton>
                                    </FormControl>
                                </FormGroup>
                            </FormProvider>
                        </Box>
                        <Button href='./'>Forgot Password?</Button>
                    </div>
                </Box>
            </div>
        </div>
    )
}

export default ChangePassword
