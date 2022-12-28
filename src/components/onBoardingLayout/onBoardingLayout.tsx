import { Box } from '@mui/material'
import BackgroundBox from '../common/elements/backGroundBox'
import BannerBg from '../common/elements/banner'
import Header from './Header'

const OnBoardingLayout = ({ toggleTheme, Component }: any) => {
    return (
        <>
            <Header toggleTheme={toggleTheme} />
            <Box className="account__screen">
                {/* ACCOUNT SCREEN BANNER START*/}
                <BannerBg />
                {/* ACCOUNT SCREEN ANIMATION START */}
                <BackgroundBox />
                {/* Child Component */}
                <Component />
            </Box>
        </>
    )
}

export default OnBoardingLayout