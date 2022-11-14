import * as Yup from 'yup'

const schema = Yup.object({
  email: Yup.string().email().required('Enter your email'),
  username: Yup.string().min(6).max(30).required('Enter your username'),
  password: Yup.string()
    .min(8)
    .required('Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password must be atleast 8 chracters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Password must match'
  ),
  number: Yup.string().min(10).max(15).required('Enter your phone number'),
})
export default schema
