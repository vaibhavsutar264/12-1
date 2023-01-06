import React, { useState, useEffect, SyntheticEvent } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Table from '@mui/material/Table'
import {
    IconButton,
    ListItemIcon,
    Tooltip,
    ClickAwayListener,
} from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'

import CustomerLeFilter from './filter-and-sort/CustomerLeFilter'
import EntityFilter from './filter-and-sort/EntityFilter'
import InvoiceAmtFilter from './filter-and-sort/InvoiceAmtFilter'
import InvoiceNoFilter from './filter-and-sort/InvoiceNoFilter'
import PoNoFilter from './filter-and-sort/PoNoFilter'
import StatusFilter from './filter-and-sort/StatusFilter'

import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
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
import { apiVrbls } from '../../../utils/constants'
import moment from 'moment'
import Invoice from '../icons/invoice'
import Overdue from '../icons/overdue'
import PaidInvoice from '../icons/paidInvoice'
import UnpaidInvoice from '../icons/unpaidInvoice'
import DownloadCdr from './DownloadCdr'

import { Avatar, Divider } from '@mui/material'
import Logout from '@mui/icons-material/Logout'
import Settings from '@mui/icons-material/Settings'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Loader from './loader-and-snackbar/Loader'
import SnackbarComponent from './loader-and-snackbar/Snackbar'
import { CSSProperties } from 'styled-components'

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}))

const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
}

const grid = 8

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    background: isDragging ? 'lightgreen' : 'grey',
    ...draggableStyle,
})

