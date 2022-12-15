import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
    body: '#fff !important',
    text: '#121212 !important',
    textForLogin: '#11153b !important',
    primary: 'lightGreen !important',
    background: 'white !important',
    font: 'sans-serif !important',
    border: '#e8ebf3',
    label: '#abaec5',
    successBorder: '#75818a',
    opacity: '1',
    sidebarBg: '#fff',
    sidebarTopBg: '#fff',
    sidebarLeftBg: '#fff',
    inputBg: '#F7F8FA',
    inputHeaderBorder: '1px solid #efefef',
    dashboardContentBg: '#F7F8FA',
    tableHeaderBg: '#F7F8FA',
    dashboardTitle: '#344857',
    inputHeaderInputColor: '#222',
    inputHeaderPlaceholderColor: '#344857',
    searchiconSidebar: '#344857',
    notificationColor: '#757575',
    notificationBadgeBgColor: '#D63548',
    breadcrumbColor: '#344857',
    breadcrumbSeparatorColor: '#344857',
    searchProductsInputBg: '#F1F4F9',
    searchProductsInputColor: '#222',
    searchProductsPlaceholderColor: '#344857',
    searchProductsIconColor: '#344857',
    sidebarActiveLinkBg: '#F7F8FA',
    sidebarLinkColor: '#52626F',
    sidebarSvgPathColor: '#52626F',
    languageColor: '#344857',
    languageTopColor: '#222',
    languageSvgColor: '#344857 !important',
    usernameColor: '#344857',
    usernameSvgColor: '#344857 !important',
    sidebarToggleBg: '#fff',
    sidebarToggleSvgPathColor: '#D63548',
    prevNextBg: '#fff',
    prevNextSvgPathColor: '#787785',
    resultsColor: '#555555',
    pageNumberInputColor: '#344857',
    pageNumberInputBg: '#F1F4F9',
    iconCtaColor: '#D63548',
    iconCtaBg: '#F1F4F9',
    iconCtaBorder: '#D63548',
    verticalTableOptionsBg: '#eee',
    verticalTableOptionsSvgPath: '#222',
    basicButonExpandedBg: '#092133',
    pagniationSelectedBg: '#787785',
    tableDataRowBg: '#fff',
    tableDataRowBrBtmColor: '#fff',
    tableBodyTdColor: '#344857',
    formTitleColor: '#344857 !important',
    forgotPasswordColor: '#092133',
    inputBorderColor: '#00000080 !important',
    inputFieldBg: '#fff !important',
    inputLabelColor: '#ABAEC5',
    mailIconColor: '#ABAEC5',
    inputColor: '#11153b',
    toggleWrapper: '#F7F8FA !important',
    sunModeColor: '#D63548',
    darkModeColor: '#222',
    sunModeBtnBg: '#fff !important',
    darkModeBtnBg: 'transparent !important',
}

export const darkTheme = {
    body: '#121212 !important',
    text: '#fff !important',
    textForLogin: 'white !important',
    primary:
        'linear-gradient(297deg, #F57C52 0%, #D63548 100%) 0% 0% no-repeat padding-box !important',
    background: '#3A4548 !important',
    font: '"Ubuntu", sans-serif !important',
    border: '#04131E',
    label: '#ffffff',
    successBorder: '#195583',
    opacity: '0.5',
    sidebarBg: '#1E2023',
    sidebarTopBg: '#1E2023',
    sidebarLeftBg: '#1E2023',
    inputBg: '#25292E',
    inputHeaderBorder: 'none',
    dashboardContentBg: '#111315',
    tableHeaderBg: '#111315',
    dashboardTitle: '#fff',
    inputHeaderInputColor: '#fff',
    inputHeaderPlaceholderColor: '#787785',
    searchiconSidebar: '#787785',
    notificationColor: '#fff',
    notificationBadgeBgColor: '#D63548',
    breadcrumbColor: '#9D9FA1',
    breadcrumbSeparatorColor: '#9D9FA1',
    searchProductsInputBg: '#23252A',
    searchProductsInputColor: '#fff',
    searchProductsPlaceholderColor: '#787785',
    searchProductsIconColor: '#787785',
    sidebarActiveLinkBg: '#25292E',
    sidebarLinkColor: '#787785',
    sidebarSvgPathColor: '#787785',
    languageColor: '#344857',
    languageTopColor: '#fff',
    languageSvgColor: '#fff !important',
    usernameColor: '#fff',
    usernameSvgColor: '#fff !important',
    sidebarToggleBg: '#32363B',
    sidebarToggleSvgPathColor: '#D63548',
    prevNextBg: '#25292E',
    prevNextSvgPathColor: '#344857',
    resultsColor: '#787785',
    pageNumberInputColor: '#787785',
    pageNumberInputBg: '#25292E',
    iconCtaColor: '#fff',
    iconCtaBg: '#D63548',
    iconCtaBorder: '#D63548',
    verticalTableOptionsBg: '#32363B',
    verticalTableOptionsSvgPath: '#fff',
    basicButonExpandedBg: '#0B0D0E',
    pagniationSelectedBg: '#344857',
    tableDataRowBg: '#1E2023',
    tableDataRowBrBtmColor: '#1E2023',
    tableBodyTdColor: '#fff',
    formTitleColor: '#fff !important',
    forgotPasswordColor: '#9D9FA1',
    inputBorderColor: 'transparent !important',
    inputFieldBg: '#fff !important',
    inputLabelColor: '#787785',
    mailIconColor: '#787785',
    inputColor: '#363636 !important',
    toggleWrapper: '#25292E !important',
    sunModeColor: '#787785',
    darkModeColor: '#D63548',
    sunModeBtnBg: 'transparent !important',
    darkModeBtnBg: '#fff !important',
}

