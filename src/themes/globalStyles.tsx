import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
    html: '#fff !important',
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
    searchiconSidebarOpacity: '0.5',
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
    showDateColor: '#344857',
    showDateBg: '#F1F4F9',
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
    bdContainerBg: '#F7F8FA',
    bdSingleContentBg: '#fff',
    prefilledTitle: '#344857',
    prefilledContent: '#344857',
    billingDetailsInput: '#344857 !important',
    billingDetailsLabel: '#344857',
    bdSingleContentTitle: '#303030',
    helpText: '#344857',
    bdSelectFormColor: 'rgba(0, 0, 0, 0.6) !important',
    modalBg: '#fff',
    modalTitle: '#344857',
    closeModalSvg: '#010101',
    resendLink: '#d32f2f',
    langInvoicesBg: 'transparent',
    langInvoicesLoginscreensBg: '#fff !important',
    langInvoicesLoginscreensSvg: '#222 !important',
    langInvoicesTxt: '#344857 !important',
    selectEntityLabelBg: '#fff !important',
    selectEntityLabel: 'rgba(0, 0, 0, 0.6)',
    selectEntityLabelShrink: '#333',
    selectEntityBorder: 'rgba(0, 0, 0, 0.23)',
    selectEntityInput: '#333 !important',
    editableInputBorder: '',
    avatarInitialsBg: '#E1E1E1 !important',
    avatarInitials: '#344857 !important',
    datatableIconBg: '#F7F8FA !important',
    datatableIconColor: '',
    iconCtaNBg: '#fff !important',
    datatableIconHoverBg: '#d63548 !important',
    iconCtaTxt: '#d63548 a!important',
    datatableIconHoverTxt: '#fff !important',
    forgotPasswordLnkColor: '#092133 !important',
    cardBorder: '#fff !important',
    cardHoverBorder: '#fff', // dont bother about it
    verticalDotsBg: '#fff !important',
    verticalDots: '#344857 !important',
}

