import React, { useState, useEffect, SyntheticEvent } from 'react'
import Table from '@mui/material/Table'
import { IconButton, Menu, MenuItem, ListItemIcon, Tooltip, ClickAwayListener } from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'

import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import useLocales from '../../../hooks/useLocales'
import Time from '../icons/time'
import Pdf from '../icons/pdf'
import Ticket from '../icons/ticket'
import Download from '../icons/download'
import { Actions } from './Actions'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { getPageParms, setUlrParms } from '../../../utils/helpers'
import { useDispatch as useAppDispatch } from '../../../redux/store'
import { Link } from 'react-router-dom'
import MultiSelect from '../elements/multiSelect'
import { apiVrbls } from '../../../utils/constants';
import moment from "moment";
import Invoice from '../../common/icons/invoice'
import Overdue from '../../common/icons/overdue'
import PaidInvoice from '../../common/icons/paidInvoice'
import UnpaidInvoice from '../../common/icons/unpaidInvoice'
import DownloadCdr from './DownloadCdr'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}))

const DataTable = ({
    TableData,
    sortAction,
    Total,
    pageAction,
    take,
    filterAction,
    page,
    handleShow,
    handledownloadPdf,
    handledownloadCdrPdf,
    handledownloadViewpdf,
    setStartDate,
    setEndDate
}: any) => {
    const { t } = useLocales()
    const { data, columns, tableName } = TableData
    const dispatch = useAppDispatch();
    const totalCount = Math.ceil(Total / take)
    const [sortdir, setSortdir]: any = useState(null)

    const changeTake = (take: any) => {
        updateData(page, take)
    }

    const changePage = (da: any, pageNumber: any) => {
        updateData(pageNumber, take)
    }

    const updateData = (page: any, take: any) => {
        console.log(Total, page, take);
        if ((take * page) > Total) {
            dispatch(pageAction(Math.ceil(Total / take), take))
            setUlrParms(page, take)
        } else {
            dispatch(pageAction(page, take))
            setUlrParms(page, take)
        }
    }
    const sort = (head: any) => {
        if (head.sort) {
            dispatch(sortAction(head, sortdir === -1 ? 1 : -1));
            setSortdir(sortdir === -1 ? 1 : -1)
        }

    }

    const handleDownload = (data: any) => {
        dispatch(handledownloadPdf(data))
    }
    const handleDownloadCdr = (data: any) => {
        dispatch(handledownloadCdrPdf(data))
    }

    const handleViewPdf = (data: any) => {
        dispatch(handledownloadViewpdf(data))
    }

    // Vertical Dropdown code
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Handle Tooltip closing & opening
    const [opened, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };



    const [invoiceState, setInvoiceState] = useState<boolean>(true);
    const [customerState, setCustomerState] = useState<boolean>(true);
    const [entityState, setEntityState] = useState<boolean>(true);
    const [poState, setPoState] = useState<boolean>(true);
    const [statusState, setStatusState] = useState<boolean>(true);
    const [amountState, setAmountState] = useState<boolean>(true);
    const [invoiceIssueState, setInvoiceIssueState] = useState<boolean>(true);
    const [dueState, setDueState] = useState<boolean>(true);
    // const handleInvoice = (e: SyntheticEvent) => {
    //     const invoiceIdHeadElement = document.getElementsByName('Invoice Number')[0]
    //     invoiceIdHeadElement.style.display = invoiceState? 'block': 'none'
    //     setInvoiceState(!invoiceState);
    // };

    const handleInvoiceClose = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox'
        ) as HTMLElement
        const invoiceIdHeadElement = document.getElementsByName('Invoice Number')[0]
        invoiceIdHeadElement.style.display = invoiceState ? 'block' : 'none'
        setInvoiceState(!invoiceState);
        // const invoiceIdHeadElement = document.getElementsByName('Invoice_no')[0]
        invoiceIdHeadElement.style.display = 'none'
        blankCheckoutElement.style.display = 'block'
        CheckoutElement.style.display = 'none'
        columns[0].eleName = null
    };


    const handleInvoiceOpen = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox'
        ) as HTMLElement
        const invoiceIdHeadElement = document.getElementsByName('Invoice Number')[0]
        invoiceIdHeadElement.style.display = invoiceState ? 'block' : 'none'
        setInvoiceState(!invoiceState);
        invoiceIdHeadElement.style.display = 'flex'
        blankCheckoutElement.style.display = 'none'
        CheckoutElement.style.display = 'block'
        columns[0].eleName = 'Invoice_no'
    };
    const handleCustomerClose = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-customer'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-customer'
        ) as HTMLElement
        const customerIdHeadElement = document.getElementsByName(`${t<string>('tables.billing.customerLe')}`)[0]
        customerIdHeadElement.style.display = customerState ? 'block' : 'none'
        setCustomerState(!customerState);

        customerIdHeadElement.style.display = 'none'
        blankCheckoutElement.style.display = 'block'
        CheckoutElement.style.display = 'none'
        columns[1].eleName = null
    };


    const handleCustomerOpen = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-customer'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-customer'
        ) as HTMLElement
        const customerIdHeadElement = document.getElementsByName(`${t<string>('tables.billing.customerLe')}`)[0]
        customerIdHeadElement.style.display = customerState ? 'block' : 'none'
        setCustomerState(!customerState);
        customerIdHeadElement.style.display = 'flex'
        blankCheckoutElement.style.display = 'none'
        CheckoutElement.style.display = 'block'
        columns[1].eleName = 'Customer_LE'
    };
    const handleEntityClose = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-entity'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-entity'
        ) as HTMLElement
        const entityIdHeadElement = document.getElementsByName(`${t<string>('tables.billing.entity')}`)[0]
        entityIdHeadElement.style.display = entityState ? 'block' : 'none'
        setEntityState(!entityState);

        entityIdHeadElement.style.display = 'none'
        blankCheckoutElement.style.display = 'block'
        CheckoutElement.style.display = 'none'
        columns[2].eleName = null
    };

    const handleEntityOpen = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-entity'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-entity'
        ) as HTMLElement
        const entityIdHeadElement = document.getElementsByName(`${t<string>('tables.billing.entity')}`)[0]
        entityIdHeadElement.style.display = entityState ? 'block' : 'none'
        setEntityState(!entityState);
        entityIdHeadElement.style.display = 'flex'
        blankCheckoutElement.style.display = 'none'
        CheckoutElement.style.display = 'block'
        columns[2].eleName = 'Tata_Entity'
    };

    const handlePoClose = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-po'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-po'
        ) as HTMLElement
        const poIdHeadElement = document.getElementsByName(`${t<string>('tables.billing.poNo')}`)[0]
        poIdHeadElement.style.display = poState ? 'block' : 'none'
        setPoState(!poState);

        poIdHeadElement.style.display = 'none'
        blankCheckoutElement.style.display = 'block'
        CheckoutElement.style.display = 'none'
        columns[3].eleName = null
    };


    const handlePoOpen = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-po'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-po'
        ) as HTMLElement
        const poIdHeadElement = document.getElementsByName(`${t<string>('tables.billing.poNo')}`)[0]
        poIdHeadElement.style.display = poState ? 'block' : 'none'
        setPoState(!poState);

        poIdHeadElement.style.display = 'flex'
        blankCheckoutElement.style.display = 'none'
        CheckoutElement.style.display = 'block'
        columns[3].eleName = 'PO_number'
    };
    const handleStatusClose = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-status'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-status'
        ) as HTMLElement
        const statusIdHeadElement = document.getElementsByName(`${t<string>('tables.billing.status')}`)[0]
        statusIdHeadElement.style.display = statusState ? 'block' : 'none'
        setStatusState(!statusState);

        statusIdHeadElement.style.display = 'none'
        blankCheckoutElement.style.display = 'block'
        CheckoutElement.style.display = 'none'
        columns[4].eleName = null
    };


    const handleStatusOpen = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-status'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-status'
        ) as HTMLElement
        const statusIdHeadElement = document.getElementsByName(`${t<string>('tables.billing.status')}`)[0]
        statusIdHeadElement.style.display = statusState ? 'block' : 'none'
        setStatusState(!statusState);

        statusIdHeadElement.style.display = 'flex'
        blankCheckoutElement.style.display = 'none'
        CheckoutElement.style.display = 'block'
        columns[4].eleName = 'Payment_Status'
    };
    const handleAmountClose = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-invoice-amount'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-invoice-amount'
        ) as HTMLElement
        const amountIdHeadElement = document.getElementsByName(`${t<string>('tables.billing.invoiceAmount')}`)[0]
        amountIdHeadElement.style.display = amountState ? 'block' : 'none'
        setAmountState(!amountState);

        amountIdHeadElement.style.display = 'none'
        blankCheckoutElement.style.display = 'block'
        CheckoutElement.style.display = 'none'
        columns[5].eleName = null
    };


    const handleAmountOpen = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-invoice-amount'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-invoice-amount'
        ) as HTMLElement
        const amountIdHeadElement = document.getElementsByName(`${t<string>('tables.billing.invoiceAmount')}`)[0]
        amountIdHeadElement.style.display = amountState ? 'block' : 'none'
        setAmountState(!amountState);

        amountIdHeadElement.style.display = 'flex'
        blankCheckoutElement.style.display = 'none'
        CheckoutElement.style.display = 'block'
        columns[5].eleName = 'Invoice_amt'
    };
    const handleInvoiceIssueClose = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-invoice-issue'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-invoice-issue'
        ) as HTMLElement
        const invoiceIssueIdHeadElement = document.getElementsByName(`${t<string>('tables.billing.invoiceIssuedDate')}`)[0]
        invoiceIssueIdHeadElement.style.display = invoiceIssueState ? 'block' : 'none'
        setInvoiceIssueState(!invoiceIssueState);

        invoiceIssueIdHeadElement.style.display = 'none'
        blankCheckoutElement.style.display = 'block'
        CheckoutElement.style.display = 'none'
        columns[6].eleName = null
    };


    const handleInvoiceIssueOpen = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-invoice-issue'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-invoice-issue'
        ) as HTMLElement
        const invoiceIssueIdHeadElement = document.getElementsByName(`${t<string>('tables.billing.invoiceIssuedDate')}`)[0]
        invoiceIssueIdHeadElement.style.display = invoiceIssueState ? 'block' : 'none'
        setInvoiceIssueState(!invoiceIssueState);
        invoiceIssueIdHeadElement.style.display = 'flex'
        blankCheckoutElement.style.display = 'none'
        CheckoutElement.style.display = 'block'
        columns[6].eleName = 'Invoice_date'
    };
    const handleDueClose = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-due-date'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-due-date'
        ) as HTMLElement
        const dueIdHeadElement = document.getElementsByName(`${t<string>('tables.billing.dueDate')}`)[0]
        dueIdHeadElement.style.display = dueState ? 'block' : 'none'
        setDueState(!dueState)
        dueIdHeadElement.style.display = 'none'
        blankCheckoutElement.style.display = 'block'
        CheckoutElement.style.display = 'none'
        columns[7].eleName = 'null'
    };

    const handleDueOpen = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-due-date'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-due-date'
        ) as HTMLElement
        const dueIdHeadElement = document.getElementsByName(`${t<string>('tables.billing.dueDate')}`)[0]
        dueIdHeadElement.style.display = dueState ? 'block' : 'none'
        setDueState(!dueState);

        dueIdHeadElement.style.display = 'flex'
        blankCheckoutElement.style.display = 'none'
        CheckoutElement.style.display = 'block'
        columns[7].eleName = 'Due_date'
    };

    const onDateChange = (val: any) => {
        setStartDate(val.start.format("YYYY-MM-DD"));
        setEndDate(val.end.format("YYYY-MM-DD"));
    }

    return (
        <>
            <Actions data={data} pagination={{ take, Total }} changeTake={(e: any) => { changeTake(e) }} dateChange={onDateChange} />
            <p data-testid="para-element"></p>
            <TableContainer
                component={Paper}
                className="table__Container buildfix4"
            >
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead className="TableHead ">
                        <TableRow id="table-head">
                            <StyledTableCell>
                                <IconButton
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    sx={{
                                        position: 'relative',
                                    }}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                >
                                    <MenuItem ><ListItemIcon>
                                        {/* <Logout fontSize="small" /> */}
                                        <DragIndicatorIcon fontSize='small' />
                                        <CheckBoxIcon onClick={handleInvoiceClose} id="checkbox" fontSize='small' style={{ display: invoiceState ? 'block' : 'none' }} />
                                        {/* remove above icon and use below icon for when user unchecks the option */}
                                        <CheckBoxOutlineBlankIcon onClick={handleInvoiceOpen} fontSize='small' id='checkbox-blank' style={{ display: invoiceState ? 'none' : 'block' }} />
                                    </ListItemIcon><span style={{ color: invoiceState ? '#303030' : '#bbb' }} >Invoice Number</span></MenuItem>
                                    <MenuItem ><ListItemIcon>
                                        {/* <Logout fontSize="small" /> */}
                                        <DragIndicatorIcon fontSize='small' />
                                        <CheckBoxIcon onClick={handleCustomerClose} id="checkbox-customer" fontSize='small' style={{ display: customerState ? 'block' : 'none' }} />
                                        {/* remove above icon and use below icon for when user unchecks the option */}
                                        <CheckBoxOutlineBlankIcon onClick={handleCustomerOpen} fontSize='small' id='checkbox-blank-customer' style={{ display: customerState ? 'none' : 'block' }} />
                                    </ListItemIcon><span style={{ color: customerState ? '#303030' : '#bbb' }} >Customer LE</span></MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            {/* <Logout fontSize="small" /> */}
                                            <DragIndicatorIcon fontSize='small' />
                                            <CheckBoxIcon onClick={handleEntityClose} id="checkbox-entity" fontSize='small' style={{ display: entityState ? 'block' : 'none' }} />
                                            {/* remove above icon and use below icon for when user unchecks the option */}
                                            <CheckBoxOutlineBlankIcon onClick={handleEntityOpen} fontSize='small' id='checkbox-blank-entity' style={{ display: entityState ? 'none' : 'block' }} />
                                        </ListItemIcon><span style={{ color: entityState ? '#303030' : '#bbb' }} >Entity</span></MenuItem>
                                    <MenuItem><ListItemIcon>
                                        {/* <Logout fontSize="small" /> */}
                                        <DragIndicatorIcon fontSize='small' />
                                        <CheckBoxIcon onClick={handlePoClose} id="checkbox-po" fontSize='small' style={{ display: poState ? 'block' : 'none' }} />
                                        {/* remove above icon and use below icon for when user unchecks the option */}
                                        <CheckBoxOutlineBlankIcon onClick={handlePoOpen} fontSize='small' id='checkbox-blank-po' style={{ display: poState ? 'none' : 'block' }} />
                                    </ListItemIcon><span style={{ color: poState ? '#303030' : '#bbb' }} >PO No.</span></MenuItem>
                                    <MenuItem><ListItemIcon>
                                        {/* <Logout fontSize="small" /> */}
                                        <DragIndicatorIcon fontSize='small' />
                                        <CheckBoxIcon onClick={handleStatusClose} id="checkbox-status" fontSize='small' style={{ display: statusState ? 'block' : 'none' }} />
                                        {/* remove above icon and use below icon for when user unchecks the option */}
                                        <CheckBoxOutlineBlankIcon onClick={handleStatusOpen} fontSize='small' id='checkbox-blank-status' style={{ display: statusState ? 'none' : 'block' }} />
                                    </ListItemIcon><span style={{ color: statusState ? '#303030' : '#bbb' }} >Status</span></MenuItem>
                                    <MenuItem ><ListItemIcon>
                                        {/* <Logout fontSize="small" /> */}
                                        <DragIndicatorIcon fontSize='small' />
                                        <CheckBoxIcon onClick={handleAmountClose} id="checkbox-invoice-amount" fontSize='small' style={{ display: amountState ? 'block' : 'none' }} />
                                        {/* remove above icon and use below icon for when user unchecks the option */}
                                        <CheckBoxOutlineBlankIcon onClick={handleAmountOpen} fontSize='small' id='checkbox-blank-invoice-amount' style={{ display: amountState ? 'none' : 'block' }} />
                                    </ListItemIcon><span style={{ color: amountState ? '#303030' : '#bbb' }}>Invoice Amount</span></MenuItem>
                                    <MenuItem ><ListItemIcon>
                                        {/* <Logout fontSize="small" /> */}
                                        <DragIndicatorIcon fontSize='small' />
                                        <CheckBoxIcon onClick={handleInvoiceIssueClose} id="checkbox-invoice-issue" fontSize='small' style={{ display: invoiceIssueState ? 'block' : 'none' }} />
                                        {/* remove above icon and use below icon for when user unchecks the option */}
                                        <CheckBoxOutlineBlankIcon onClick={handleInvoiceIssueOpen} fontSize='small' id='checkbox-blank-invoice-issue' style={{ display: invoiceIssueState ? 'none' : 'block' }} />
                                    </ListItemIcon><span style={{ color: invoiceIssueState ? '#303030' : '#bbb' }} >Invoice Issued Date</span></MenuItem>
                                    <MenuItem ><ListItemIcon>
                                        {/* <Logout fontSize="small" /> */}
                                        <DragIndicatorIcon fontSize='small' />
                                        <CheckBoxIcon onClick={handleDueClose} id="checkbox-due-date" fontSize='small' style={{ display: dueState ? 'block' : 'none' }} />
                                        {/* remove above icon and use below icon for when user unchecks the option */}
                                        <CheckBoxOutlineBlankIcon onClick={handleDueOpen} fontSize='small' id='checkbox-blank-due-date' style={{ display: dueState ? 'none' : 'block' }} />
                                    </ListItemIcon><span style={{ color: dueState ? '#303030' : '#bbb' }}>Due Date</span></MenuItem>
                                </Menu>
                            </StyledTableCell>

                            {/* Table Heads */}
                            {columns.map((head: any, index: any) => (
                                <StyledTableCell key={`${head.headTrans}${index}`} align="right">
                                    <div className="th_wrapper">
                                        <button id='hiding' name={t<string>(`tables.${tableName}.${head.headTrans}`)} className='voidBtn' onClick={sort.bind(null, head)} key={`clickkey-${head.headTrans}${index}`} >
                                            {t<string>(`tables.${tableName}.${head.headTrans}`)}
                                            <span>
                                                {' '}
                                                {head && head.filter ? <MultiSelect filterAction={filterAction} filterData={head.filterData} id={`filter-${head.headTrans}${index}`} /> : null}
                                                {' '}
                                            </span>
                                        </button>
                                    </div>
                                </StyledTableCell>
                            ))}

                            <StyledTableCell align="right">
                                <div className="th_wrapper">
                                    <span>&nbsp;</span>
                                </div>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {/* Table Body */}
                    <TableBody data-testid="table-body-element" className="TableBody" data->
                        {data && data.map((item: any, index: any) => (
                            <TableRow id="table-data" key={item.id}>
                                <TableCell component="th" scope="row">
                                    <a href="/">
                                        <a href="#/">
                                            {item.icon == 'overdue' && <span className="overdue" ><Overdue /></span>}
                                            {item.icon == 'pending' && <span className="pending" ><UnpaidInvoice /></span>}
                                            {item.icon == 'completed' && <span className="completed" ><PaidInvoice /></span>}
                                        </a>
                                    </a>
                                </TableCell>
                                {columns.map((clm: any, index: any) => (
                                    <>
                                        <Tooltip title={item[(clm.eleName == 'Tata_Entity') ? clm.eleName : '']}>
                                            <TableCell className='table-cell-tooltip' key={`tbl-clm${index}`} style={{ width: 160 }} align="right">
                                                {item[clm.eleName]}{' '}
                                            </TableCell>
                                        </Tooltip>
                                    </>
                                ))}
                                <TableCell style={{ width: 160 }} align="right">
                                    <ul className="actionButtons">
                                        <Tooltip title="VIEW INVOICE">
                                            <button className="actionButton__item" onClick={() => handleViewPdf(item)}>
                                                <span> <Pdf /> </span>
                                            </button>
                                        </Tooltip>
                                        <Tooltip title="RAISE A TICKET">
                                            <button className="actionButton__item" onClick={(e) => { handleShow() }}>
                                                <span><Ticket /></span>
                                            </button>
                                        </Tooltip>
                                        <Tooltip title="DOWNLOAD">
                                            <button className="actionButton__item" onClick={() => handleDownload(item)} >
                                                <span><Download /></span>
                                            </button>
                                        </Tooltip>
                                        {/* <Tooltip title="DOWNLOAD">
                                            <button className="actionButton__item" onClick={() => handleDownloadCdr(item)} >
                                                <span>Download Cdr</span>
                                            </button>
                                        </Tooltip> */}
                                        <DownloadCdr />
                                    </ul>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack
                spacing={3}
                sx={{
                    marginTop: 3,
                }}
            >
                <Pagination onChange={changePage} page={page} className="tablePag" count={totalCount} variant="outlined" shape="rounded" />
            </Stack>
        </>
    )
}

export default DataTable
