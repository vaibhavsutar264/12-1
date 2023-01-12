import React, { useEffect, useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { CSVLink } from 'react-csv'
import { typeVar, billingKeys } from '../../../utils/constants'
import useLocales from '../../../hooks/useLocales'
import Export from '../icons/export'
import RotateRightIcon from '@mui/icons-material/RotateRight';
import CheckIcon from '@mui/icons-material/Check';
import { DateSelect } from './DateSelect';
export const Actions = ({
    data,
    pagination,
    changeTake,
    setDateRange,
    dateRange,
}: any) => {
    const { t } = useLocales()
    const modifyTake = (e: any) => {
        changeTake(+e.target.value)
    }
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(false)
    const [dataStored, setDataStored] = useState(data)

    // console.log(data)
    useEffect(() => {
        const l: any = document.getElementById('PageNumberInput')
        l.value = pagination.take
        setDataStored(dataStored)
    }, [data])
    const headers = [
        { label: 'Invoice No.', key: billingKeys.INVOICE_NUMBER },
        { label: 'Customer LE', key: billingKeys.CUSTOMER_LE },
        { label: 'Tata Entity', key: billingKeys.TATA_ENTITY },
        { label: 'PO number', key: billingKeys.PO_NUMBER },
        { label: 'Payment Status', key: billingKeys.PAYMENT_STATUS },
        { label: 'Invoice amt', key: billingKeys.INVOICE_AMOUNT },
        { label: 'Invoice date', key: billingKeys.INVOICE_DATE },
        { label: 'Due date', key: billingKeys.DUE_DATE },
    ]

    const downloadDetails = async () => {
        if (!loading) {
            setLoading(true)
        }
        if (await data !== null) {
            setTimeout(() => {
                setDataStored(data)
                setLoading(false)
                setCompleted(true)
            }, 1000);
            setTimeout(() => {
                // setDataStored(data)
                // setLoading(false)
                setCompleted(false)
            }, 2000);
        }
        return dataStored
    }
    const ExportToCsv = {
        filename: 'InvoicesData.csv',
        data: dataStored !== null && dataStored
    }
    return (
        <div className="action__elements">
            <div className="action__elementItem">
                <div className="tableRow__show">
                    <div className="selectRow">
                        <select name="" id="PageNumberInput" onChange={modifyTake}>
                            <option value="5">{t<string>('showing')} 5</option>
                            <option value="10">{t<string>('showing')} 10</option>
                            <option value="15">{t<string>('showing')} 15</option>
                            <option value="25">{t<string>('showing')} 25</option>
                        </select>
                    </div>
                    <div className="outOfRow">
                        <span id="results">
                            {t<string>('of')} {pagination.Total} {t<string>('results')}
                        </span>
                    </div>
                </div>
            </div>
            <div className="action__elementItem" id="date-picker">
                <DateSelect setDateRange={setDateRange} dateRange={dateRange} />
            </div>
            <div className="action__elementItem">
                <span className="iconCta">
                    <span className="icon">
                        {loading ? <RotateRightIcon /> : completed ? <CheckIcon /> : <Export />}
                    </span>
                    {dataStored && (
                        <CSVLink {...ExportToCsv} className="text" asyncOnClick={true} onClick={downloadDetails} data-testid="csv-link">
                            {loading ? 'EXPORTING' : completed ? 'EXPORT COMPLETE' : t<string>('exportToCsv')}
                        </CSVLink>)}
                </span>
            </div>
        </div>
    )
}
