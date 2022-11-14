import React from 'react'
// Importing Material UI
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import { styled } from '@mui/material/styles'
import Button, { ButtonProps } from '@mui/material/Button'
import { purple } from '@mui/material/colors'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
// Importing Images
import Background from '../../../assets/images/login-bg.png'
import ChartImg from '../../../assets/images/svg/Chart.svg'
import PieChartImg from '../../../assets/images/svg/PieCharts.svg'
import SalesImg from '../../../assets/images/svg/Sales.svg'
import VoiceImg from '../../../assets/images/svg/Voice.svg'
import ChatImg from '../../../assets/images/svg/Chat.svg'
import VideoImg from '../../../assets/images/svg/Video.svg'
import WhatsappImg from '../../../assets/images/svg/Whatsapp.svg'

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  height: '70px',
  width: '100%',
  borderRadius: '35px',
  mixBlendMode: 'luminosity',
  opacity: 0.5,
  '&:hover': {
    backgroundColor: purple[700],
  },
}))

const ForgotPassword = () => {
  return (
    <Box className="account__screen">
      {/* ACCOUNT SCREEN BANNER START*/}
      <picture>
        {' '}
        <source srcSet={Background} type="image/webp" />{' '}
        <source srcSet={Background} type="image/png" />{' '}
        <img src={Background} className="account__screen__banner" alt="" />{' '}
      </picture>
      {/* ACCOUNT SCREEN BANNER END */}
      {/* ACCOUNT SCREEN ANIMATION START */}
      <Box sx={{ flexGrow: 1 }} className="account__form__animation">
        <div className="floating-wrapper">
          <div className="floating-wrapper-inner">
            <div className="floating-item floating-item-1">
              <img src={ChartImg} alt="Chart" />
            </div>
            <div className="floating-item floating-item-2">
              <img src={PieChartImg} alt="Pie Chart" />
            </div>
            <div className="floating-item floating-item-3">
              <img src={SalesImg} alt="Sales" />
            </div>
            <div className="floating-item floating-item-4">
              <img src={VoiceImg} alt="Voice" />
            </div>
            <div className="floating-item floating-item-5">
              <img src={ChatImg} alt="Chat" />
            </div>
            <div className="floating-item floating-item-6">
              <img src={VideoImg} alt="Video" />
            </div>
            <div className="floating-item floating-item-7">
              <img src={WhatsappImg} alt="Whatsapp" />
            </div>
          </div>
        </div>
      </Box>
      {/* ACCOUNT SCREEN ANIMATION END */}
      {/* ACCOUNT FORM START */}
      <Box sx={{ flexGrow: 1 }} className="account__form">
        <div className="form__inner">
          <Box sx={{ width: 1 }} className="account__form__header">
            <h3 className="title">Forgot Password?</h3>
            <p className="sub__title">
              Please enter your registered email Id or number to request reset
              password
            </p>
          </Box>
          <Box
            sx={{ flexGrow: 1, paddingTop: '0 !important' }}
            className="account__form__body"
          >
            <form action="#" method="post">
              <Box
                className="input-wrapper success"
                sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  position: 'relative',
                  width: 1,
                  margin: '20px 0px',
                }}
              >
                <InputLabel htmlFor="username" className="label__icon">
                  <MailOutlineIcon />
                </InputLabel>
                <TextField
                  required
                  id="username"
                  label="Enter your email ID"
                  variant="standard"
                  sx={{ width: 1 }}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  position: 'relative',
                  width: 1,
                  marginTop: '50px',
                }}
              >
                <ColorButton
                  variant="contained"
                  className="customBtn-01 btn-enable-style"
                >
                  GET LINK
                </ColorButton>
              </Box>
            </form>
          </Box>
        </div>
      </Box>
      {/* ACCOUNT FROM END */}
    </Box>
  )
}

export default ForgotPassword
