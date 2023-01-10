import React, { useEffect } from 'react'
import { Box, Grid } from '@mui/material'

import AccountAvatar from './account-components/AccountAvatar'
import AccountContact from './account-components/AccountContact'
import AccountDetail from './account-components/AccountDetail'
import AccountInvoice from './account-components/AccountInvoice'

import AccountLeftSection from './account-components/AccountLeftSection'
import AccountRightSection from './account-components/AccountRightSection'


import { useDispatch, useSelector } from '../../redux/store'
import { getAcDetails } from '../../redux/slices/accountSlice'
import { BreadCrums } from '../common/elements/BreadCrum'
import { PageSearch } from '../common/elements/PageSearch'
import { breadCrums, dataTables } from '../../utils/constants'


const AccountDetails = ({ toggleTheme }: { toggleTheme: any }) => {
    const dispatch = useDispatch()
    const { dashBoardWidth } = useSelector((state: any) => state.common);
    useEffect(() => {
        dispatch(getAcDetails())
    }, [dispatch])

    // const [LegalEntity, setLegalEntity] = React.useState('')
    // const [sendInvoice, setsendInvoice] = React.useState(null)

    return (
        <>
            <Box
                className="bd-container dashboard__content"
                style={{ width: `${window.innerWidth - +`${dashBoardWidth}`.split('p')[0]}px`, marginLeft: `${dashBoardWidth}`, flexDirection: 'column' }}
            >

                <div className="content__header">
                    <BreadCrums data={breadCrums.ACCOUNT_DETAILS} />
                </div>

                <Grid
                    className="bd-inner-container"
                    container
                    columns={{ sm: 8, md: 12 }}
                >

                    {/* Upper grid */}
                    <Grid
                        className="bd-single-container"
                        item
                        container
                        columnSpacing={5}
                        columns={12}
                        sm={12}
                        md={12}
                    >
                        <Grid item xs={4}>
                            {/* <AccountAvatar /> */}
                            <AccountLeftSection />
                        </Grid>

                        <Grid item xs={8}>
                            {/* <AccountDetail LegalEntity={LegalEntity} setLegalEntity={setLegalEntity} setsendInvoice={setsendInvoice} /> */}
                            <AccountRightSection />
                        </Grid>
                    </Grid>

                    {/* Bottom grid */}
                    {/* <Grid
                        className="bd-single-container"
                        item
                        container
                        columnSpacing={5}
                        columns={12}
                        sm={12}
                        md={12}
                    >
                        <Grid item xs={4}>
                            <AccountContact />
                        </Grid>

                        <Grid item xs={8}>
                            <AccountInvoice sendInvoice={sendInvoice} />
                        </Grid>
                    </Grid> */}


                </Grid>
            </Box>
        </>
    )
}

export default AccountDetails
