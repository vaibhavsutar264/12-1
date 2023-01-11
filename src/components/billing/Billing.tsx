import { useEffect, useState } from 'react'
import RaiseTicket from '../common/elements/RaiseTicket'
import DataTable from '../common/tables/DataTables'
import { BreadCrums } from '../common/elements/BreadCrum'
import { PageSearch } from '../common/elements/PageSearch'
import { breadCrums, dataTables } from '../../utils/constants'
import {
    useDispatch as useAppDispatch,
    useSelector
} from '../../redux/store'
import { cardFilter, ChangePageBilling, viewBillingInvoice, downloadBillingInvoice, downloadBillingInvoiceCDR, filterData, loadInvoices, searchData, sortData, ClmSearch, removeCLmFilter, clearAllfilter } from '../../redux/slices/billingSlice'
import useLocales from '../../hooks/useLocales'
import Invoice from '../common/icons/invoice'
import Overdue from '../common/icons/overdue'
import PaidInvoice from '../common/icons/paidInvoice'
import UnpaidInvoice from '../common/icons/unpaidInvoice'
import Card from '../common/elements/card'
import { getCardCount } from '../../utils/helpers'
import { getAcDetails } from '../../redux/slices/accountSlice'
import moment from 'moment'
import ModalTicketError from '../modals/ModalTicketError'


export const Billing = ({ toggleTheme }: { toggleTheme: any }) => {

    const { PageData = [], MasterData = [], total, page, take ,filterValue} = useSelector((state: any) => state.billing || {});
    const { dashBoardWidth } = useSelector((state: any) => state.common);

    const [dateRange, setDateRange] = useState<any>([null, null]);
    const getDate = (dateRange: any) => {
        const s = `${new Date(dateRange).toLocaleDateString()}`.split("/");
        console.log(`${new Date(dateRange).toLocaleDateString()}`);
        return `${s[2]}-${s[0]}-${s[1]}`
    }
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(loadInvoices({ searchValue: "", fromDate: getDate(dateRange[0]), toDate: getDate(dateRange[1]) }))
    }, [dispatch, dateRange])
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

    const firstElement = document.getElementById(
        'first'
    )
    const secondElement = document.getElementById(
        'second'
    )
    const thirdElement = document.getElementById(
        'third'
    )
    const forthElement = document.getElementById(
        'fourth'
    )
    const mainElement = document.getElementById(
        'main-div'
    )

    // console.log(cards[0])
    // cards.map((q: any, i: any) => console.log(q))
    // console.log(mainElement?.firstChild?.firstChild)

    //     const nodes = document.getElementById('main-div')?.childNodes;
    // for(let i=0; i<4; i++) {
    //     if(nodes){
    //     if (nodes[i].nodeName.toLowerCase() == 'div') {
    //          nodes[i]. = 'red';
    //      }
    //     }
    // }

    const btnContainer = document.getElementById("main-div");

    // Get all buttons with class="btn" inside the container
    if (btnContainer) {
        const btns = btnContainer.getElementsByClassName("cardType__1");
        if (btns !== undefined) {
            for (let i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function () {
                    const current = document.getElementsByClassName("active");
                    current[0].classList.remove('active')
                    btns[i].classList.add('active')
                    //     $('.blue').removeClass('red')
                    // $(this).addClass('red');
                    //     current[0].className = current[0].className.replace(" active", "");
                    //     btns[i].className = "cardType__1 active";
                });
            }
        }
    }
    // Loop through the buttons and add the active class to the current/clicked button

    // if(btns !== undefined){
    // // Loop through the buttons and add the active class to the current/clicked button
    // for (let i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", function() {
    //       const current = document.getElementsByClassName("active");

    //       // If there's no active class
    //       if (current.length > 0) {
    //         current[0].className = current[0].className.replace(" active", "");
    //       }

    //       // Add the active class to the current/clicked button
    //       btns[i].className += " active";
    //     });
    //   }
    // }

    useEffect(() => {
        const mainDiv = document.getElementById('main-div-element')
        if(mainDiv){
        mainDiv.style.marginLeft = '86px'
        }
    }, [])
    

    return (
        <div >
            <RaiseTicket handleShow={handleShow} showIt={showIt} />
            <div className="dashboard__content" id="main-div-element" style={{
                // width: `${window.innerWidth - +`${dashBoardWidth}`.split('p')[0]}px`,
                marginLeft: `${dashBoardWidth}`, width: `calc(100% - ${dashBoardWidth}.split('p')[0]}px`
            }}>
                <div className="content__header">
                    <BreadCrums data={breadCrums.BILLING} />
                    <PageSearch searchFn={searchData} searchPlaceholder='searchInvoiceNoEntity' />
                </div>
                <div id="main-div" className="card-wrapper-1">
                    {cards.map((q: any, i: any) => <Card data={q} key={i} />)}
                </div >
                <DataTable
                    handledownloadViewpdf={viewBillingInvoice}
                    handledownloadPdf={downloadBillingInvoice}
                    handledownloadCdrPdf={downloadBillingInvoiceCDR}
                    handleShow={handleShow}
                    pageAction={ChangePageBilling}
                    sortAction={sortData}
                    filterAction={filterData}
                    clearFilterClm={removeCLmFilter}
                    filterValues={filterValue}
                    ClmSearch={ClmSearch}
                    Total={total}
                    page={page}
                    take={take}
                    setDateRange={setDateRange}
                    dateRange={dateRange}
                    clearAllfilter={clearAllfilter}
                    TableData={dataTables.BILLING(PageData, MasterData)} />
            </div>
            {/* <ModalTicketError /> */}
        </div>
    )
}

export default Billing
