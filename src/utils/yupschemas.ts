import * as Yup from 'yup'
import { validateEmail } from './helpers'

export const LoginFormSchema = Yup.object().shape({
    user: Yup.string().test('emailTest', 'Please enter a valid email', validateEmail),
    password: Yup.string().required("Please enter password")
})
export const AccountDetailsSchema = Yup.object().shape({
    firstname: Yup.string().required("Please enter firstname"),
    lastName: Yup.string().required("Please enter lastname"),
    phoneNumber: Yup.string().required("Please enter phoneNumber"),
    communication: Yup.string().required("Please enter communication"),
    timezone: Yup.string().required("Please enter timezone"),
})


export const ForgotPasswordSchema = Yup.object().shape({
    user: Yup.string().test('emailTest', 'Please enter a valid email', validateEmail),
})

export const setPasswordSchema = Yup.object().shape({
    newPass: Yup.string().required("Please enter password")
        .matches(/[A-Z]/, "Password must contain atleast one uppercase")
        .matches(/[a-z]/, "Password must contain atleast one lowercase")
        .matches(/[@#&]/, "Password must contain special character @,#,&")
        .min(8, "password must be at least 8 characters"),
    cnfPassword: Yup.string().required("Confirm password is required")
})