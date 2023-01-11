import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import {
    ListItemIcon,
    Tooltip,
    Button,
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
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
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
import CDRError from './loader-and-snackbar/CDRError'
import CDRPreparing from './loader-and-snackbar/CDRPreparing'
import CDRDownloading from './loader-and-snackbar/CDRDownloading'
import CDRDownloaded from './loader-and-snackbar/CDRDownloaded'
import InvoiceDownloaded from './loader-and-snackbar/InvoiceDownloaded'
import InvoiceDownloading from './loader-and-snackbar/InvoiceDownloading'
import InvoiceError from './loader-and-snackbar/InvoiceError'
import InvoicePreparing from './loader-and-snackbar/InvoicePreparing'
import { CSSProperties } from 'styled-components'

// import { Menu, MenuItem, MenuButton, ClickEvent } from '@szhsin/react-menu';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { getValue } from '@testing-library/user-event/dist/utils';
import { Menu as TbMenu, MenuItem as TbMenuItem, MenuButton, ClickEvent } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

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

const activeStyle = {
    border: '2px solid #3B6FED'
}

const DataTable = ({
    TableData,
    sortAction,
    Total,
    clearFilterClm,
    pageAction,
    take,
    filterAction,
    ClmSearch,
    page,
    clearAllfilter,
    handleShow,
    handledownloadPdf,
    handledownloadCdrPdf,
    setDateRange,
    dateRange,
    handledownloadViewpdf,
    filterValues
}: any) => {
    const { t } = useLocales()
    const { data, columns, tableName, allMasterData } = TableData
    const dispatch = useAppDispatch()
    const totalCount = Math.ceil(Total / take)
    const [sortdir, setSortdir]: any = useState(null)

    const [allData, setAllData] = useState(data)
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(false)
    const [loadingInvoice, setLoadingInvoice] = useState(false)
    const [completedInvoice, setCompletedInvoice] = useState(false)
    const [errorinDownload, setErrorinDownload] = useState(false)
    const [errorinDownloadInvoice, setErrorinDownloadInvoice] = useState(false)

    function useHover(
        styleOnHover: CSSProperties,
        styleOnNotHover: CSSProperties = {}
    ) {
        const [style, setStyle] = React.useState(styleOnNotHover)
        const onMouseEnter = () => setStyle(styleOnHover)
        const onMouseLeave = () => setStyle(styleOnNotHover)
        return { style, onMouseEnter, onMouseLeave }
    }
    const hover = useHover({ borderColor: 'green', userSelect: 'none' })

    const changeTake = (take: any) => {
        updateData(page, take)
    }

    const changePage = (da: any, pageNumber: any) => {
        updateData(pageNumber, take)
    }

    const updateData = (page: any, take: any) => {
        // console.log(Total, page, take)
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

    // const handleDownload = (data: any) => {
    //     dispatch(handledownloadPdf(data))
    // }
    // const handleDownloadCdr = (data: any) => {
    //     dispatch(handledownloadCdrPdf(data))
    // }

    const handleViewPdf = (data: any) => {
        dispatch(handledownloadViewpdf(data))
    }

    // Vertical Dropdown code
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => { setAnchorEl(null) }

    // Handle Tooltip closing & opening
    const [opened, setOpen] = React.useState(false)

    const handleTooltipClose = () => {
        setOpen(false)
    }

    const handleTooltipOpen = () => {
        setOpen(true)
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




    const result1: any[] = []
    const [tableData, setTableData] = useState(data)
    const onSearch = (e: any, head: any, index: any) => {
        const filterData = tableData.filter((obj: any) =>
            obj[head['eleName']].toString().includes(e.target.value)
        )
        setTableData(filterData)
    }

    useEffect(() => {
        setTableData(data)
    }, [data])

    const onSortAscending = (e: any, head: any, index: any) => {

        if (index == 0 || index == 3) {
            const sortedDataAscending = [...data].sort(
                (a: any, b: any) => a[head['eleName']] - b[head['eleName']]
            )
            setTableData(sortedDataAscending)
        } else {
            const sortedDataAscending = [...data].sort((a: any, b: any) =>
                a[head['eleName']].localeCompare(b[head['eleName']])
            )
            setTableData(sortedDataAscending)
        }
    }
    const onSortDescending = (e: any, head: any, index: any) => {
        if (index == 0 || index == 3) {
            const sortedDataDescending = [...data].sort(
                (a: any, b: any) => b[head['eleName']] - a[head['eleName']]
            )
            setTableData(sortedDataDescending)
        } else {
            const sortedDataDescending = [...data].sort((a: any, b: any) =>
                b[head['eleName']].localeCompare(a[head['eleName']])
            )
            setTableData(sortedDataDescending)
        }
    }

    const clearFilter = () => {
        setTableData(data)
    }
    const clearFilterMasterData = () => {
        setTableData(data)
    }

    const downloadCompleteShowing = async () => {
        if (loading) {
            if (await !loading) {
                return <CDRDownloaded />
            } else {
                return null
            }
        }
    }

    const [columnsDropdown, setColumnsDropdown] = useState(result1);



    useEffect(() => {
        setColumnsDropdown(columns);
    }, [])

    const allowDrop = (ev: any) => {
        ev.preventDefault();
    }

    const drag = (ev: any, item: any, index: any) => {
        ev.dataTransfer.setData("columnData", JSON.stringify({ ...item, index }));
    }

    const drop = (ev: any) => {
        ev.preventDefault();
        const data = JSON.parse(ev.dataTransfer.getData("columnData"));
        if (ev.target.id) {
            const draggedPosition = ev.target.id.split('-');
            // let draggedPosition = ;      
            const col = [...columnsDropdown].filter((val, ind) => ind !== data['index']);
            delete data['index'];
            col.splice(parseInt(draggedPosition[1]), 0, data);
            setColumnsDropdown(col);
        }
    }

    const [drops, setdrops] = useState('');
    const [hiddenClms, SetHiddentClmns] = useState<any>([]);

    const changeActive = (item: any) => {
        const i = hiddenClms.indexOf(`${item}`);
        console.log(hiddenClms);
        if (i == -1) {
            SetHiddentClmns((s: any) => [...s, item]);
        } else {
            const m = hiddenClms;
            m.splice(i, 1);
            SetHiddentClmns((s: any) => m);
        }
    }


    const getValue = () => {
        return 'vdf'
    }
    return (
        <>
            {/* <CustomerLeFilter /> */}
            {/* <EntityFilter /> */}
            {/* <InvoiceNoFilter /> */}
            {/* <PoNoFilter /> */}
            {/* <InvoiceAmtFilter />
            {/* <StatusFilter /> */}
            {/* <Loader /> */}
            {/* <CDRError /> */}
            {errorinDownload ? <CDRError /> : null}
            {errorinDownloadInvoice ? <InvoiceError /> : null}
            {/* <CDRPreparing /> */}
            {loading ? <CDRDownloading /> : null}
            {completed ? <CDRDownloaded /> : null}
            {loadingInvoice ? <InvoiceDownloading /> : null}
            {completedInvoice ? <InvoiceDownloaded /> : null}
            {downloadCompleteShowing}
            {/* {loading ? !loading? <CDRDownloaded /> : null: null} */}
            {/* <CDRDownloaded /> */}
            <Actions
                setDateRange={setDateRange}
                dateRange={dateRange}
                data={allMasterData}
                pagination={{ take, Total }}
                changeTake={(e: any) => {
                    changeTake(e)
                }}
            />
            <TableContainer component={Paper} className="table__Container buildfix4">
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead className="TableHead" id="table-head-element-display-fix">
                        <TableRow id="table-head">
                            <StyledTableCell>
                                <TbMenu
                                    menuButton={
                                        <MenuButton id="border-removing">
                                            <MoreVertIcon />
                                        </MenuButton>
                                    }

                                    transition
                                    onDragOver={allowDrop} onDrop={drop}
                                >
                                    {columns.map((item: any, index: any) => {
                                        return (
                                            <>
                                                <TbMenuItem
                                                    key={index}
                                                    className="list-item"
                                                    draggable={true}
                                                    onDragStart={(ev) => drag(ev, item, index)}
                                                    id={`${item.eleName}-${index}`}
                                                >
                                                    <ListItemIcon>
                                                        <DragIndicatorIcon fontSize="small" />
                                                        {hiddenClms.includes(item.eleName) ? (<CheckBoxOutlineBlankIcon
                                                            onClick={(e) => {
                                                                changeActive(item.eleName)
                                                            }}
                                                            fontSize="small"
                                                        />) : (
                                                            <CheckBoxIcon
                                                                onClick={(e) => changeActive(item.eleName)}
                                                                fontSize="small"
                                                            />
                                                        )}
                                                    </ListItemIcon>
                                                    <Button
                                                        onClick={(e) => {
                                                            changeActive(item.eleName)
                                                        }}
                                                    >
                                                        {item.headTrans}
                                                    </Button>
                                                </TbMenuItem>
                                            </>
                                        )
                                    })}
                                </TbMenu>
                            </StyledTableCell>
                            {/* Table Heads */}
                            {columns.map((head: any, index: any) => (
                                !hiddenClms.includes(head.eleName) && <StyledTableCell
                                    key={`${head.headTrans}${index}`}
                                    align="right"
                                    sx={{minWidth:'160px'}}
                                >
                                    <div className="th_wrapper">
                                        <button
                                            id="hiding"
                                            name={t<string>(`tables.${tableName}.${head.headTrans}`)}
                                            className="voidBtn"
                                            key={`clickkey-${head.headTrans}${index}`}
                                        >
                                            {t<string>(`tables.${tableName}.${head.headTrans}`)}
                                            {(head.sort || head.search || head.filter) && (
                                                <>
                                                    <div className='customer-le-menu'>
                                                        <Button
                                                            id="basic-button"
                                                            aria-controls={drops == head.headTrans ? 'basic-menu' : undefined}
                                                            aria-haspopup="true"
                                                            aria-expanded={drops == head.headTrans ? 'true' : undefined}
                                                            onClick={(e) => {
                                                                handleClick(e);
                                                                if (drops == head.headTrans) {
                                                                    setdrops('')
                                                                } else {
                                                                    setdrops(head.headTrans);
                                                                    setTimeout(() => {
                                                                        if (head.search) {
                                                                            const m: any = document.getElementById(`${head.headTrans}${tableName}${head.eleName}`);
                                                                            const p = filterValues.filter((g: any) => g.element == head.eleName);

                                                                            if (p.length > 0) {
                                                                                if (p[0].values[0]) {
                                                                                    m.value = p[0].values[0]
                                                                                }
                                                                            }
                                                                        }

                                                                        if (head.filter) {
                                                                            const p = filterValues.filter((g: any) => g.element == head.filterData?.element);
                                                                            if (p.length > 0) {
                                                                                p[0].values.map((f: any) => {
                                                                                    const m: any = document.getElementById(`${head.eleName}${f}status-check-box`);
                                                                                    m.checked = true

                                                                                })
                                                                            }
                                                                        }
                                                                    }, 300);

                                                                }
                                                            }}
                                                            startIcon={<UnfoldMoreIcon />}
                                                        >
                                                        </Button>
                                                        <Menu
                                                            id={`basic-menu`}
                                                            anchorEl={anchorEl}
                                                            open={drops == head.headTrans}
                                                            onClose={() => {
                                                                handleClose();
                                                                if (drops == head.headTrans) {
                                                                    setdrops('')
                                                                } else {
                                                                    setdrops(head.headTrans);
                                                                }
                                                            }}
                                                            MenuListProps={{
                                                                'aria-labelledby': 'basic-button',
                                                            }}
                                                        >
                                                            {head.search ? <MenuItem>
                                                                <input
                                                                    id={`${head.headTrans}${tableName}${head.eleName}`}
                                                                    onInput={(e: any) => {
                                                                        dispatch(ClmSearch(head.eleName, e.target.value))
                                                                    }} type='search' placeholder='search' className='inside_search' />
                                                            </MenuItem> : null}
                                                            {head.filter &&
                                                                <div className='FilterItems'>
                                                                    {head.filterData?.values && head.filterData.values.map((w: any, i: any) => {
                                                                        return <MenuItem className='clkIgnr' key={`eleCheck-${w}-${i}`}>
                                                                            <input id={`${head.eleName}${w}status-check-box`} onChange={(e) => {
                                                                                dispatch(filterAction(head.filterData?.element, w, e.target.checked))
                                                                            }} className='clkIgnr check-Box status-check-box' type="checkbox" />
                                                                            <label htmlFor={`${head.eleName}${w}status-check-box`} className='clkIgnr span-label'>{w}</label>
                                                                        </MenuItem>
                                                                    })}
                                                                </div>
                                                            }
                                                            {head.sort ? <MenuItem onClick={() => { dispatch(sortAction(head, 1)) }} ><ArrowUpwardRoundedIcon />Sorting Ascending (A-Z)</MenuItem> : null}
                                                            {head.sort ? <MenuItem onClick={() => { dispatch(sortAction(head, -1)) }} ><ArrowDownwardRoundedIcon />Sorting Descending (Z-A)</MenuItem> : null}
                                                            <MenuItem onClick={() => {
                                                                dispatch(clearFilterClm(head.eleName))
                                                                if (head.search) {
                                                                    const m: any = document.getElementById(`${head.headTrans}${tableName}${head.eleName}`);
                                                                    m.value = ''
                                                                }
                                                                if (head.filter) {
                                                                    head.filterData.values.map((w: any, i: any) => {
                                                                        const m: any = document.getElementById(`${head.eleName}${w}status-check-box`);
                                                                        m.checked = false
                                                                    })
                                                                }
                                                            }}>CLEAR</MenuItem>
                                                        </Menu>
                                                    </div>
                                                </>
                                            )}
                                            {/* <button onClick={(e: any)=>onSortAscending(e,head)}>sort</button> */}
                                        </button>
                                    </div>
                                </StyledTableCell>
                            ))}
                            <StyledTableCell align="right">
                                <Button onClick={()=>{dispatch(clearAllfilter())}} className="th_wrapper">
                                    <span className='clear-filters'>Clear all filters</span>
                                </Button>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {/* Table Body */}
                    <TableBody
                        data-testid="table-body-element"
                        className="TableBody"
                        id="table-body-element"
                    >
                        {data &&
                            data.map((item: any, index: any) => (
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
                                        !hiddenClms.includes(clm.eleName) &&
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
                                                    <span style={{ width: '160px', display: 'block' }}>{item[clm.eleName]}{' '}</span>
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
                                            <DownloadCdr
                                                loading={loading}
                                                setLoading={setLoading}
                                                loadingInvoice={loadingInvoice}
                                                setLoadingInvoice={setLoadingInvoice}
                                                completed={completed}
                                                setCompleted={setCompleted}
                                                completedInvoice={completedInvoice}
                                                setCompletedInvoice={setCompletedInvoice}
                                                setErrorinDownload={setErrorinDownload}
                                                setErrorinDownloadInvoice={setErrorinDownloadInvoice}
                                                item={item}
                                            />
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
