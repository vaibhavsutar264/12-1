import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#fff',
  text: '#121212',
  textForLogin:"#858585",
  primary: 'lightGreen',
  background: "white"
};

export const darkTheme = {
  body: '#121212',
  text: '#fff',
  textForLogin:"white", 
  primary: 'linear-gradient(297deg, #F57C52 0%, #D63548 100%) 0% 0% no-repeat padding-box',
  background: "black"
};

export const GlobalStyles = createGlobalStyle<{theme: String}>`
  body {
    background: ${({ theme }) => theme.body};
    font-family: 'Roboto', sans-serif;
  }

  p {
    line-height: 1.4rem;
  }

  .btn-primary {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
  }
  .h1-padding{
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
  }

  .login-form{
    background: ${({ theme }) => theme.background};
  }
  .homescreen-text{
    color: ${({ theme }) => theme.text};
  }
  .login-area .forgot-password {
    color: ${({ theme }) => theme.textForLogin};
  }
  .login-area .form-title p.sub-title {
    color: ${({ theme }) => theme.textForLogin};
  }
`;
