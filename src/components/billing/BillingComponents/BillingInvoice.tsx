import React from 'react'
import {Box, Stack, Typography, TextField} from '@mui/material'

const BillingInvoice = () => {
  return (
    <>
      {/* 2nd row container starts */}
<Box sx={{
    bgcolor: '#fff',
    height: 1,
    borderRadius: '20px',
    pt: '40px',
    pb: '133px',
    px: '50px',
}}>
{/* 3rd row starts here */}
<Box sx={{
                    mb: 6,
                }}>
                    <Stack direction='row' justifyContent='space-between'>
            <Typography variant='h5' component='h1' sx={{
                    maxWidth: 'unset',
                    textAlign: 'left',
                    padding: 0,
                    fontSize: '24px',
                    lineHeight: '22px',
                    color: '#303030',
                    fontWeight: 700,
                    fontFamily: 'ubuntu',
                }}>Send Invoice to (Contact)</Typography>
                    </Stack>
                </Box>




                {/* 4th row starts here */}
                <Box
                    component="form"
                    className='billing-details-input'
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        rowGap: '48px',
                        // marginBottom: '40px',
                        // paddingBottom: '133px',
                    }} noValidate autoComplete="off"
                    >
                    <TextField label="name" variant="standard" type="text" value="L&T Technology" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="address" variant="standard" type="text" value="LE1" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="city" variant="standard" type="text" value="Postpay" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="country" variant="standard" type="text" value="Monthly" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="pin" variant="standard" type="text" value="Net 30 days of the Invoice Date" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="email id" variant="standard" type="text" value="BCL87630GTY" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="customer authorized rate notification recepient" variant="standard" type="text" value="AIDPG2390S" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}/>
                </Box>
                </Box>
    </>
  )
}

export default BillingInvoice



{/* <Grid item sm={3} md={4} minHeight='400px' sx={{
                paddingTop: '40px',
            }}>
                <BillingAvatar />

                <BillingContact />
            </Grid>

            <Grid item sm={5} md={8} minHeight='400px' sx={{
                paddingTop: '40px',
            }}>
            <BillingDetail />

            <BillingInvoice />
            </Grid> */}