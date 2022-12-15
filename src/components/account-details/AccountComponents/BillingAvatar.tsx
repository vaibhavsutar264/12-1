import React from 'react'
import { styled } from '@mui/material/styles'
import {Box, Stack, Badge, Avatar, TextField, Button} from '@mui/material'
import AvatarImg from '../../../assets/images/avatar.png'
import AvatarBg from '../../../assets/images/avatar-bg.png'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import { useSelector } from '../../../redux/store'


const BillingAvatar = () => {
  const { user } = useSelector((state: any) => state.auth);  
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 44,
    height: 44,
    // border: `2px solid ${theme.palette.background.paper}`,
  }));

  return (
    <>
      {/* 1st left row container starts here */}
      <Box sx={{
                bgcolor: '#fff',
                height: 1,
                borderRadius: '20px',
                py: '52px',
                px: '50px',
                // mb: '40px',
                backgroundImage: `url(${AvatarBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                }}>
                {/* 1st row starts here */}
                <Box sx={{
                    mb: '36px',
                }}>
                    <Stack direction='row' justifyContent='center' alignItems='center'>
                    {/* <Avatar alt="Remy Sharp" src={AvatarImg} sx={{
                        width: '156px',
                        height: '156px',
                    }} /> */}
                    <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <SmallAvatar sx={{ bgcolor: '#EDEFF0', color: '#52626F' }} variant="circular">
                            <CameraAltOutlinedIcon />
                        </SmallAvatar>
                    }
                    >
                    <Avatar alt="Travis Howard" src={AvatarImg} sx={{
                        width: '156px',
                        height: '156px',
                    }} />
                    </Badge>
                    </Stack>
                </Box>
            

                {/* 2nd row starts here */}
                    <Box
                    component="form"
                    className='billing-details-input'
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        display: 'flex',
                        flexWrap: 'wrap',
                        rowGap: '48px',
                        justifyContent: 'space-between',
                        marginBottom: '40px',
                    }} noValidate autoComplete="off"
                    >
                    <TextField label="first name" value={`${user.firstname}`} variant="standard" type="text" sx={{
                        // border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '45%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="last name" variant="standard" type="text" value={`${user.lastName}`} sx={{
                        // border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '45%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="mobile no" variant="standard" type="text" value={`${user.attributes.phoneNumber}`} sx={{
                        // border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '45%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="communication" variant="standard" type="text" value='Phone' sx={{
                        // border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '45%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="timezone" variant="standard" type="text" value={`${user.attributes.timezone}`} sx={{
                        // border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '100%',
                        textTransform: 'capitalize',
                    }}/>
                </Box>
                <Button color='error' variant='outlined' sx={{
                    textTransform: 'uppercase',
                    borderRadius: '100px',
                    width: 1,
                    px: 6,
                    py: 2,
                    fontSize: '12px',
                    lineHeight: '13px',
                    fontWeight: 700,
                    fontFamily: 'ubuntu',
                }}>edit personal details</Button>
                </Box>
    </>
  )
}

export default BillingAvatar