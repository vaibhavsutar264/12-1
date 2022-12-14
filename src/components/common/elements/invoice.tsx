import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useSelector } from '../../../redux/store';
import { dataTables } from '../../../utils/constants';
import Download from '../icons/download';
import Pdf from '../icons/Pdf';
import Ticket from '../icons/ticket';
import Time from '../icons/Time';
const Invoice = (TableData: any) => {
    const { isError, isLoading, isSuccess, PageData = [], invoiceData = [], total, page, take } = useSelector((state: any) => state.billing);
    const { data, columns, tableName } = dataTables.BILLING(PageData)
    const { id } = useParams();
    return (
        <div>
            {data && data.filter((item: any) => item.id == id).map((item: any, index: any) => (
                <>
                    <div>{item.invoiceNumber}</div>
                    <TableRow key={item.id}>
                        <TableCell component="th" scope="row">
                            {' '}
                            <a href="/">
                                <Time />
                            </a>{' '}
                        </TableCell>
                        <TableCell component="th" scope="row">
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {item.customerLe}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {item.tataEntity}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {item.poNumber}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {item.paymentStatus}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {item.invoiceAmount}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {item.invoiceDate}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {item.dueDate}
                        </TableCell>
                    </TableRow>
                </>
            ))}
        </div>
    )
}

export default Invoice