export const GlobalStyles = createGlobalStyle<{ theme: string }>`
  body {
    background: ${({ theme }) => theme.body};
    font-family: ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.textForLogin};
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
  .account__screen .account__form .form__inner .MuiInputBase-root::before {
    border: 1px solid ${({ theme }) => theme.border} !important;
  }
  .account__screen .account__form .form__inner .account__form__body .input-wrapper .MuiFormControl-root label {
    color: ${({ theme }) => theme.label};
    opacity: ${({ theme }) => theme.opacity};
  }
  .account__screen .account__form .form__inner .account__form__body .input-wrapper.success .MuiInputBase-root::before {
    border-color: ${({ theme }) => theme.successBorder} !important;
  }
  .password-toggle svg {
    color: ${({ theme }) => theme.text};
  }
  .title {
    color: ${({ theme }) => theme.text};
  }
  #login-form{
    background: ${({ theme }) => theme.background};
  }
  .homescreen-text{
    color: ${({ theme }) => theme.text};
  }
  .login-area .form-title p.sub-title {
    color: ${({ theme }) => theme.textForLogin};
  }
  #username{
    color: ${({ theme }) => theme.inputColor};
  }
  #password{
    color: ${({ theme }) => theme.inputColor};
  }
  #confirmPassword{
    color: ${({ theme }) => theme.inputColor};
  }
  #mail-icon{
    color: ${({ theme }) => theme.textForLogin};
    opacity: ${({ theme }) => theme.opacity};
  }
  #unlock-icon{
    color: ${({ theme }) => theme.textForLogin};
    opacity: ${({ theme }) => theme.opacity};
  }
  #forgot-password{
    color: ${({ theme }) => theme.forgotPasswordColor};
  }
  #sidebar-top{
    background-color: ${({ theme }) => theme.sidebarTopBg};
  }
  #sidebar-left{
    background-color: ${({ theme }) => theme.sidebarLeftBg};
  }
  #basic-button{
    background-color: ${({ theme }) => theme.sidebarBg};
  }
  .dashboard__navbar .dashboard__container .right__elements .search__group .search__form{
    background-color: ${({ theme }) => theme.inputBg};
  }
  .dashboard__navbar .dashboard__container .right__elements .search__group .search__form{
    background-color: ${({ theme }) => theme.inputBg};
  }
    #sidebar-top > div > div > div.right__elementsItem.search__group > form > div > input{
        color: ${({ theme }) => theme.inputHeaderInputColor};
    }
  #sidebar-top > div > div > div.right__elementsItem.search__group > form > div > input::placeholder{
    color: ${({ theme }) => theme.inputHeaderPlaceholderColor};
  }
  .dashboard__navbar .dashboard__container .right__elements .search__group .search__form{
    border: ${({ theme }) => theme.inputHeaderBorder};
  }
  .dashboard__wrapper .dashboard__content{
    background-color: ${({ theme }) => theme.dashboardContentBg};
  }
  .TableHead{
    background-color: ${({ theme }) => theme.tableHeaderBg};
  }
  div.dashboard__wrapper > div.dashboard__content > div.content__header > div.content__breadcrum > h3{
    color: ${({ theme }) => theme.dashboardTitle};
  }
  #searchicon-sidebar {
    color: ${({ theme }) => theme.searchiconSidebar};
  }
  #notification-badge > span {
    background-color: ${({ theme }) => theme.notificationBadgeBgColor};
  }
   #notification-badge > svg {
    color: ${({ theme }) => theme.notificationColor};
  }
  #breadcrumb-color {
    color: ${({ theme }) => theme.breadcrumbColor};
  }
  nav > ol > li.MuiBreadcrumbs-separator > svg {
    color: ${({ theme }) => theme.breadcrumbSeparatorColor};
  }
  #searchproducts-input {
    background-color: ${({ theme }) => theme.searchProductsInputBg};
  }
  #searchproducts-input > div > input{
    color: ${({ theme }) => theme.searchProductsInputColor};
  }
  #searchproducts-input > div > input::placeholder{
    color: ${({ theme }) => theme.searchProductsPlaceholderColor};
  }
  #searchproducts-input > button > svg {
    color: ${({ theme }) => theme.searchProductsIconColor};
  }
  .dashboard__sidebar .sidebar__list .list__item .item__link.active {
    background-color: ${({ theme }) => theme.sidebarActiveLinkBg};
  }
  .dashboard__sidebar .sidebar__list .list__item .item__link .link__icon svg path {
    fill: ${({ theme }) => theme.sidebarSvgPathColor}; 
  }
  .dashboard__sidebar .sidebar__list .list__item .item__link .link__text {
    color: ${({ theme }) => theme.sidebarLinkColor};
  }
  [aria-expanded=false] #language, [aria-expanded=true] #language {
    color: ${({ theme }) => theme.languageTopColor};
  }
  #language {
    color: ${({ theme }) => theme.languageColor};
  }
  #sidebar-top div.right__elementsItem.language__selector > div > div > svg {
    color: ${({ theme }) => theme.languageSvgColor};
  }
  #basic-button > span.userName {
    color: ${({ theme }) => theme.usernameColor};
  }
  #basic-button > svg {
    color: ${({ theme }) => theme.usernameSvgColor};
  }
  #sidebar-left > button {
    background-color: ${({ theme }) => theme.sidebarToggleBg};
  }
  #sidebar-left > button > svg path {
    fill: ${({ theme }) => theme.sidebarToggleSvgPathColor}; 
  }
  .tablePag ul li:first-child button, .tablePag ul li:last-child button {
    background-color: ${({ theme }) => theme.prevNextBg};
  }
  .tablePag ul li:first-child button svg path, .tablePag ul li:last-child button svg path{
    fill: ${({ theme }) => theme.prevNextSvgPathColor};
  }
  #results {
    color: ${({ theme }) => theme.resultsColor};
  }
  #PageNumberInput {
    color: ${({ theme }) => theme.pageNumberInputColor};
    background-color: ${({ theme }) => theme.pageNumberInputBg};
  }
  div.dashboard__content > div.action__elements a.iconCta {
    color: ${({ theme }) => theme.iconCtaColor};
    background: ${({ theme }) => theme.iconCtaBg};
    border-color: ${({ theme }) => theme.iconCtaBorder};
  }
  div.dashboard__content > div.action__elements a.iconCta a[download]  {
    color: ${({ theme }) => theme.iconCtaColor};
  }
  div.dashboard__content > div.action__elements a.iconCta svg path {
    fill: ${({ theme }) => theme.iconCtaColor};
  }
  .TableHead th a {
    background: ${({ theme }) => theme.verticalTableOptionsBg};
  }
  .TableHead th a svg path {
    fill: ${({ theme }) => theme.verticalTableOptionsSvgPath};
  }
  #basic-button[aria-expanded=true]{
    background: ${({ theme }) => theme.basicButonExpandedBg};
  }
  .tablePag button.Mui-selected {
    background: ${({ theme }) => theme.pagniationSelectedBg};
  }
  #table-data {
    background-color: ${({ theme }) => theme.tableDataRowBg};
    border-bottom: 2px solid ${({ theme }) => theme.tableDataRowBrBtmColor};
  }
  .TableBody tr td {
    color: ${({ theme }) => theme.tableBodyTdColor};
  }
  .account__screen .account__form .form__inner .account__form__header .title {
    color: ${({ theme }) => theme.formTitleColor};
  }
  // Input border color change on light dark mode
  .account__screen .account__form .form__inner .MuiInputBase-root::before {
    border-color: ${({ theme }) => theme.inputBorderColor};
  }
  .input-field {
    background-color: ${({ theme }) => theme.inputFieldBg};
  }
  // Input label color
  .account__screen .account__form .form__inner .account__form__body .input-wrapper .MuiFormControl-root label {
    color: ${({ theme }) => theme.inputLabelColor};
  }
  #email-box svg path, #password-box svg path, #confirm-password-box svg path {
    fill: ${({ theme }) => theme.mailIconColor};
  }
  .toggle__wrapper {
    background: ${({ theme }) => theme.toggleWrapper};
  }
  .toggle__wrapper .lightMode {
    background: ${({ theme }) => theme.sunModeBtnBg};
  }
  .toggle__wrapper .darkMode {
    background: ${({ theme }) => theme.darkModeBtnBg};
  }
  .lightMode svg path {
    fill: ${({ theme }) => theme.sunModeColor};
  }
  .darkMode svg path {
    fill: ${({ theme }) => theme.darkModeColor};
  }
`
