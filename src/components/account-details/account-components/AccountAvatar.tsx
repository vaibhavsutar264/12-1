import { SyntheticEvent, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Box, Stack, Badge, Avatar, TextField, Button } from '@mui/material'
import AvatarBg from '../../../assets/images/avatar-bg.png'
import { useSelector, useDispatch } from '../../../redux/store'
import { updateUserDetails } from '../../../redux/slices/accountSlice'
import { getuserInfo } from '../../../redux/slices/authSlice'
import useLocales from '../../../hooks/useLocales'
import { FormProvider, RHFTextField } from '../../hook-form'
import { useForm } from 'react-hook-form'
import { LoginFormSchema } from '../../../utils/yupschemas'
import { yupResolver } from '@hookform/resolvers/yup'

const AccountAvatar = () => {
  const { t } = useLocales()
  const dispatch = useDispatch()
  const { user, userEmail } = useSelector((state: any) => state.auth || {})
  const SmallAvatar = styled(Avatar)(({ theme }: any) => ({ width: 44, height: 44 }))
  const [firstname, setFirstname] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [timezone, setTimezone] = useState('')
  const [communication, setCommunication] = useState('')
  const [editable, setEditable] = useState<boolean>(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    dispatch(getuserInfo(user.emailId));
  }, [])
  useEffect(() => {
    if (user) {
      setFirstname(user.firstname)
      setLastName(user.lastName)
      setPhoneNumber(user.attributes.phoneNumber)
      setTimezone(user.attributes.timezone)
      setCommunication(user.attributes.preferredCommunicationMode)
    }
  }, [user])


  const editUserDetails = (d: any) => {
    // e.preventDefault()
    const body: any = {
      firstname: firstname,
      lastName: lastName,
      phoneNumber: phoneNumber,
      timezone: timezone,
      communication: communication
    }
    dispatch(updateUserDetails(body))
    setEditable(false)
    // dispatch(getuserInfo(user.emailId));
  }

  const { register, handleSubmit, formState, control, getValues } = useForm<any>({
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
});

  const resetDetails = () => {
    setEditable(!false)
    setOpen(!false)
  }

  return (
    <>
      <Box
        className="bd-single-content"
        sx={{
          bgcolor: '#fff',
          height: 1,
          borderRadius: '20px',
          py: '52px',
          px: '50px',
          backgroundImage: `url(${AvatarBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        <Box
          sx={{
            mb: '36px',
          }}
        >
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                alt="Profile picture"
                className='avatar-initials'
                sx={{
                  width: '156px',
                  height: '156px',
                }}
              >
                {(firstname.charAt(0) + lastName.charAt(0)) || null}
              </Avatar>
            </Badge>
          </Stack>
        </Box>

        <FormProvider onSubmit={handleSubmit((d: any) => editUserDetails(d))}>
          <Box
            component="form"
            className="billing-details-input"
            sx={{
              '& > :not(style)': { m: 0, width: '25ch', flexGrow: 1 },
              display: 'flex',
              flexWrap: 'wrap',
              rowGap: '20px',
              columnGap: '20px',
              justifyContent: 'space-between',
              marginBottom: '40px',
              '& label': {
                top: editable ? '14px' : 0,
                fontSize: '18px',
                letterSpacing: '-0.28px',
              },
              '& label:not(.MuiFormLabel-filled, .MuiInputLabel-shrink)': {
                top: '-3px',
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              className={editable ? '' : 'removeBorder'}
              label={t<string>('firstName')}
              { ...register('firstName') }
              value={firstname}
              onChange={(e) => {setFirstname(e.target.value);setOpen(false) }}
              variant={editable ? 'outlined' : 'standard'}
              type="text"
              sx={{
                borderRadius: '10px !important',
                flexBasis: '45%',
                minWidth: '110px',
                textTransform: 'capitalize',
              }}
            />
            <TextField
              className={editable ? '' : 'removeBorder'}
              label={t<string>('lastName')}
              { ...register('lastName') }
              variant={editable ? 'outlined' : 'standard'}
              type="text"
              value={lastName}
              onChange={(e) => {setLastName(e.target.value);setOpen(false) }}
              sx={{
                borderRadius: '10px !important',
                flexBasis: '45%',
                minWidth: '110px',
                textTransform: 'capitalize',
              }}
            />
            <TextField
              className={editable ? '' : 'removeBorder'}
              label={t<string>('mobileNo')}
              { ...register('phoneNumber') }
              variant={editable ? 'outlined' : 'standard'}
              type="text"
              value={phoneNumber}
              onChange={(e) => {setPhoneNumber(e.target.value);setOpen(false) }}
              sx={{
                borderRadius: '10px !important',
                flexBasis: '45%',
                minWidth: '110px',
                textTransform: 'capitalize',
              }}
            />
            <TextField
              className={editable ? '' : 'removeBorder'}
              label={t<string>('communication')}
              { ...register('communication') }
              variant={editable ? 'outlined' : 'standard'}
              type="text"
              value={communication}
              onChange={(e) => {setCommunication(e.target.value);setOpen(false) }}
              sx={{
                borderRadius: '10px !important',
                flexBasis: '45%',
                minWidth: '110px',
                textTransform: 'capitalize',
              }}
            />
            <TextField
              className={editable ? '' : 'removeBorder'}
              label={t<string>('timezone')}
              { ...register('timezone') }
              variant={editable ? 'outlined' : 'standard'}
              type="text"
              value={timezone}
              onChange={(e) => {setTimezone(e.target.value);setOpen(false) }}
              sx={{
                borderRadius: '10px !important',
                flexBasis: '100%',
                textTransform: 'capitalize',
              }}
            />
          </Box>
          <Button
            color="error"
            variant="outlined"
            type="button"
            id='button-edit'
            disabled={open}
            onClick={editable ? editUserDetails : resetDetails}
            sx={{
              textTransform: 'uppercase',
              borderRadius: '100px',
              width: 1,
              px: 6,
              py: 2,
              fontSize: '12px',
              lineHeight: '13px',
              fontWeight: 700,
              fontFamily: 'ubuntu',
              '&:hover': {
                backgroundColor: '#D63548',
                color: '#fff',
              },
            }}
          >
            {editable ? t<string>('save') : t<string>('editPersonalDetails')}
          </Button>
        </FormProvider>
      </Box>
    </>
  )
}

export default AccountAvatar