import React from 'react'
import {Box, Stack, Typography, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material'

const BillingDetail = () => {
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
                    <TextField label="account name" variant="standard" type="text" value="L&T Technology" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="legal entity" variant="standard" type="text" value="LE1" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="billing type" variant="standard" type="text" value="Postpay" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="billing cycle" variant="standard" type="text" value="Monthly" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="payment period" variant="standard" type="text" value="Net 30 days of the Invoice Date" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="VAT/GST No./Tax ID" variant="standard" type="text" value="BCL87630GTY" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="Company Pan or Eqvivalent No." variant="standard" type="text" value="AIDPG2390S" sx={{
                        // border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                    }}/>
                    <TextField label="applicable currency" variant="standard" type="text" value="INR" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="contact term" variant="standard" type="text" value="3 Months" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="rate change notification period(in days)" variant="standard" type="text" value="7 Days" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="rate & coverage change time zone" variant="standard" type="text" value="GMT" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '30%',
                        textTransform: 'capitalize',
                    }}/>
                    <TextField label="account status & remark" variant="standard" type="text" value="Suspended due to non payment" sx={{
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

export default BillingDetail