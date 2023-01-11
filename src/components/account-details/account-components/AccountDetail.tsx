/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react'
import {
    Box,
    Stack,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material'
import { useDispatch, useSelector } from '../../../redux/store'
import useLocales from '../../../hooks/useLocales'


const AccountDetail = ({
    LegalEntity,
    setLegalEntity,
    setsendInvoice,
}: any) => {
    const { t } = useLocales()
    const [leEntity, setLeEntity] = useState<any>(null)
    const { accountDetails } = useSelector((state: any) => state.account)

    useEffect(() => {
        try {
            setLeEntity(accountDetails.legalentities[0])
            setsendInvoice(accountDetails.legalentities[0].sendInvoiceToContact)
            setLegalEntity(0)
        } catch { }
    }, [accountDetails.legalentities, setsendInvoice, setLegalEntity])

    const handleChange = (event: any) => {
        try {
            setLeEntity(accountDetails.legalentities[+event.target.value])
            setsendInvoice(accountDetails.legalentities[+event.target.value].sendInvoiceToContact)
            setLegalEntity(event.target.value)
        } catch (e) {
            console.log(e);
        }

    }

    return (
        <>
            {/* 1st right row container starts here */}
            <Box
                className="bd-single-content"
                sx={{
                    bgcolor: '#fff',
                    height: 1,
                    borderRadius: '20px',
                    borderBottomLeftRadius: '0',
                    borderBottomRightRadius: '0',
                    // pt: '40px',
                    pb: '133px',
                    // px: '50px',
                }}
            >
                {/* 1st row starts here */}
                <Box
                    sx={{
                        mb: 6,
                        px: '50px',
                        py: '28px',
                        bgcolor: 'rgba(85, 47, 114, 0.06)',
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
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
                            {t<string>('billingDetails')}
                        </Typography>
                        {accountDetails.legalentities &&
                            <Box
                            id="select-entity-form"
                            className='legal-entity'
                            sx={{
                                minWidth: 200,
                                '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                {
                                    top: '1px',
                                    height: 'min-content',
                                    backgroundColor: '#fff !important',
                                },
                                '& [role="button"]': {
                                    color: '#222',
                                    textTransform: 'capitalize',
                                    fontWeight: 400,
                                },
                                '& label': {
                                    top: '12px',
                                    // top: LegalEntity.length > 1 ? '1px' : '-11px',
                                    height: 'min-content',
                                    backgroundColor: '#fff !important',
                                },
                                '& legend': {
                                    display: 'none',
                                }
                            }}
                        >

                            {accountDetails.legalentities.length > 0 && (
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Legal Entity</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Legal Entity"
                                    value={LegalEntity}
                                    onChange={handleChange}
                                >
                                            {accountDetails.legalentities.map((val: any, index: any) => (
                                    <MenuItem value={index} key={`legalEnt${index}`}>
                                    {val.legalEntityName}
                                </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            )}
                        </Box>
                        }
                    </Stack>
                </Box>

                {/* 2nd row starts here */}
                {leEntity != null && (
                    <Box
                        component="form"
                        className="billing-details-input"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            rowGap: '48px',
                            px: '50px',
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
                                    textTransform: 'capitalize',
                                }}
                            >
                                {t<string>('accountName')}
                            </Typography>
                            <Typography
                                className="prefilled-content"
                                id="account-name-details"
                                component="span"
                                sx={{
                                    color: '#344857',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    fontFamily: 'ubuntu',
                                    lineHeight: '18px',
                                }}
                            >
                                {leEntity && leEntity?.billingDetails.accountName}
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
                                {t<string>('legalEntity')}
                            </Typography>
                            <Typography
                                className="prefilled-content"
                                id="legal-entity"
                                component="span"
                                sx={{
                                    color: '#344857',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    fontFamily: 'ubuntu',
                                    lineHeight: '18px',
                                }}
                            >
                                {leEntity && leEntity?.legalEntityName}
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
                                {t<string>('billingType')}
                            </Typography>
                            <Typography
                                className="prefilled-content"
                                id="billing-type"
                                component="span"
                                sx={{
                                    color: '#344857',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    fontFamily: 'ubuntu',
                                    lineHeight: '18px',
                                }}
                            >
                                {leEntity && leEntity?.billingDetails.billingtype}
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
                                {t<string>('billingCycle')}
                            </Typography>
                            <Typography
                                className="prefilled-content"
                                id="billing-cycle"
                                component="span"
                                sx={{
                                    color: '#344857',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    fontFamily: 'ubuntu',
                                    lineHeight: '18px',
                                }}
                            >
                                {leEntity && leEntity?.billingDetails.billingCycle}
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
                                {t<string>('paymentPeriod')}
                            </Typography>
                            <Typography
                                className="prefilled-content"
                                id="payment-period"
                                component="span"
                                sx={{
                                    color: '#344857',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    fontFamily: 'ubuntu',
                                    lineHeight: '18px',
                                }}
                            >
                                {leEntity && leEntity?.billingDetails.paymentPeriod}
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
                                {t<string>('vatGstTax')}
                            </Typography>

                            <Typography
                                className="prefilled-content"
                                id="vat"
                                component="span"
                                sx={{
                                    color: '#344857',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    fontFamily: 'ubuntu',
                                    lineHeight: '18px',
                                }}
                            >
                                {leEntity && leEntity?.billingDetails.vatOrGSTNoOrTxId}
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
                                {t<string>('companyPanOrEqNo')}
                            </Typography>
                            <Typography
                                className="prefilled-content"
                                id="company-pan"
                                component="span"
                                sx={{
                                    color: '#344857',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    fontFamily: 'ubuntu',
                                    lineHeight: '18px',
                                }}
                            >
                                {leEntity && leEntity?.billingDetails.companyPAN}
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
                                {t<string>('applicableCurrency')}
                            </Typography>
                            <Typography
                                className="prefilled-content"
                                id="applicable-currency"
                                component="span"
                                sx={{
                                    color: '#344857',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    fontFamily: 'ubuntu',
                                    lineHeight: '18px',
                                }}
                            >
                                {leEntity && leEntity?.billingDetails.applicableCurrency}
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
                                {t<string>('contactTerm')}
                            </Typography>
                            <Typography
                                className="prefilled-content"
                                id="contract-term"
                                component="span"
                                sx={{
                                    color: '#344857',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    fontFamily: 'ubuntu',
                                    lineHeight: '18px',
                                }}
                            >
                                {leEntity && leEntity?.billingDetails.contractTerm}
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
                                {t<string>('rateChange...days')}
                            </Typography>
                            <Typography
                                className="prefilled-content"
                                id="rate-change-notification-period"
                                component="span"
                                sx={{
                                    color: '#344857',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    fontFamily: 'ubuntu',
                                    lineHeight: '18px',
                                }}
                            >
                                {leEntity &&
                                    leEntity?.billingDetails.rateChangeNotificationPeriod}
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
                                {t<string>('rate&cover...zone')}
                            </Typography>
                            <Typography
                                className="prefilled-content"
                                id="rate-coverLegalEntity-change-timeZone"
                                component="span"
                                sx={{
                                    color: '#344857',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    fontFamily: 'ubuntu',
                                    lineHeight: '18px',
                                }}
                            >
                                {leEntity &&
                                    leEntity?.billingDetails.rateCoverageChangeTimeZone}
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
                                {t<string>('accountStatusAndRemark')}
                            </Typography>
                            <Typography
                                className="prefilled-content"
                                id="account-status"
                                component="span"
                                sx={{
                                    color: '#344857',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    fontFamily: 'ubuntu',
                                    lineHeight: '18px',
                                }}
                            >
                                {leEntity && leEntity?.billingDetails.accountStatus}
                            </Typography>
                        </Stack>
                    </Box>
                )}
            </Box>
            {/* <AccountInvoice sendInvoice={sendInvoice} /> */}
        </>
    )
}

export default AccountDetail
