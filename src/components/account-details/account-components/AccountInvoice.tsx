import { Box, Stack, Typography, TextField } from '@mui/material'
import { useSelector } from '../../../redux/store'
import useLocales from '../../../hooks/useLocales'


const AccountInvoice = ({ sendInvoice }: any) => {
    const { accountDetails } = useSelector((state: any) => state.account || {})
    const { t } = useLocales()

    return (
        <>
            {/* 2nd row container starts */}
            {/* {sendInvoice != null && */}
            <Box
                className="bd-single-content"
                sx={{
                    bgcolor: '#fff',
                    height: 1,
                    borderRadius: '20px',
                    pt: '40px',
                    pb: '133px',
                    px: '50px',
                }}
            >
                {/* 3rd row starts here */}
                <Box
                    sx={{
                        mb: 6,
                    }}
                >
                    <Stack direction="row" justifyContent="space-between">
                        <Typography
                            variant="h5"
                            component="h1"
                            sx={{
                                maxWidth: 'unset',
                                textAlign: 'left',
                                padding: 0,
                                fontSize: '24px',
                                lineHeight: '22px',
                                color: '#303030',
                                fontWeight: 700,
                                fontFamily: 'ubuntu',
                            }}
                        >
                            {t<string>('sendInvoiceTo')}
                        </Typography>
                    </Stack>
                </Box>

                {/* 4th row starts here */}
                <Box
                    component="form"
                    className="billing-details-input"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        rowGap: '48px',
                        // marginBottom: '40px',
                        // paddingBottom: '133px',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Stack
                        sx={{
                            flexBasis: '30%',
                            minWidth: '190px',
                        }}
                    >
                        <Typography
                            className="prefilled-title"
                            component="h3"
                            sx={{
                                border: '1px solid #eee',
                                borderRadius: '10px !important',
                                fontSize: '14px',
                                color: '#344857',
                                fontFamily: 'ubuntu',
                                opacity: 0.7,
                                flexBasis: '30%',
                                textTransform: 'capitalize',
                            }}
                        >
                            {t<string>('name')}
                        </Typography>
                        <Typography
                            className="prefilled-content"
                            id="name"
                            component="span"
                            sx={{
                                color: '#344857',
                                fontWeight: 700,
                                fontSize: '16px',
                                fontFamily: 'ubuntu',
                                lineHeight: '18px',
                            }}
                        >
                            {sendInvoice.name}
                        </Typography>
                    </Stack>

                    <Stack
                        sx={{
                            flexBasis: '30%',
                            minWidth: '190px',
                        }}
                    >
                        <Typography
                            className="prefilled-title"
                            component="h3"
                            sx={{
                                border: '1px solid #eee',
                                borderRadius: '10px !important',
                                fontSize: '14px',
                                color: '#344857',
                                fontFamily: 'ubuntu',
                                opacity: 0.7,
                                flexBasis: '30%',
                                textTransform: 'capitalize',
                            }}
                        >
                            {t<string>('address')}
                        </Typography>
                        <Typography
                            className="prefilled-content"
                            id="address"
                            component="span"
                            sx={{
                                color: '#344857',
                                fontWeight: 700,
                                fontSize: '16px',
                                fontFamily: 'ubuntu',
                                lineHeight: '18px',
                            }}
                        >
                            {sendInvoice.address}
                        </Typography>
                    </Stack>

                    <Stack
                        sx={{
                            flexBasis: '30%',
                            minWidth: '190px',
                        }}
                    >
                        <Typography
                            className="prefilled-title"
                            component="h3"
                            sx={{
                                border: '1px solid #eee',
                                borderRadius: '10px !important',
                                fontSize: '14px',
                                color: '#344857',
                                fontFamily: 'ubuntu',
                                opacity: 0.7,
                                flexBasis: '30%',
                                textTransform: 'capitalize',
                            }}
                        >
                            {t<string>('city')}
                        </Typography>
                        <Typography
                            className="prefilled-content"
                            id="city"
                            component="span"
                            sx={{
                                color: '#344857',
                                fontWeight: 700,
                                fontSize: '16px',
                                fontFamily: 'ubuntu',
                                lineHeight: '18px',
                            }}
                        >
                            {sendInvoice.city}
                        </Typography>
                    </Stack>

                    <Stack
                        sx={{
                            flexBasis: '30%',
                            minWidth: '190px',
                        }}
                    >
                        <Typography
                            className="prefilled-title"
                            component="h3"
                            sx={{
                                border: '1px solid #eee',
                                borderRadius: '10px !important',
                                fontSize: '14px',
                                color: '#344857',
                                fontFamily: 'ubuntu',
                                opacity: 0.7,
                                flexBasis: '30%',
                                textTransform: 'capitalize',
                            }}
                        >
                            {t<string>('country')}
                        </Typography>
                        <Typography
                            className="prefilled-content"
                            id="country"
                            component="span"
                            sx={{
                                color: '#344857',
                                fontWeight: 700,
                                fontSize: '16px',
                                fontFamily: 'ubuntu',
                                lineHeight: '18px',
                            }}
                        >
                            {sendInvoice.country}
                        </Typography>
                    </Stack>

                    <Stack
                        sx={{
                            flexBasis: '30%',
                            minWidth: '190px',
                        }}
                    >
                        <Typography
                            className="prefilled-title"
                            component="h3"
                            sx={{
                                border: '1px solid #eee',
                                borderRadius: '10px !important',
                                fontSize: '14px',
                                color: '#344857',
                                fontFamily: 'ubuntu',
                                opacity: 0.7,
                                flexBasis: '30%',
                                textTransform: 'capitalize',
                            }}
                        >
                            {t<string>('pin')}
                        </Typography>
                        <Typography
                            className="prefilled-content"
                            id="pin"
                            component="span"
                            sx={{
                                color: '#344857',
                                fontWeight: 700,
                                fontSize: '16px',
                                fontFamily: 'ubuntu',
                                lineHeight: '18px',
                            }}
                        >
                            {sendInvoice.pin}
                        </Typography>
                    </Stack>

                    <Stack
                        sx={{
                            flexBasis: '30%',
                            minWidth: '190px',
                        }}
                    >
                        <Typography
                            className="prefilled-title"
                            component="h3"
                            sx={{
                                border: '1px solid #eee',
                                borderRadius: '10px !important',
                                fontSize: '14px',
                                color: '#344857',
                                fontFamily: 'ubuntu',
                                opacity: 0.7,
                                flexBasis: '30%',
                                textTransform: 'capitalize',
                            }}
                        >
                            {t<string>('emailId')}
                        </Typography>
                        <Typography
                            className="prefilled-content"
                            id="email-Id"
                            component="span"
                            sx={{
                                color: '#344857',
                                fontWeight: 700,
                                fontSize: '16px',
                                fontFamily: 'ubuntu',
                                lineHeight: '18px',
                            }}
                        >
                            {sendInvoice.emailId}
                        </Typography>
                    </Stack>

                    <Stack
                        sx={{
                            flexBasis: '30%',
                            minWidth: '190px',
                        }}
                    >
                        <Typography
                            className="prefilled-title"
                            component="h3"
                            sx={{
                                border: '1px solid #eee',
                                borderRadius: '10px !important',
                                fontSize: '14px',
                                color: '#344857',
                                fontFamily: 'ubuntu',
                                opacity: 0.7,
                                flexBasis: '30%',
                                textTransform: 'capitalize',
                            }}
                        >
                            {t<string>('carnr')}
                        </Typography>
                        <Typography
                            className="prefilled-content"
                            id="rate-notification"
                            component="span"
                            sx={{
                                color: '#344857',
                                fontWeight: 700,
                                fontSize: '16px',
                                fontFamily: 'ubuntu',
                                lineHeight: '18px',
                            }}
                        >
                            {sendInvoice.customerAuthorizedRateNotificationRecipient}
                        </Typography>
                    </Stack>
                </Box>
            </Box>
            {/* } */}
        </>
    )
}

export default AccountInvoice
