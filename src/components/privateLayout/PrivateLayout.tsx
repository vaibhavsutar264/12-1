import { SideBar } from './SideBar'
import { HeaderBar } from './HeaderBar'

export const PrivateLayout = ({ toggleTheme, Component }: { toggleTheme: any, Component: any }) => {
    return (
        <div className="dashboard__wrapper">
            <HeaderBar toggleTheme={toggleTheme} />
            <SideBar toggleTheme={toggleTheme} />
            <Component />
        </div>
    )
}

export default PrivateLayout
