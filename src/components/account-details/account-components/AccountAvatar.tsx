import { SyntheticEvent, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import {
    Box, Stack, Badge, Avatar, TextField, Button, FormControl, Select, MenuItem
} from '@mui/material'
import AvatarBg from '../../../assets/images/avatar-bg.png'
import { useSelector, useDispatch } from '../../../redux/store'
import { updateUserDetails } from '../../../redux/slices/accountSlice'
import { getuserInfo } from '../../../redux/slices/authSlice'
import useLocales from '../../../hooks/useLocales'



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
        if (user) {
            setFirstname(user.firstname)
            setLastName(user.lastName)
            setPhoneNumber(user.attributes.phoneNumber)
            setTimezone(user.attributes.timezone)
            setCommunication(user.attributes.preferredCommunicationMode)
        }
    }, [dispatch])


    const editUserDetails = async (e: SyntheticEvent) => {
        e.preventDefault()
        const body = {
            firstname: firstname,
            lastName: lastName,
            phoneNumber: phoneNumber,
            timezone: timezone,
            communication: communication
        }
        dispatch(updateUserDetails(body))
        dispatch(getuserInfo(user.emailId));
        setEditable(false)
    }

    const abcd = () => {
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
                                alt="Travis Howard"
                                className='avatar-initials'
                                sx={{
                                    width: '156px',
                                    height: '156px',
                                }}
                            >
                                {firstname.charAt(0) + lastName.charAt(0)}
                            </Avatar>
                        </Badge>
                    </Stack>
                </Box>

                <form>
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
                            value={firstname}
                            onChange={(e) => { setFirstname(e.target.value); setOpen(false) }}
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
                            variant={editable ? 'outlined' : 'standard'}
                            type="text"
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value); setOpen(false) }}
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
                            variant={editable ? 'outlined' : 'standard'}
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => { setPhoneNumber(e.target.value); setOpen(false) }}
                            sx={{
                                borderRadius: '10px !important',
                                flexBasis: '45%',
                                minWidth: '110px',
                                textTransform: 'capitalize',
                            }}
                        />
                        {/* <TextField
                            className={editable ? '' : 'removeBorder'}
                            label={t<string>('communication')}
                            variant={editable ? 'outlined' : 'standard'}
                            type="text"
                            value={communication}
                            onChange={(e) => { setCommunication(e.target.value); setOpen(false) }}
                            sx={{
                                borderRadius: '10px !important',
                                flexBasis: '45%',
                                minWidth: '110px',
                                textTransform: 'capitalize',
                            }}
                        /> */}
                        {/* <TextField
                            className={editable ? '' : 'removeBorder'}
                            label={t<string>('timezone')}
                            variant={editable ? 'outlined' : 'standard'}
                            type="text"
                            value={timezone}
                            onChange={(e) => { setTimezone(e.target.value); setOpen(false) }}
                            sx={{
                                borderRadius: '10px !important',
                                flexBasis: '100%',
                                textTransform: 'capitalize',
                            }}
                        /> */}
                        <Box
                            id="select-entity-form"
                            sx={{
                                flexBasis: '45%',
                                minWidth: '110px',
                                '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                {
                                    top: '1px',
                                    height: 'min-content',
                                    backgroundColor: '#fff !important',
                                },
                                '& [role="button"]': {
                                    color: '#222',
                                    textTransform: 'capitalize',
                                    fontWeight: 400,
                                },
                                '& label': {
                                    top: '-9px',
                                    // top: LegalEntity.length > 1 ? '1px' : '-11px',
                                    height: 'min-content',
                                    backgroundColor: '#fff !important',
                                },
                            }}
                        >
                            <FormControl fullWidth>
                                <Select
                                    MenuProps={{
                                        disableScrollLock: true,
                                    }}
                                    id="demo-simple-select"
                                    value='phone'
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value='phone'>Phone
                                    </MenuItem>
                                    <MenuItem value='email'>Email
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        {/* Timezone dropdown */}
                        <Box
                            id="select-entity-form"
                            sx={{
                                minWidth: 200,
                                '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                {
                                    top: '1px',
                                    height: 'min-content',
                                    backgroundColor: '#fff !important',
                                },
                                '& [role="button"]': {
                                    color: '#222',
                                    textTransform: 'capitalize',
                                    fontWeight: 400,
                                },
                                '& label': {
                                    top: '-9px',
                                    // top: LegalEntity.length > 1 ? '1px' : '-11px',
                                    height: 'min-content',
                                    backgroundColor: '#fff !important',
                                },
                            }}
                        >
                            <FormControl fullWidth>
                                <Select
                                    MenuProps={{
                                        disableScrollLock: true,
                                    }}
                                    id="demo-simple-select"
                                    value='utc+5:30'
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value='utc0:00'>UTC 0:00
                                    </MenuItem>
                                    <MenuItem value='utc+1:30'>UTC +1:30
                                    </MenuItem>
                                    <MenuItem value='utc+5:30'>UTC +5:30
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                    </Box>
                    <Button
                        color="error"
                        variant="outlined"
                        type="button"
                        id='button-edit'
                        disabled={open}
                        onClick={editable ? editUserDetails : abcd}
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
                </form>
            </Box>
        </>
    )
}

export default AccountAvatar
