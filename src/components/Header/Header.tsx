import React, { useEffect, useState } from "react";
import { userInfo } from "os";
import { SyntheticEvent } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { logout } from "../../redux/action-thunks/userActions";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/CPaaSLogo.png";
import { Link } from "react-router-dom";
import i18next from "i18next";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { availableLanguages } from "../../i18n";
import styled, { ThemeProvider } from "styled-components";
import {UserState} from "../../redux/slices/userSlice"

const Header = () => {
  const { i18n, t } = useTranslation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  );
  const { userInfo } = userLogin;

  const logoutHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <header>
        <Navbar className="py-0" variant="dark" expand="lg" collapseOnSelect>
          <Container fluid>
            <Link className="navbar-brand logo w-auto" to="/">
              <img className="img-fluid" src={Logo} alt="CPAAS TCL" />
              {/* {t<string>("CpaasHeading")} */}
            </Link>
            {/* <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            {localStorage.token ? (<Nav >
              <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
            </Nav>) :(<Nav className='ms-auto'>
            <Nav.Link ></Nav.Link>
          </Nav>) }
            <Nav >
              <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
        </Navbar.Collapse> */}
            <ul className="nav w-auto width-adjusting-css">
              <li className="nav-item d-flex align-items-center justify-content-start">
                {localStorage.token ? (
                  <Nav>
                    <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
                  </Nav>
                ) : (
                  <Nav className="ms-auto">
                    <Nav.Link></Nav.Link>
                  </Nav>
                )}
                {localStorage.token ? (
                  <Nav></Nav>
                ) : (
                  <Nav>
                  <Nav.Link href="/login">Login</Nav.Link>
                  </Nav>
                )}
                
              </li>
              <li className="nav-item width-adjusting-css">
                <select
                  className="form-select language-select"
                  aria-label="Default select example"
                  defaultValue={i18n.language}
                  onChange={(e) => {
                    i18n.changeLanguage(e.target.value);
                    localStorage.setItem("lng", e.target.value);
                  }}
                >
                  {availableLanguages.map((language) => (
                    <option key={language}>{language}</option>
                  ))}
                </select>
              </li>
            </ul>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
