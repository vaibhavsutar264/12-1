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
import { cardFilter, ChangePageBilling, viewBillingInvoice, downloadBillingInvoice, downloadBillingInvoiceCDR, filterData, loadInvoices, searchData, sortData } from '../../redux/slices/billingSlice'
import useLocales from '../../hooks/useLocales'
import Invoice from '../common/icons/invoice'
import Overdue from '../common/icons/overdue'
import PaidInvoice from '../common/icons/paidInvoice'
import UnpaidInvoice from '../common/icons/unpaidInvoice'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Card from '../common/elements/card'
import { getCardCount } from '../../utils/helpers'
import { getAcDetails } from '../../redux/slices/accountSlice'
import moment from 'moment'

export const UserManagement = ({ toggleTheme }: { toggleTheme: any }) => {

    const { PageData = [], MasterData = [], total, page, take } = useSelector((state: any) => state.billing || {});
    const { dashBoardWidth } = useSelector((state: any) => state.common);
    const [startDate, setStartDate] = useState(moment().subtract(1, "months").format('YYYY-MM-DD'));
    const [endDate, setEndDate] = useState(moment().format('YYYY-MM-DD'));

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(loadInvoices({ searchValue: "", startDate: startDate, endDate: endDate }))
        dispatch(getAcDetails())
    }, [dispatch, endDate, startDate])
    const { t } = useLocales()
    const cards = [
        { titel: t('allUsers'), value: getCardCount(MasterData, 'Payment_Status', ''), icon: <Groups2OutlinedIcon />, action: cardFilter("Payment_Status", "") },
        { titel: t('active'), value: getCardCount(MasterData, 'Payment_Status', 'overdue'), icon: <CheckCircleOutlinedIcon />, action: cardFilter("Payment_Status", "overdue") },
        { titel: t('inactive'), value: getCardCount(MasterData, 'Payment_Status', 'pending'), icon: <DoNotDisturbOnOutlinedIcon />, action: cardFilter("Payment_Status", "pending") },
        { titel: t('invited'), value: getCardCount(MasterData, 'Payment_Status', 'completed'), icon: <AccessTimeOutlinedIcon />, action: cardFilter("Payment_Status", "completed") },
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
                });
            }
        }
    }

    return (
        <div >
            <RaiseTicket handleShow={handleShow} showIt={showIt} />
            <div className="dashboard__content" style={{
                // width: `${window.innerWidth - +`${dashBoardWidth}`.split('p')[0]}px`,
                marginLeft: `${dashBoardWidth}`, width: `calc(100% - ${dashBoardWidth}.split('p')[0]}px`
            }}>
                <div className="content__header">
                    <BreadCrums data={breadCrums.USER_MANAGEMENT} />
                    <PageSearch searchFn={searchData} searchPlaceholder='search' />
                </div>
                <div id="main-div" className="card-wrapper-1 user-management-cards">
                    {cards.map((q: any, i: any) => <Card data={q} key={i} />)}
                </div >
            </div>
        </div>
    )
}

export default UserManagement
