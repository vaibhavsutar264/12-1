import React from 'react'
import {Box, Stack, Typography, TextField} from '@mui/material'
import { useSelector } from '../../../redux/store';

const BillingInvoice = () => {
    const { accountDetails } = useSelector((state: any) => state.account);  
    const { sendInvoiceToContact } = accountDetails
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
                    
                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography component='h3' sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        fontSize: '14px',
                        color: '#344857',
                        fontFamily: 'ubuntu',
                        opacity: 0.7,
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}>name</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{sendInvoiceToContact.name}</Typography>
                    </Stack>
                    
                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography component='h3' sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        fontSize: '14px',
                        color: '#344857',
                        fontFamily: 'ubuntu',
                        opacity: 0.7,
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}>address</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{sendInvoiceToContact.address}</Typography>
                    </Stack>
                    
                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography component='h3' sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        fontSize: '14px',
                        color: '#344857',
                        fontFamily: 'ubuntu',
                        opacity: 0.7,
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}>city</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{sendInvoiceToContact.city}</Typography>
                    </Stack>
                    
                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography component='h3' sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        fontSize: '14px',
                        color: '#344857',
                        fontFamily: 'ubuntu',
                        opacity: 0.7,
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}>country</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{sendInvoiceToContact.country}</Typography>
                    </Stack>
                    
                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography component='h3' sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        fontSize: '14px',
                        color: '#344857',
                        fontFamily: 'ubuntu',
                        opacity: 0.7,
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}>pin</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{sendInvoiceToContact.pin}</Typography>
                    </Stack>
                    
                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography component='h3' sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        fontSize: '14px',
                        color: '#344857',
                        fontFamily: 'ubuntu',
                        opacity: 0.7,
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}>email id</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{sendInvoiceToContact.emailId}</Typography>
                    </Stack>

                    
                    <Stack sx={{
                        flexBasis: '30%',
                    }}>
                        <Typography component='h3' sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        fontSize: '14px',
                        color: '#344857',
                        fontFamily: 'ubuntu',
                        opacity: 0.7,
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}>customer authorized rate notification recepient</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{sendInvoiceToContact.customerAuthorizedRateNotificationRecipient}</Typography>
                    </Stack>
                </Box>
                </Box>
    </>
  )
}

export default BillingInvoice