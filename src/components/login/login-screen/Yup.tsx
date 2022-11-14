import * as Yup from 'yup'

const schema = Yup.object({
  email: Yup.string().email().required('Enter your email'),
  password: Yup.string().min(5).required('Enter your password'),
  // .matches(
  //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //     "Password must be atleast 8 chracters, One Uppercase, One Lowercase, One Number and one special case Character"
  //   ),
})
export default schema
