import { useEffect, useState } from 'react'
import RaiseTicket from '../common/elements/RaiseTicket'
import { SideBar } from '../common/elements/SideBar'
import DataTable from '../common/tables/DataTables'
import { BreadCrums } from '../common/elements/BreadCrum'
import { PageSearch } from '../common/elements/PageSearch'
import { breadCrums, dataTables } from '../../utils/constants'
import {
    useDispatch as useAppDispatch,
    useSelector
} from '../../redux/store'
import { cardFilter, ChangePageBilling, downloadBillingInvoice, downloadBillingInvoiceCDR, filterData, loadInvoices, searchData, sortData } from '../../redux/slices/billingSlice'
import useLocales from '../../hooks/useLocales'
import Invoice from '../common/icons/invoice'
import Overdue from '../common/icons/overdue'
import PaidInvoice from '../common/icons/paidInvoice'
import UnpaidInvoice from '../common/icons/unpaidInvoice'
import Card from '../common/elements/card'
import { getCardCount } from '../../utils/helpers'

export const Billing = ({ toggleTheme }: { toggleTheme: any }) => {

    const { isError, isLoading, isSuccess, PageData = [], MasterData = [], total, page, take } = useSelector((state: any) => state.billing);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(loadInvoices({ searchValue: "" }))
    }, [dispatch])
    const { t } = useLocales()
    const cards = [
        { titel: t('allInvoice'), value: getCardCount(MasterData, 'Payment_Status', ''), icon: <Invoice />, action: cardFilter("Payment_Status", "") },
        { titel: t('overdue'), value: getCardCount(MasterData, 'Payment_Status', 'overdue'), icon: <Overdue />, action: cardFilter("Payment_Status", "overdue") },
        { titel: t('unpaidInvoices'), value: getCardCount(MasterData, 'Payment_Status', 'pending'), icon: <UnpaidInvoice />, action: cardFilter("Payment_Status", "pending") },
        { titel: t('paidInvoices'), value: getCardCount(MasterData, 'Payment_Status', 'completed'), icon: <PaidInvoice />, action: cardFilter("Payment_Status", "completed") },
    ]

    const [showIt, setShowIt] = useState(false);
    const handleShow = () => {
        setShowIt(!showIt);
    };

    const [bDWidth, setBDWidth] = useState('300px');
  const handleBDWidth = () => {
    const currentWidth = bDWidth == '300px'? '130px' : '300px';
    setBDWidth(currentWidth);
  };


    return (
        <div className="dashboard__wrapper">
            <RaiseTicket handleShow={handleShow} showIt={showIt} />
            <SideBar toggleTheme={toggleTheme} handleBDWidth={handleBDWidth} />
            <div className="dashboard__content" style={{ width: `calc(100% - ${bDWidth})`, marginLeft: `${bDWidth}` }}>
                <div className="content__header">
                    <BreadCrums data={breadCrums.BILLING} />
                    <PageSearch searchFn={searchData} />
                </div>
                <div className="card-wrapper-1">
                    {cards.map((q: any, i: any) => <Card data={q} key={`card-warpper${i}`} />)}
                </div >
                <DataTable
                    handledownloadViewpdf={downloadBillingInvoice}
                    handledownloadPdf={downloadBillingInvoice}
                    handleShow={handleShow}
                    pageAction={ChangePageBilling}
                    sortAction={sortData}
                    filterAction={filterData}
                    Total={total}
                    page={page}
                    take={take}
                    TableData={dataTables.BILLING(PageData, MasterData)} />
            </div>
        </div>
    )
}

export default Billing
