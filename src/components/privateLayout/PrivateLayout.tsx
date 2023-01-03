import { SideBar } from './SideBar'
import { HeaderBar } from './HeaderBar'
import { useState } from 'react'

export const PrivateLayout = ({ toggleTheme, Component }: { toggleTheme: any, Component: any }) => {
    const [aDWidth, setADWidth] = useState('180px')
    const handleADWidth = () => {
      const currentWidth = aDWidth == '300px' ? '180px' : '300px'
      setADWidth(currentWidth)
    }
  
    return (
        <div className="dashboard__wrapper">
            <HeaderBar toggleTheme={toggleTheme} />
            <SideBar toggleTheme={toggleTheme} handleADWidth={handleADWidth} />
            <Component />
        </div>
    )
}

export default PrivateLayout
