import React, { useEffect } from 'react'
import {Box, Stack, Typography, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material'
import { dispatch, useSelector } from '../../../redux/store'
import {getAcDetails} from '../../../redux/slices/accountSlice'


const BillingDetail = () => {
    const { accountDetails } = useSelector((state: any) => state.account);  
    const { le1 } = accountDetails
    const { billingDetails } = le1

    useEffect(() => {
        dispatch(getAcDetails())
    }, [])
  return (
    <>
      {/* 1st right row container starts here */}
      <Box sx={{
                bgcolor: '#fff',
                height: 1,
                borderRadius: '20px',
                pt: '40px',
                pb: '133px',
                px: '50px',
                }}>

                {/* 1st row starts here */}
                <Box sx={{
                    mb: 6,
                }}>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant='h5' component='h1' sx={{
                    maxWidth: 'unset',
                    textAlign: 'left',
                    padding: 0,
                    fontSize: '24px',
                    lineHeight: '22px',
                    color: '#303030',
                    fontWeight: 700,
                    fontFamily: 'ubuntu',
                }}>Billing Details</Typography>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        '& label': {
                            maxWidth: 'unset',
                        }
                    }} noValidate autoComplete="off"
                    >
                        <FormControl variant='standard' fullWidth 
                        sx={{
                            flexBasis: '40%',
                        }}>
                    <InputLabel id="demo-simple-select-label" sx={{ textTransform: 'capitalize', }}>select legal entity</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                    >
                        <MenuItem value='legal entity name1'>Legal Entity Name1</MenuItem>
                        <MenuItem value='legal entity name2'>Legal Entity Name2</MenuItem>
                        <MenuItem value='legal entity name3'>Legal Entity Name3</MenuItem>
                    </Select>
                    </FormControl>
                    </Box>
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
                        textTransform: 'capitalize',
                    }}>account name</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.accountName}</Typography>
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
                    }}>legal entity</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.legalEntity}</Typography>
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
                    }}>billing type</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.billingtype}</Typography>
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
                    }}>billing cycle</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.billingCycle}</Typography>
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
                    }}>payment period</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.paymentPeriod}</Typography>
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
                    }}>VAT/GST No./Tax ID</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.vatOrGSTNoOrTxId}</Typography>
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
                    }}>Company Pan or Equivalent No.</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.companyPAN}</Typography>
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
                    }}>applicable currency</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.applicableCurrency}</Typography>
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
                    }}>contact term</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.contractTerm}</Typography>
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
                    }}>rate change notification period(in days)</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.rateChangeNotificationPeriod}</Typography>
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
                    }}>rate & coverage change time zone</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.rateCoverageChangeTimeZone}</Typography>
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
                    }}>account status & remark</Typography>
                        <Typography component='span' sx={{
                            color: '#344857',
                            fontWeight: 700,
                            fontSize: '16px',
                            fontFamily: "ubuntu",
                            lineHeight: '18px',
                        }}>{billingDetails.accountStatus}</Typography>
                    </Stack>
                </Box>
                </Box>
    </>
  )
}

export default BillingDetail