const getListStyle = (isDraggingOver: any) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250,
})

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
}: any) => {
    const { t } = useLocales()
    const { data, columns, tableName } = TableData
    const dispatch = useAppDispatch()
    const totalCount = Math.ceil(Total / take)
    const [sortdir, setSortdir]: any = useState(null)

    const [filteredData, setFilteredData] = useState(data)
    const [allData, setAllData] = useState(data)
    const [startDate, setstartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    // useEffect(() => {
    //   setFilteredData(data)
    //   setAllData(data)
    // }, [data])
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }
    //   console.log((startDate).toLocaleDateString().substring(0,10))

    const handleSelect = (date: any) => {
        const filtered = data.filter((item: any) => {
            const invoiceDate = new Date(item['Invoice_date'])
            return (
                invoiceDate >= date.selection.startDate &&
                invoiceDate <= date.selection.endDate
            )
        })
        setstartDate(date.selection.startDate)
        console.log(date.selection.startDate)
        setEndDate(date.selection.endDate)
        // setFilteredData(filtered)
    }

    function useHover(
        styleOnHover: CSSProperties,
        styleOnNotHover: CSSProperties = {}
    ) {
        const [style, setStyle] = React.useState(styleOnNotHover)
        const onMouseEnter = () => setStyle(styleOnHover)
        const onMouseLeave = () => setStyle(styleOnNotHover)
        return { style, onMouseEnter, onMouseLeave }
    }
    const obj = data.filter((o: any) => o.Payment_Status == 'completed')
    // console.log('obj values', obj)
    // let BorderStyleColor = 'red'
    const hover = useHover({ borderColor: 'green', userSelect: 'none' })
    // data.map((e: any) => Object.keys(e)[0])
    // console.log(data.map((e: any) => e.Payment_Status))
    const paymentStatusValues = data.map((e: any) => e.Payment_Status)
    // console.log(paymentStatusValues[Object.keys(e)[5]])
    // paymentStatusValues[0]
    const trElement = document.getElementById('table-data')
    const tdElement = trElement?.getElementsByClassName('table-cell-tooltip')

    // if(trElement !== undefined){
    //     for (let i = 0; i < trElement.length; i++) {
    //         trElement[i].addEventListener("mouseover", function() {
    //         const current = document.getElementsByClassName("active");
    //         current[0].className = current[0].className.replace(" active", "");
    //         btns[i].className = "cardType__1 active";
    //       });
    //     }
    //     }
    // for (let index = 0; index < data.length; index++) {
    //     console.log(data[index].Payment_Status)
    // }

    const changeTake = (take: any) => {
        updateData(page, take)
    }

    const changePage = (da: any, pageNumber: any) => {
        updateData(pageNumber, take)
    }

    const updateData = (page: any, take: any) => {
        console.log(Total, page, take)
        if (take * page > Total) {
            dispatch(pageAction(Math.ceil(Total / take), take))
            setUlrParms(page, take)
        } else {
            dispatch(pageAction(page, take))
            setUlrParms(page, take)
        }
    }
    const sort = (head: any) => {
        if (head.sort) {
            dispatch(sortAction(head, sortdir === -1 ? 1 : -1))
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
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    // Handle Tooltip closing & opening
    const [opened, setOpen] = React.useState(false)

    const handleTooltipClose = () => {
        setOpen(false)
    }

    const handleTooltipOpen = () => {
        setOpen(true)
    }

    const [invoiceState, setInvoiceState] = useState<boolean>(true)
    const [customerState, setCustomerState] = useState<boolean>(true)
    const [entityState, setEntityState] = useState<boolean>(true)
    const [poState, setPoState] = useState<boolean>(true)
    const [statusState, setStatusState] = useState<boolean>(true)
    const [amountState, setAmountState] = useState<boolean>(true)
    const [invoiceIssueState, setInvoiceIssueState] = useState<boolean>(true)
    const [dueState, setDueState] = useState<boolean>(true)
    // const handleInvoice = (e: SyntheticEvent) => {
    //     const invoiceIdHeadElement = document.getElementsByName('Invoice Number')[0]
    //     invoiceIdHeadElement.style.display = invoiceState? 'block': 'none'
    //     setInvoiceState(!invoiceState);
    // };

    const handleInvoiceClose = (e: SyntheticEvent) => {
        e.preventDefault()
        if (columns[0]) {
            columns[0].eleName = null
        }
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank'
        ) as HTMLElement
        const CheckoutElement = document.getElementById('checkbox') as HTMLElement
        const invoiceIdHeadElement = document.getElementsByName('Invoice Number')[0]
        invoiceIdHeadElement.style.display = invoiceState ? 'block' : 'none'
        setInvoiceState(!invoiceState)
        // const invoiceIdHeadElement = document.getElementsByName('Invoice_no')[0]
        invoiceIdHeadElement.style.display = 'none'
        blankCheckoutElement.style.display = 'block'
        CheckoutElement.style.display = 'none'
    }

    const handleInvoiceOpen = (e: SyntheticEvent) => {
        e.preventDefault()
        if (columns[0]) {
            columns[0].eleName = 'Invoice_no'
        }
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank'
        ) as HTMLElement
        const CheckoutElement = document.getElementById('checkbox') as HTMLElement
        const invoiceIdHeadElement = document.getElementsByName('Invoice Number')[0]
        invoiceIdHeadElement.style.display = invoiceState ? 'block' : 'none'
        setInvoiceState(!invoiceState)
        invoiceIdHeadElement.style.display = 'flex'
        blankCheckoutElement.style.display = 'none'
        CheckoutElement.style.display = 'block'
    }
    const handleCustomerClose = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-customer'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-customer'
        ) as HTMLElement
        const customerIdHeadElement = document.getElementsByName(
            `${t<string>('tables.billing.customerLe')}`
        )[0]
        if (columns[1]) {
            columns[1].eleName = null
        }
        customerIdHeadElement.style.display = customerState ? 'block' : 'none'
        setCustomerState(!customerState)

        customerIdHeadElement.style.display = 'none'
        blankCheckoutElement.style.display = 'block'
        CheckoutElement.style.display = 'none'
    }

    const handleCustomerOpen = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-customer'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-customer'
        ) as HTMLElement
        const customerIdHeadElement = document.getElementsByName(
            `${t<string>('tables.billing.customerLe')}`
        )[0]
        if (columns[1]) {
            columns[1].eleName = 'Customer_LE'
        }
        customerIdHeadElement.style.display = customerState ? 'block' : 'none'
        setCustomerState(!customerState)
        customerIdHeadElement.style.display = 'flex'
        blankCheckoutElement.style.display = 'none'
        CheckoutElement.style.display = 'block'
    }
    const handleEntityClose = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-entity'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-entity'
        ) as HTMLElement
        const entityIdHeadElement = document.getElementsByName(
            `${t<string>('tables.billing.entity')}`
        )[0]
        if (columns[2]) {
            columns[2].eleName = null
        }
        entityIdHeadElement.style.display = entityState ? 'block' : 'none'
        setEntityState(!entityState)

        entityIdHeadElement.style.display = 'none'
        blankCheckoutElement.style.display = 'block'
        CheckoutElement.style.display = 'none'
    }

    const handleEntityOpen = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-entity'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-entity'
        ) as HTMLElement
        const entityIdHeadElement = document.getElementsByName(
            `${t<string>('tables.billing.entity')}`
        )[0]
        if (columns[2]) {
            columns[2].eleName = 'Tata_Entity'
        }
        entityIdHeadElement.style.display = entityState ? 'block' : 'none'
        setEntityState(!entityState)
        entityIdHeadElement.style.display = 'flex'
        blankCheckoutElement.style.display = 'none'
        CheckoutElement.style.display = 'block'
    }

    const handlePoClose = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-po'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-po'
        ) as HTMLElement
        const poIdHeadElement = document.getElementsByName(
            `${t<string>('tables.billing.poNo')}`
        )[0]
        if (columns[3]) {
            columns[3].eleName = null
        }
        poIdHeadElement.style.display = poState ? 'block' : 'none'
        setPoState(!poState)

        poIdHeadElement.style.display = 'none'
        blankCheckoutElement.style.display = 'block'
        CheckoutElement.style.display = 'none'
    }

    const handlePoOpen = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-po'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-po'
        ) as HTMLElement
        const poIdHeadElement = document.getElementsByName(
            `${t<string>('tables.billing.poNo')}`
        )[0]
        if (columns[3]) {
            columns[3].eleName = 'PO_number'
        }
        poIdHeadElement.style.display = poState ? 'block' : 'none'
        setPoState(!poState)

        poIdHeadElement.style.display = 'flex'
        blankCheckoutElement.style.display = 'none'
        CheckoutElement.style.display = 'block'
    }
    const handleStatusClose = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-status'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-status'
        ) as HTMLElement
        const statusIdHeadElement = document.getElementsByName(
            `${t<string>('tables.billing.status')}`
        )[0]
        if (columns[4]) {
            columns[4].eleName = null
        }
        statusIdHeadElement.style.display = statusState ? 'block' : 'none'
        setStatusState(!statusState)

        statusIdHeadElement.style.display = 'none'
        blankCheckoutElement.style.display = 'block'
        CheckoutElement.style.display = 'none'
    }

    const handleStatusOpen = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-status'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-status'
        ) as HTMLElement
        const statusIdHeadElement = document.getElementsByName(
            `${t<string>('tables.billing.status')}`
        )[0]
        if (columns[4]) {
            columns[4].eleName = 'Payment_Status'
        }
        statusIdHeadElement.style.display = statusState ? 'block' : 'none'
        setStatusState(!statusState)

        statusIdHeadElement.style.display = 'flex'
        blankCheckoutElement.style.display = 'none'
        CheckoutElement.style.display = 'block'
    }
    const handleAmountClose = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-invoice-amount'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-invoice-amount'
        ) as HTMLElement
        const amountIdHeadElement = document.getElementsByName(
            `${t<string>('tables.billing.invoiceAmount')}`
        )[0]
        if (columns[5]) {
            columns[5].eleName = null
        }
        amountIdHeadElement.style.display = amountState ? 'block' : 'none'
        setAmountState(!amountState)

        amountIdHeadElement.style.display = 'none'
        blankCheckoutElement.style.display = 'block'
        CheckoutElement.style.display = 'none'
    }

    const handleAmountOpen = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-invoice-amount'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-invoice-amount'
        ) as HTMLElement
        const amountIdHeadElement = document.getElementsByName(
            `${t<string>('tables.billing.invoiceAmount')}`
        )[0]
        if (columns[5]) {
            columns[5].eleName = 'Invoice_amt'
        }
        amountIdHeadElement.style.display = amountState ? 'block' : 'none'
        setAmountState(!amountState)

        amountIdHeadElement.style.display = 'flex'
        blankCheckoutElement.style.display = 'none'
        CheckoutElement.style.display = 'block'
    }
    const handleInvoiceIssueClose = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-invoice-issue'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-invoice-issue'
        ) as HTMLElement
        const invoiceIssueIdHeadElement = document.getElementsByName(
            `${t<string>('tables.billing.invoiceIssuedDate')}`
        )[0]
        if (columns[6]) {
            columns[6].eleName = null
        }
        invoiceIssueIdHeadElement.style.display = invoiceIssueState
            ? 'block'
            : 'none'
        setInvoiceIssueState(!invoiceIssueState)

        invoiceIssueIdHeadElement.style.display = 'none'
        blankCheckoutElement.style.display = 'block'
        CheckoutElement.style.display = 'none'
    }

    const handleInvoiceIssueOpen = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-invoice-issue'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-invoice-issue'
        ) as HTMLElement
        const invoiceIssueIdHeadElement = document.getElementsByName(
            `${t<string>('tables.billing.invoiceIssuedDate')}`
        )[0]
        if (columns[6]) {
            columns[6].eleName = 'Invoice_date'
        }
        invoiceIssueIdHeadElement.style.display = invoiceIssueState
            ? 'block'
            : 'none'
        setInvoiceIssueState(!invoiceIssueState)
        invoiceIssueIdHeadElement.style.display = 'flex'
        blankCheckoutElement.style.display = 'none'
        CheckoutElement.style.display = 'block'
    }
    const handleDueClose = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-due-date'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-due-date'
        ) as HTMLElement
        const dueIdHeadElement = document.getElementsByName(
            `${t<string>('tables.billing.dueDate')}`
        )[0]
        if (columns[7]) {
            columns[7].eleName = 'null'
        }
        dueIdHeadElement.style.display = dueState ? 'block' : 'none'
        setDueState(!dueState)
        dueIdHeadElement.style.display = 'none'
        blankCheckoutElement.style.display = 'block'
        CheckoutElement.style.display = 'none'
    }

    const handleDueOpen = (e: SyntheticEvent) => {
        e.preventDefault()
        const blankCheckoutElement = document.getElementById(
            'checkbox-blank-due-date'
        ) as HTMLElement
        const CheckoutElement = document.getElementById(
            'checkbox-due-date'
        ) as HTMLElement
        const dueIdHeadElement = document.getElementsByName(
            `${t<string>('tables.billing.dueDate')}`
        )[0]
        if (columns[7]) {
            columns[7].eleName = 'Due_date'
            console.log('ddd')
        }
        dueIdHeadElement.style.display = dueState ? 'block' : 'none'
        setDueState(!dueState)

        dueIdHeadElement.style.display = 'flex'
        blankCheckoutElement.style.display = 'none'
        CheckoutElement.style.display = 'block'
    }

    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => {
        setIsHover(true)
    }
    const handleMouseLeave = () => {
        setIsHover(false)
    }

    const boxStyle = {
        // border: '2px solid grey',
        // margin: '10px 0px',
    }
    const pendingStyle = {
        // border: '2px solid red',
        // margin: '10px 0px',
    }
    const completedStyle = {
        // border: '2px solid green',
        // margin: '10px 0px',
    }
    const noStyle = {
        // cursor: 'pointer',
    }

    const filtereColumnData: any[] = [
        {
            id: 'Invoice Number',
            content: 'Invoice Number',
            onClickOpenMenuItem: handleInvoiceOpen,
            onClickCloseMenuItem: handleInvoiceClose,
            idForOpen: 'checkbox-blank',
            idForClose: 'checkbox',
            state: invoiceState,
        },
        {
            id: 'Customer LE',
            content: 'Customer LE',
            onClickOpenMenuItem: handleCustomerOpen,
            onClickCloseMenuItem: handleCustomerClose,
            idForOpen: 'checkbox-blank-customer',
            idForClose: 'checkbox-customer',
            state: customerState,
        },
        {
            id: 'Entity',
            content: 'Entity',
            onClickOpenMenuItem: handleEntityOpen,
            onClickCloseMenuItem: handleEntityClose,
            idForOpen: 'checkbox-blank-entity',
            idForClose: 'checkbox-entity',
            state: entityState,
        },
        {
            id: 'PO No.',
            content: 'PO No.',
            onClickOpenMenuItem: handlePoOpen,
            onClickCloseMenuItem: handlePoClose,
            idForOpen: 'checkbox-blank-po',
            idForClose: 'checkbox-po',
            state: poState,
        },
        {
            id: 'Status',
            content: 'Status',
            onClickOpenMenuItem: handleStatusOpen,
            onClickCloseMenuItem: handleStatusClose,
            idForOpen: 'checkbox-blank-status',
            idForClose: 'checkbox-status',
            state: statusState,
        },
        {
            id: 'Invoice Amount',
            content: 'Invoice Amount',
            onClickOpenMenuItem: handleAmountOpen,
            onClickCloseMenuItem: handleAmountClose,
            idForOpen: 'checkbox-blank-invoice-amount',
            idForClose: 'checkbox-invoice-amount',
            state: amountState,
        },
        {
            id: 'Invoice Issued Date',
            content: 'Invoice Issued Date',
            onClickOpenMenuItem: handleInvoiceIssueOpen,
            onClickCloseMenuItem: handleInvoiceIssueClose,
            idForOpen: 'checkbox-blank-invoice-issue',
            idForClose: 'checkbox-invoice-issue',
            state: invoiceIssueState,
        },
        {
            id: 'Due Date',
            content: 'Due Date',
            onClickOpenMenuItem: handleDueOpen,
            onClickCloseMenuItem: handleDueClose,
            idForOpen: 'checkbox-blank-due-date',
            idForClose: 'checkbox-due-date',
            state: dueState,
        },
    ]
    const result1: any[] = [];
    // const [items, setItems] = useState(filtereColumnData)



    // const onDragEnd = (result: any) => {
    //   if (!result.destination) {
    //     return
    //   }

    //   const reorderedItems = reorder(
    //     items,
    //     result.source.index,
    //     result.destination.index
    //   )
    //   // filtereColumnData = reorderedItems
    //   setItems(reorderedItems)
    // }

    const [menuItemsData, setmenuItemsData] = useState(result1)
    // const [newFruitItem, setNewFruitItem] = React.useState("")
    useEffect(() => {
        setmenuItemsData(filtereColumnData)
    }, [columns, dueState, invoiceIssueState, amountState, statusState, poState, entityState, customerState, invoiceState])

    //save reference for dragItem and dragOverItem
    const dragItem = React.useRef<any>(null)
    const dragOverItem = React.useRef<any>(null)

    //const handle drag sorting
    const handleSort = () => {
        //duplicate items
        // eslint-disable-next-line prefer-const
        let _menuItemsData = [...menuItemsData]

        //remove and save the dragged item content
        const draggedItemContent = _menuItemsData.splice(dragItem.current, 1)[0]

        //switch the position
        _menuItemsData.splice(dragOverItem.current, 0, draggedItemContent)

        //reset the position ref
        dragItem.current = null
        dragOverItem.current = null

        //update the actual array
        setmenuItemsData(_menuItemsData)
        // filtereColumnData = _menuItemsData
    }


    const tablerowbody = document.getElementById("table-body-element");
    const tablecellbody = tablerowbody?.getElementsByClassName("MuiTableRow-root")
    // console.log(tablecellbody)
    
    const [tableData, setTableData] = useState(data);
    const onSearch = (e: any,head: any,index: any)=>{
      console.log(head)
      // const filterData = data.filter((obj : any)=>obj[head['Payment_Status']].toString().includes(e.target.value));
      const filterData = data.filter((obj : any)=>obj[head['eleName']].toString().includes(e.target.value));
      console.log(filterData)
      setTableData(filterData);
    }

    const onSortAscending =(e: any,head: any)=>{
      const sortedDataAscending =  [...data].sort((a : any,b: any)=>a[head['eleName']]-b[head['eleName']]);
      console.log(sortedDataAscending)
      setTableData(sortedDataAscending);
    } 
    const onSortDescending =(e: any,head: any)=>{
      const sortedDataDescending = [...data].sort((a : any,b: any)=>b[head['eleName']]-a[head['eleName']]);
      console.log(sortedDataDescending)
      setTableData(sortedDataDescending);
    }

    return (
        <>
            <CustomerLeFilter />
            {/* <EntityFilter /> */}
            {/* <InvoiceNoFilter /> */}
            {/* <PoNoFilter /> */}
            <InvoiceAmtFilter />
            {/* <StatusFilter /> */}
            {/* <Loader /> */}
            {/* <SnackbarComponent /> */} 
            <Actions
                data={tableData}
                pagination={{ take, Total }}
                changeTake={(e: any) => {
                    changeTake(e)
                }}
                selectionRange={selectionRange}
                handleSelect={handleSelect}
            />
            <p data-testid="para-element"></p>
            <TableContainer component={Paper} className="table__Container buildfix4">
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead className="TableHead ">
                        <TableRow id="table-head">
                            <StyledTableCell>
                                <Menu menuButton={<MenuButton id="border-removing">
                                    <MoreVertIcon /></MenuButton>} transition>
                                    {menuItemsData.map((item: any, index) => {
                                        return (<><MenuItem
                                            key={index}
                                            className="list-item"
                                            draggable
                                            onDragStart={(e: any) => (dragItem.current = index)}
                                            onDragEnter={(e: any) => (dragOverItem.current = index)}
                                            onDragEnd={handleSort}
                                            onDragOver={(e: any) => e.preventDefault()}>
                                            <ListItemIcon>
                                                {/* <Logout fontSize="small" /> */}
                                                <DragIndicatorIcon fontSize="small" />
                                                <CheckBoxIcon
                                                    onClick={item.onClickCloseMenuItem}
                                                    id={item.idForClose}
                                                    fontSize="small"
                                                    style={{ display: item.state ? 'block' : 'none' }}
                                                />
                                                {/* remove above icon and use below icon for when user unchecks the option */}
                                                <CheckBoxOutlineBlankIcon
                                                    onClick={item.onClickOpenMenuItem}
                                                    fontSize="small"
                                                    id={item.idForOpen}
                                                    style={{ display: item.state ? 'none' : 'block' }}
                                                />
                                            </ListItemIcon>
                                            <span style={{ color: item.state ? '#303030' : '#bbb' }}>
                                                {item.content}
                                            </span>
                                        </MenuItem>
                                        </>)
                                    })}
                                </Menu>
                            </StyledTableCell>
                            {/* Table Heads */}
                            {columns.map((head: any, index: any) => (
                                <StyledTableCell
                                    key={`${head.headTrans}${index}`}
                                    align="right"
                                >
                                    <div className="th_wrapper">
                                        <button
                                            id="hiding"
                                            name={t<string>(`tables.${tableName}.${head.headTrans}`)}
                                            className="voidBtn"
                                            // onClick={sort.bind(null, head)}
                                            key={`clickkey-${head.headTrans}${index}`}
                                        >
                                            {t<string>(`tables.${tableName}.${head.headTrans}`)}
                                            <span id='hiding-part'>
                                                {' '}
                                                {head && head.filter ? (
                                                    <MultiSelect
                                                        filterAction={filterAction}
                                                        filterData={head.filterData}
                                                        id={`filter-${head.headTrans}${index}`}
                                                        columns={columns}
                                                        data={data}
                                                    />
                                                ) : null}{' '}
                                            </span>
                                            <CustomerLeFilter sortDataAscending={(e: any)=>onSortAscending(e,head)} sortDataDescending={(e : any)=>onSortDescending(e,head)}  idForSearch={`input-${index}`} onChangeForSearch={(e: any)=>onSearch(e,head,index)}/>
                                            <button onClick={(e: any)=>onSortAscending(e,head)}>sort</button>
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
                    <TableBody
                        data-testid="table-body-element"
                        className="TableBody"
                        id="table-body-element"
                    >
                        {tableData &&
                          tableData.map((item: any, index: any) => (
                                <TableRow
                                    style={
                                        isHover == true
                                            ? item.icon == 'overdue'
                                                ? boxStyle
                                                : item.icon == 'pending'
                                                    ? pendingStyle
                                                    : item.icon == 'completed'
                                                        ? completedStyle
                                                        : noStyle
                                            : noStyle
                                    }
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    id="table-data"
                                    key={item.id}
                                >
                                    <TableCell component="th" scope="row">
                                        <a href="/">
                                            <a href="#/">
                                                {item.icon == 'overdue' && (
                                                    <span className="overdue">
                                                        <Overdue />
                                                    </span>
                                                )}
                                                {item.icon == 'pending' && (
                                                    <span className="pending">
                                                        <UnpaidInvoice />
                                                    </span>
                                                )}
                                                {item.icon == 'completed' && (
                                                    <span className="completed">
                                                        <PaidInvoice />
                                                    </span>
                                                )}
                                            </a>
                                        </a>
                                    </TableCell>
                                    {columns.map((clm: any, index: any) => (
                                        <>
                                            <Tooltip
                                                title={
                                                    item[clm.eleName == 'Tata_Entity' ? clm.eleName : '']
                                                }
                                            >
                                                <TableCell
                                                    id="td-element"
                                                    className="table-cell-tooltip"
                                                    key={`tbl-clm${index}`}
                                                    style={{ width: 160 }}
                                                    align="right"
                                                >
                                                    {item[clm.eleName]}{' '}
                                                </TableCell>
                                            </Tooltip>
                                        </>
                                    ))}
                                    <TableCell style={{ width: 160 }} align="right">
                                        <ul className="actionButtons">
                                            <Tooltip title="VIEW INVOICE">
                                                <button
                                                    className="actionButton__item"
                                                    onClick={() => handleViewPdf(item)}
                                                >
                                                    <span>
                                                        {' '}
                                                        <Pdf />{' '}
                                                    </span>
                                                </button>
                                            </Tooltip>
                                            <Tooltip title="RAISE A TICKET">
                                                <button
                                                    className="actionButton__item"
                                                    onClick={(e) => {
                                                        handleShow()
                                                    }}
                                                >
                                                    <span>
                                                        <Ticket />
                                                    </span>
                                                </button>
                                            </Tooltip>
                                            <DownloadCdr item={item} />
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
                <Pagination
                    onChange={changePage}
                    page={page}
                    className="tablePag"
                    count={totalCount}
                    variant="outlined"
                    shape="rounded"
                />
            </Stack>
        </>
    )
}

export default DataTable
