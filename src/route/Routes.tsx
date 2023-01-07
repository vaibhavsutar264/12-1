import { Suspense, lazy } from 'react'
import Loading from '../components/loader/Loading'
import PrivateRoutes from '../utils/PrivateRoutes'
import { appRoutes } from '../utils/constants'
import { useRoutes } from 'react-router-dom'
import { useSelector } from '../redux/store'

// eslint-disable-next-line react/display-name
const Loadable = (Component: any) => (props: any) => {
    return (
        <Suspense fallback={<Loading />}>
            <Component {...props} />
        </Suspense>
    )
}
function Routes({ toggleTheme }: { toggleTheme: any }) {
    return useRoutes([
        {
            path: '',
            children: [
                { path: appRoutes.LOGIN, element: <OnBoardingLayout toggleTheme={toggleTheme} Component={Login} /> },
                { path: appRoutes.ROOT, element: <OnBoardingLayout toggleTheme={toggleTheme} Component={HomeScreen} /> },
                { path: appRoutes.RESET_PASSWORD, element: <OnBoardingLayout toggleTheme={toggleTheme} Component={ResetPassword} /> },
                { path: appRoutes.FORGOT_PASSWORD, element: <OnBoardingLayout toggleTheme={toggleTheme} Component={ForgotPassword} /> },
                { path: appRoutes.DATE, element: <DateFilter /> },
            ],
        },
        {
            path: '',
            element: <PrivateRoutes />,
            children: [
                { path: appRoutes.SET_PASSWORD, element: <OnBoardingLayout toggleTheme={toggleTheme} Component={SetPassword} /> },
                { path: appRoutes.ACCOUNT_DETAILS, element: <PrivateLayout toggleTheme={toggleTheme} Component={AccountDetails} /> },
                { path: appRoutes.WELCOME, element: <OnBoardingLayout toggleTheme={toggleTheme} Component={Welcome} /> },
                { path: appRoutes.CUSTOMER_LE_FILTER, element: <OnBoardingLayout toggleTheme={toggleTheme} Component={CustomerLeFilter} /> },
                { path: appRoutes.BILLING, element: <PrivateLayout toggleTheme={toggleTheme} Component={Billing} /> },
                { path: appRoutes.CHANGE_PASSWORD, element: <PrivateLayout toggleTheme={toggleTheme} Component={ChangePassword} /> },
                { path: appRoutes.DASHBOARD, element: <PrivateLayout toggleTheme={toggleTheme} Component={Dashboard} /> },
            ],
        },
        { path: appRoutes.NOT_FOUND, element: <Notfound /> },
    ])
}

const Login = Loadable(lazy(() => import('../components/login-screen/Login')))
const ResetPassword = Loadable(lazy(() => import('../components/reset-password/ResetPassword')))
const ForgotPassword = Loadable(lazy(() => import('../components/forgot-password/ForgotPassword')))
const SetPassword = Loadable(lazy(() => import('../components/set-password/SetPassword')))
const Notfound = Loadable(lazy(() => import('../components/notfound/Notfound')))
const HomeScreen = Loadable(lazy(() => import('../components/home/HomeScreen')))
const Billing = Loadable(lazy(() => import('../components/billing/Billing')))
const ChangePassword = Loadable(lazy(() => import('../components/change-password/ChangePassword')))
const Dashboard = Loadable(lazy(() => import('../components/dashboard/Dashboard')))
const PrivateLayout = Loadable(lazy(() => import('../components/privateLayout/PrivateLayout')))
const OnBoardingLayout = Loadable(lazy(() => import('../components/onBoardingLayout/onBoardingLayout')))
const AccountDetails = Loadable(lazy(() => import('../components/account-details/AccountDetails')))
const Welcome = Loadable(lazy(() => import('../components/welcome/welcome')))
const DateFilter = Loadable(lazy(() => import('../components/Date/DateFilter')))
const CustomerLeFilter = Loadable(lazy(() => import('../components/common/tables/filter-and-sort/CustomerLeFilter')))

export default Routes
