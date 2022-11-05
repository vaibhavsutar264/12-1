import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Link } from 'react-router-dom'
import {useTranslation} from "react-i18next";
import styled, { ThemeProvider } from "styled-components"
import { useState, useEffect } from 'react';
import {UserState} from "../../redux/slices/userSlice"

const HomeScreen = () => {
  const {t, i18n} = useTranslation()
  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  )

  const { userInfo } = userLogin
  const email = userInfo ? userInfo.email : null

  return(
    <><div className="main-div"><h1 data-testid="password-exist" className="homescreen-text" >{t<string>('home')}</h1><div className="centering-div"><h1 className='h1-padding'>TCL-CPAAS {t<string>('home')}</h1></div></div>
    </>
  )
} 

export default HomeScreen