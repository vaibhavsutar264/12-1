import React, { useEffect } from 'react'
import DateRange from './DateRange'

import { CSVLink } from 'react-csv'
import { typeVar, billingKeys } from '../../../utils/constants'
import useLocales from '../../../hooks/useLocales'
import Export from '../icons/export'
import { downloadBillingInvoice } from '../../../redux/slices/billingSlice'
import { dispatch } from '../../../redux/store'

export const Actions = ({
  data,
  pagination,
  changeTake,
}: {
  data: []
  pagination: any
  changeTake: any
}) => {
  const { t } = useLocales()
  const modifyTake = (e: any) => {
    changeTake(+e.target.value)
  }

  useEffect(() => {
    const l: any = document.getElementById('PageNumberInput')
    l.value = pagination.take
  })
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

  const ExportToCsv = {
    filename: 'InvoicesData.csv',
    headers: headers,
    data: data,
  }

  const handleDownload = (title: any) => {
    dispatch(downloadBillingInvoice(title))
  }

  return (
    <div className="action__elements">
      <div className="action__elementItem">
        <div className="tableRow__show">
          <div className="selectRow">
            <select name="" id="PageNumberInput" onChange={modifyTake}>
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
      {/* <div className="action__elementItem">{t<string>('datePicker')}</div> */}
      <div className="action__elementItem" id="date-picker">
        <DateRange />
      </div>
      <div className="action__elementItem">
        <a href="/" className="iconCta">
          <span className="icon">
            <Export />
          </span>
          <CSVLink {...ExportToCsv} className="text" data-testid="csv-link">
            {t<string>('exportToCsv')}
          </CSVLink>
        </a>
      </div>
      {/* <button
        className="actionButton__item"
        onClick={(e) => handleDownload('image.png')}
      >
        Download
      </button> */}
    </div>
  )
}
