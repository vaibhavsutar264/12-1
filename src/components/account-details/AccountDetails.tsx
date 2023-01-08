import React, { useEffect } from 'react'
import { Box, Grid } from '@mui/material'

import AccountAvatar from './account-components/AccountAvatar'
import AccountContact from './account-components/AccountContact'
import AccountDetail from './account-components/AccountDetail'
import AccountInvoice from './account-components/AccountInvoice'
import { useDispatch, useSelector } from '../../redux/store'
import { getAcDetails } from '../../redux/slices/accountSlice'

const AccountDetails = ({ toggleTheme }: { toggleTheme: any }) => {
    const dispatch = useDispatch()
    const { dashBoardWidth } = useSelector((state: any) => state.common);
    // const [aDWidth, setADWidth] = useState('180px')
    // const handleADWidth = () => {
    //   const currentWidth = aDWidth == '300px' ? '180px' : '300px'
    //   setADWidth(currentWidth)
    // }



    useEffect(() => {
        dispatch(getAcDetails())
    }, [dispatch])

    const [LegalEntity, setLegalEntity] = React.useState('')
    const [sendInvoice, setsendInvoice] = React.useState(null)

    return (
        <>
            <Box
                className="bd-container"
                style={{ width: `${window.innerWidth - +`${dashBoardWidth}`.split('p')[0]}px`, marginLeft: `${dashBoardWidth}` }}
            >
                <Grid
                    className="bd-inner-container"
                    container
                    columns={{ sm: 8, md: 12 }}
                >
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
                            <AccountAvatar />
                        </Grid>

                        <Grid item xs={8}>
                            <AccountDetail LegalEntity={LegalEntity} setLegalEntity={setLegalEntity} setsendInvoice={setsendInvoice} />
                        </Grid>
                    </Grid>

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
                            <AccountContact />
                        </Grid>

                        <Grid item xs={8}>
                            <AccountInvoice sendInvoice={sendInvoice} />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default AccountDetails
