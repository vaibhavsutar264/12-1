import React from 'react'
import {Box, Grid} from '@mui/material'

import BillingAvatar from './BillingComponents/BillingAvatar'
import BillingContact from './BillingComponents/BillingContact'
import BillingDetail from './BillingComponents/BillingDetail'
import BillingInvoice from './BillingComponents/BillingInvoice'
import { SideBar } from '../common/elements/SideBar'


const BillingDetails = ({ toggleTheme }: { toggleTheme: any }) => {
  return (
    <>
      <SideBar toggleTheme={toggleTheme} />
    <Box sx={{
        mt: 20,
        display: 'flex',
        justifyContent: 'flex-end',
        bgcolor: '#d2e1ff',
    }}>
        <Grid container columns={{sm:8, md: 12}} rowSpacing={5} sx={{
            width: 'calc(100% - 166px)',
            px: '40px',
            py: '50px',
        }}>

            <Grid item container columnSpacing={5} columns={12} sm={12} md={12} minHeight='400px' sx={{
                paddingTop: '40px',
            }}>

                <Grid item xs={4}>
                <BillingAvatar />
                </Grid>

                <Grid item xs={8}>
                <BillingDetail />
                </Grid>

            </Grid>

            <Grid item container columnSpacing={5} columns={12} sm={12} md={12} minHeight='400px' sx={{
                paddingTop: '40px',
            }}>

                <Grid item xs={4}>
                <BillingContact />
                </Grid>

                <Grid item xs={8}>
                <BillingInvoice />
                </Grid>

            </Grid>

        </Grid>
    </Box>
    </>
  )
}

export default BillingDetails;