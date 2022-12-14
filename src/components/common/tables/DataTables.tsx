import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
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
import Time from '../icons/Time'
import Pdf from '../icons/Pdf'
import Ticket from '../icons/ticket'
import Download from '../icons/download'
import { Actions } from './Actions'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { getPageParms, setUlrParms } from '../../../utils/helpers'
import { useDispatch as useAppDispatch } from '../../../redux/store'
import { Link } from 'react-router-dom'
import MultiSelect from '../elements/multiSelect'

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
    handledownloadViewpdf
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
        dispatch(pageAction(page, take))
        setUlrParms(page, take)
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

    const handleViewPdf = (data: any) => {
        dispatch(handledownloadViewpdf(data))
    }

    return (
        <>
            <Actions data={data} pagination={{ take, Total }} changeTake={(e: any) => { changeTake(e) }} />
            <p data-testid="para-element"></p>
            <TableContainer
                component={Paper}
                className="table__Container"
            >
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead className="TableHead">
                        <TableRow id="table-head">
                            <StyledTableCell>
                                <a href="/">
                                    <MoreVertIcon />
                                </a>{' '}
                            </StyledTableCell>

                            {/* Table Heads */}
                            {columns.map((head: any, index: any) => (
                                <StyledTableCell key={`${head.headTrans}${index}`} align="right">
                                    <div className="th_wrapper">
                                        <button className='voidBtn' onClick={sort.bind(null, head)} key={`clickkey-${head.headTrans}${index}`} >
                                            {t<string>(`tables.${tableName}.${head.headTrans}`)}
                                        </button>
                                        <span>
                                            {' '}
                                            {head && head.filter ? <MultiSelect filterAction={filterAction} filterData={head.filterData} id={`filter-${head.headTrans}${index}`} /> : null}
                                            {' '}
                                        </span>
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
                                    {' '}
                                    <a href="/">
                                        <Time />
                                    </a>{' '}
                                </TableCell>
                                {columns.map((clm: any, index: any) => (
                                    <TableCell key={`tbl-clm${index}`} style={{ width: 160 }} align="right">
                                        {item[clm.eleName]}{' '}
                                    </TableCell>
                                ))}
                                <TableCell style={{ width: 160 }} align="right">
                                    <ul className="actionButtons">
                                        <button className="actionButton__item" onClick={() => handleDownload(item)} >
                                            <span><Download /></span>
                                        </button>
                                        <button className="actionButton__item" onClick={(e) => { handleShow() }}>
                                            <span><Ticket /></span>
                                        </button>
                                        <button className="actionButton__item" onClick={() => handleViewPdf(item)}>
                                            <span> <Pdf /> </span>
                                        </button>
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