export const darkTheme = {
    html: '#111315 !important',
    body: '#fff !important',
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
    sidebarBg: '#282F3C',
    sidebarTopBg: '#282F3C',
    sidebarLeftBg: '#282F3C',
    inputBg: '#343A47',
    inputHeaderBorder: 'none',
    dashboardContentBg: '#1E2631',
    tableHeaderBg: '#1E2631',
    dashboardTitle: '#fff',
    inputHeaderInputColor: '#fff',
    inputHeaderPlaceholderColor: '#787785',
    searchiconSidebar: '#787785',
    searchiconSidebarOpacity: '1',
    notificationColor: '#fff',
    notificationBadgeBgColor: '#D63548',
    breadcrumbColor: '#9D9FA1',
    breadcrumbSeparatorColor: '#9D9FA1',
    searchProductsInputBg: '#222D3B',
    searchProductsInputColor: '#fff',
    searchProductsPlaceholderColor: '#787785',
    searchProductsIconColor: '#787785',
    sidebarActiveLinkBg: '#343A47',
    sidebarLinkColor: '#787785',
    sidebarSvgPathColor: '#787785',
    languageColor: '#344857',
    languageTopColor: '#fff',
    languageSvgColor: '#fff !important',
    usernameColor: '#fff',
    usernameSvgColor: '#fff !important',
    sidebarToggleBg: '#282F3C',
    sidebarToggleSvgPathColor: '#D63548',
    prevNextBg: '#222D3B',
    prevNextSvgPathColor: '#344857',
    resultsColor: '#787785',
    pageNumberInputColor: '#787785',
    pageNumberInputBg: '#222D3B',
    showDateColor: '#787785',
    showDateBg: '#222D3B',
    iconCtaColor: '#fff',
    iconCtaBg: '#D63548',
    iconCtaBorder: '#D63548',
    verticalTableOptionsBg: '#32363B',
    verticalTableOptionsSvgPath: '#fff',
    basicButonExpandedBg: '#0B0D0E',
    pagniationSelectedBg: '#222D3B',
    tableDataRowBg: '#252F3B',
    tableDataRowBrBtmColor: '#1E2023',
    tableBodyTdColor: '#fff',
    formTitleColor: '#fff !important',
    forgotPasswordColor: '#9D9FA1',
    inputBorderColor: 'transparent !important',
    inputFieldBg: '#fff !important',
    inputLabelColor: '#787785',
    mailIconColor: '#787785',
    inputColor: '#363636 !important',
    toggleWrapper: '#343A47 !important',
    sunModeColor: '#787785',
    darkModeColor: '#D63548',
    sunModeBtnBg: 'transparent !important',
    darkModeBtnBg: '#fff !important',
    bdContainerBg: '#1E2631',
    bdSingleContentBg: '#252F3B',
    prefilledTitle: '#787785',
    prefilledContent: '#E8E8E8',
    billingDetailsInput: '#E8E8E8 !important',
    billingDetailsLabel: '#787785 !important',
    bdSingleContentTitle: '#E8E8E8',
    helpText: '#787785',
    bdSelectFormColor: '#E8E8E8 !important',
    modalBg: '#3A4548',
    modalTitle: '#fff',
    closeModalSvg: '#E8E8E8',
    resendLink: '#ff6060',
    langInvoicesBg: 'transparent',
    langInvoicesLoginscreensBg: '#3A4548 !important',
    langInvoicesLoginscreensSvg: '#fff !important',
    langInvoicesTxt: '#fff',
    selectEntityLabelBg: '#252f3b !important',
    selectEntityLabel: '#fff',
    selectEntityLabelShrink: '#fff !important',
    selectEntityBorder: '#fff !important',
    selectEntityInput: '#fff !important',
    editableInputBorder: '#787785 !important',
    avatarInitialsBg: '#343A47 !important',
    avatarInitials: '#FFFFFF !important',
    datatableIconBg: '#2B3744 !important',
    datatableIconColor: '#fff !important',
    iconCtaNBg: '#d63548 !important',
    datatableIconHoverBg: '#d63548 !importnt',
    iconCtaTxt: '#fff !important',
    datatableIconHoverTxt: '#fff !importnt',
    forgotPasswordLnkColor: '#9D9FA1 !important',
    cardBorder: 'transparent !important',
    cardHoverBorder: 'transparent !important',
    verticalDotsBg: 'transparent !important',
    verticalDots: '#9D9FA1 !important',
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
    // color: ${({ theme }) => theme.text};
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
    // color: ${({ theme }) => theme.textForLogin};
    opacity: ${({ theme }) => theme.opacity};
  }
  #unlock-icon{
    // color: ${({ theme }) => theme.textForLogin};
    opacity: ${({ theme }) => theme.opacity};
  }
  #forgot-password{
    color: ${({ theme }) => theme.forgotPasswordColor};
  }
  .forgot-password{
    color: ${({ theme }) => theme.forgotPasswordLnkColor};
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
  .dashboard__content .content__header .content__breadcrum .content_pageTitle {
    color: ${({ theme }) => theme.dashboardTitle};
  }
  #searchicon-sidebar {
    color: ${({ theme }) => theme.searchiconSidebar};
    opacity: ${({ theme }) => theme.searchiconSidebarOpacity};
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
    opacity: ${({ theme }) => theme.searchiconSidebarOpacity}
  }
  .dashboard__sidebar .sidebar__list .list__item .item__link.sidebar-active {
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
  .showDate {
    color: ${({ theme }) => theme.showDateColor};
    background-color: ${({ theme }) => theme.showDateBg};
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
  .bd-container {
    background-color: ${({ theme }) => theme.bdContainerBg};
  }
  .bd-single-content {
    background-color: ${({ theme }) => theme.bdSingleContentBg};
  }
  .prefilled-title {
    color: ${({ theme }) => theme.prefilledTitle};
  }
  .prefilled-content {
    color: ${({ theme }) => theme.prefilledContent};
  }
  .billing-details-input label {
    color: ${({ theme }) => theme.billingDetailsLabel};
  }
  .billing-details-input input {
    color: ${({ theme }) => theme.billingDetailsInput};
  }
  .bd-container h1 {
    color: ${({ theme }) => theme.bdSingleContentTitle};
  }
  .bd-container h6 {
    color: ${({ theme }) => theme.helpText};
  }
  .bd-single-content .select-form label, .bd-single-content .select-form svg {
    color: ${({ theme }) => theme.bdSelectFormColor};
  }
  .bd-single-content .select-form .MuiInputBase-root::before {
    border-bottom: 1px solid ${({ theme }) => theme.bdSelectFormColor};
  }
  [role=dialog][aria-labelledby=responsive-dialog-title] {
    background-color: ${({ theme }) => theme.modalBg};
  }
  [role=dialog][aria-labelledby=responsive-dialog-title] h2, [role=dialog][aria-labelledby=responsive-dialog-title] .MuiDialogTitle-root+.css-ypiqx9-MuiDialogContent-root, [role=dialog][aria-labelledby=responsive-dialog-title] .darker-text, [role=dialog][aria-labelledby=responsive-dialog-title] .bolder-text, [role=dialog][aria-labelledby=responsive-dialog-title] .lighter-text, [role=dialog][aria-labelledby=responsive-dialog-title] .MuiTypography-body1 {
    color: ${({ theme }) => theme.modalTitle};
  }
  [role=dialog][aria-labelledby=responsive-dialog-title] button svg {
    color: ${({ theme }) => theme.closeModalSvg};
  }
  [role=dialog][aria-labelledby=responsive-dialog-title] .MuiLink-underlineAlways {
    color: ${({ theme }) => theme.resendLink};
  }
  #lang-background-invoices {
    background-color: ${({ theme }) => theme.langInvoicesBg};
  }
  #lang-background-invoices.lang-background-loginscreens {
    background-color: ${({ theme }) => theme.langInvoicesLoginscreensBg};
  }
  #lang-background-invoices.lang-background-loginscreens svg {
    color: ${({ theme }) => theme.langInvoicesLoginscreensSvg};
  }
  #demo-select-small {
    color: ${({ theme }) => theme.langInvoicesTxt};
  }
  #select-entity-form label {
    background-color: ${({ theme }) => theme.selectEntityLabelBg};
    color: ${({ theme }) => theme.selectEntityLabel};
  }
  #select-entity-form .MuiInputLabel-shrink {
    color: ${({ theme }) => theme.selectEntityLabelShrink};
  }
  #select-entity-form fieldset {
    border-color: ${({ theme }) => theme.selectEntityBorder};
  }
  #select-entity-form [role="button"], #select-entity-form svg {
    color: ${({ theme }) => theme.selectEntityInput};
  }
  .billing-details-input fieldset {
    border-color: ${({ theme }) => theme.editableInputBorder};
  }
  .MuiAvatar-root.avatar-initials {
    background-color: ${({ theme }) => theme.avatarInitialsBg};
    color: ${({ theme }) => theme.avatarInitials};
  }
  .actionButtons .actionButton__item span, .actionButtons button.download-cdr  {
    background-color: ${({ theme }) => theme.datatableIconBg};
  }

  .actionButtons .actionButton__item span svg path, .actionButtons button.download-cdr svg path {
    fill: ${({ theme }) => theme.datatableIconColor};
  }
  .action__elements .action__elementItem .iconCta:hover {
    background-color: ${({ theme }) => theme.datatableIconHoverBg};
  }
  .action__elementItem .iconCta {
    background: ${({ theme }) => theme.iconCtaNBg};
  }
  .action__elementItem .iconCta a, .action__elementItem .iconCta svg path {
    color: ${({ theme }) => theme.iconCtaTxt};
    fill: ${({ theme }) => theme.iconCtaTxt};
  }
  .card-wrapper-1 .cardType__1 {
    border: 1px solid ${({ theme }) => theme.cardBorder};
  }
  .card-wrapper-1 .cardType__1:nth-child(1):hover, .card-wrapper-1 .cardType__1:nth-child(1).active,
  .card-wrapper-1 .cardType__1:nth-child(2):hover, .card-wrapper-1 .cardType__1:nth-child(2).active,
  .card-wrapper-1 .cardType__1:nth-child(3):hover, .card-wrapper-1 .cardType__1:nth-child(3).active,
  .card-wrapper-1 .cardType__1:nth-child(4):hover, .card-wrapper-1 .cardType__1:nth-child(4).active {
    border: 1px solid ${({ theme }) => theme.cardHoverBorder};
  }
  table tr th button#basic-button {
    background-color: ${({ theme }) => theme.verticalDotsBg};
  }
  table tr th button#basic-button svg {
    color: ${({ theme }) => theme.verticalDots};
  }
  html {
    background-color: ${({ theme }) => theme.html};
  }
`
