import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

let Sun, Moon;

Sun = Moon = styled.svg`
  border:0.5px solid lightblue;
  padding:10px;
  position: absolute;
  top: 3.4rem;  
  right: 4rem;
  transition: all .5s linear;
`;
const styledDivWrapper = styled.div`
  border:0.5px solid lightblue;
  padding:10px;
  position: absolute;
  top: 3.4rem;  
  right: 4rem;
  transition: all .5s linear;
`;

export const Toggle = ({ theme, toggleTheme }:{theme:any, toggleTheme:any}) => {
  console.log(theme);
  return (
    <div className="theme-toggle-button">
    <Button onClick={toggleTheme} >
      { theme === 'light' ? <span><i className="bi bi-moon-stars-fill"></i></span> : <span><i className="bi bi-brightness-high-fill"></i></span> }
    </Button>
    </div>
  )
}
