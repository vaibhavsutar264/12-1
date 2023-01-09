import * as React from 'react'
import {
    appRoutes,
} from '../../utils/constants'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { Link, useNavigate } from 'react-router-dom'
import useLocales from '../../hooks/useLocales'
import { useDispatch, useSelector } from '../../redux/store'
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined'
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import SettingsIcon from '@mui/icons-material/Settings'
import Ticket from '../common/icons/tickets'
import { reset, updateWidth } from '../../redux/slices/commonSlice'

type SidebarProps = {
    toggleTheme: any
    handleADWidth?: any
    handleBDWidth?: any
}


export const SideBar = ({
    toggleTheme,
    handleADWidth,
    handleBDWidth,
}: SidebarProps) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const dispatch = useDispatch()
    const { user } = useSelector((state: any) => state.auth || [])
    const { t } = useLocales()
    const navigate = useNavigate()


    const getActiveClass = (path: any) => {
        return window.location.pathname.includes(path) ? 'sidebar-active' : ''
    }
    if (user == null) {
        navigate('/')
    }

    React.useEffect(() => {
        dispatch(reset())
    }, [])

    const [sidebarWidth, setSidebarWidth] = React.useState<boolean>(false);

    return (
        <>
            <div
                className="dashboard__sidebar"
                id="sidebar-left"
                style={{
                    // transition: 'all 350ms 0ms ease-in',
                    zIndex: 1,
                    height: 'calc(100vh - 90px)',
                    position: 'fixed',
                    top: '90px',
                    left: '0px',
                    bottom: '0px',
                    width: '300px'
                }}
            >
                <div className="sidebar__inner">
                    <ul className="sidebar__list">
                        <li className="list__item">
                            <Link
                                className={`item__link ${getActiveClass(appRoutes.DASHBOARD)}`}
                                to={appRoutes.DASHBOARD}
                            >
                                <span className="link__icon">
                                    <SpeedOutlinedIcon />
                                </span>
                                <span className="link__text" id="link__text">
                                    {t<string>('dashboard')}
                                </span>
                            </Link>
                        </li>
                        <li className="list__item">
                            <Link className={`item__link ${getActiveClass(appRoutes.USER_MANAGEMENT)}`}
                                to={appRoutes.USER_MANAGEMENT}>
                                <span className="link__icon">
                                    <PersonOutlineOutlinedIcon />
                                </span>
                                <span className="link__text" id="link__text">
                                    {t<string>('userManagement')}
                                </span>
                            </Link>
                        </li>
                        <li className="list__item">
                            <Link className="item__link" to="">
                                <span className="link__icon">
                                    <HomeRepairServiceOutlinedIcon />
                                </span>
                                <span className="link__text" id="link__text">
                                    {t<string>('services')}
                                </span>
                            </Link>
                        </li>
                        <li className="list__item">
                            <Link className="item__link" to="">
                                <span className="link__icon">
                                    <ChatBubbleTwoToneIcon />
                                </span>
                                <span className="link__text" id="link__text">
                                    {t<string>('sms')}
                                </span>
                            </Link>
                        </li>
                        <li className="list__item">
                            <Link
                                className={`item__link ${getActiveClass(appRoutes.BILLING)}`}
                                to={appRoutes.BILLING}
                            >
                                <span className="link__icon">
                                    <ReceiptOutlinedIcon />
                                </span>
                                <span className="link__text" id="link__text">
                                    {t<string>('billingInvoice')}
                                </span>
                            </Link>
                        </li>
                        <li className="list__item">
                            <Link className="item__link" to="">
                                <span className="link__icon">
                                    {/* <ConfirmationNumberOutlinedIcon /> */}
                                    <Ticket />
                                </span>
                                <span className="link__text" id="link__text">
                                    {t<string>('tickets')}
                                </span>
                            </Link>
                        </li>
                        <li className="list__item">
                            <Link className="item__link" to="">
                                <span className="link__icon">
                                    <SettingsIcon />
                                </span>
                                <span className="link__text" id="link__text">
                                    {t<string>('support')}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <button
                    type="button"
                    className="sidebarToggle"
                    onClick={() => {
                        setIsOpen((pre: any) => (!pre))
                        dispatch(updateWidth())
                        const texts = document.querySelectorAll<HTMLElement>('#link__text')
                        const sidebarLeft = document.querySelector(
                            '#sidebar-left'
                        ) as HTMLElement
                        const text = document.querySelector('#link__text') as HTMLElement
                        if (text.style.display != 'none') {
                            console.log(sidebarLeft.style.width)
                            for (let i = 0; i < texts.length; i++) {
                                texts[i].style.display = 'none'
                            }
                            sidebarLeft.style.width = 'max-content'
                        } else {
                            console.log(sidebarLeft.style.width)
                            for (let i = 0; i < texts.length; i++) {
                                texts[i].style.display = 'block'
                            }
                            sidebarLeft.style.width = '300px'
                        }
                    }}
                >
                    {isOpen ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowLeftIcon />}
                </button>

            </div>
        </>
    )
}
