import React, {useState} from 'react'
import {Box, Grid} from '@mui/material'

import BillingAvatar from './AccountComponents/BillingAvatar'
import BillingContact from './AccountComponents/BillingContact'
import BillingDetail from './AccountComponents/BillingDetail'
import BillingInvoice from './AccountComponents/BillingInvoice'
import {SideBar}  from '../common/elements/SideBar'


const AccountDetails = ({ toggleTheme }: { toggleTheme: any }) => {

  const [aDWidth, setADWidth] = useState('300px');
  const handleADWidth = () => {
    const currentWidth = aDWidth == '300px'? '130px' : '300px';
    setADWidth(currentWidth);
  };

  return (
    <>
      <SideBar toggleTheme={toggleTheme} handleADWidth={handleADWidth} />
    <Box className="bd-container" style={{ width: `calc(100% - ${aDWidth})`, marginLeft: `${aDWidth}` }}>
        <Grid className="bd-inner-container" container columns={{sm:8, md: 12}}>

            <Grid className="bd-single-container"  item container columnSpacing={5} columns={12} sm={12} md={12}>

                <Grid item xs={4}>
                <BillingAvatar />
                </Grid>

                <Grid item xs={8}>
                <BillingDetail />
                </Grid>

            </Grid>

            <Grid className="bd-single-container" item container columnSpacing={5} columns={12} sm={12} md={12}>

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

export default AccountDetails;