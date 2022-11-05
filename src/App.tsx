import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./components/Home/HomeScreen";
import Login from "./components/login/login-screen/Login";
import SetPassword from "./components/login/set-password/SetPassword";
import "./i18n";
import {useTranslation} from "react-i18next";
import {availableLanguages} from "./i18n";
import Header from "./components/Header/Header"
import { Toggle } from './components/Toggle';
import { useDarkMode } from './themes/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './themes/globalStyles';
import styled, { ThemeProvider } from 'styled-components';
import './scss/app.scss';
import Notfound from "./components/Notfound/Notfound";

const App = () => {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const {t, i18n} = useTranslation()
  return (
    <ThemeProvider theme={themeMode}>
    <Header /> 
    <GlobalStyles />
    <Routes>
    <Route path="/" element={<HomeScreen/>} />
    {/* <Route exact path={process.env.PUBLIC_URL + "/"} ><HomeScreen/></Route> */}
    <Route path="/login" element={<Login/>} />
    <Route path="/setpassword" element={<SetPassword/>} />
    <Route path='*' element={<Notfound />}/>
    </Routes>
    <h6 className="mode-text">Mode - {process.env.NODE_ENV} user - {process.env.name}</h6>
    <Toggle theme={theme} toggleTheme={toggleTheme} />      
    </ThemeProvider>
  );
};

export default App;