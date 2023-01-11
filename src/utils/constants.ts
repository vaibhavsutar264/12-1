import Invoice from "../components/common/icons/invoice"
import Overdue from "../components/common/icons/overdue"
import PaidInvoice from "../components/common/icons/paidInvoice"
import UnpaidInvoice from "../components/common/icons/unpaidInvoice"

export const apiRoutes = {
    // BASE_URL: 'http://115.112.43.74:8585',
    BASE_URL: '',
    // BASE_URL: 'http://localhost:8585',
    // BASE_URL: 'http://api.sspdev.digodev.com',

    // User
    LOGIN: '/cpaas/token',
    REFRESH_TOKEN: '/cpaas/refreshToken',
    MOCKLOGIN: '/auth/login',
    SET_PASSWORD: '/api/v1/auth/password',
    FORGOT_PASSWORD: '/cpaas/forgotPassword',
    RESET_PASSWORD: '/cpaas/resetPassword',
    GET_USER_INFO: '/cpaas/userinfo',
    LOGOUT: '/cpaas/logout',
    CHANGE_PASSWORD: '/cpaas/changePassword',


    // Billing
    GET_INVOICES: '/orchestration/billing/invoices/getInvoices',
    VIEW_INVOICES: '/result_data/Download_Billing_Invoice',
    DOWNLOAD_INVOICES: '/orchestration/billing/invoices/downloadBillingInvoice',
    DOWNLOAD_INVOICES_CDR: '/orchestration/billing/invoices/downloadBillingInvoiceCDR',

    //account
    UPDATE_USER_INFO: '/orchestration/user/account_details/updateUserDetails',
    GET_ACCOUNT_BILLING_DETAILS: '/orchestration/user/account_details/getAccountBillingDetails'
}

export const apiHelpers = {
    HEADER_AUTHORIZATION: 'Authorization',
    HEADER_CONTENT_TYPE: 'Content-Type',
    TOKEN_TYPE: 'Bearer',
    CONTENT_TYPE_APP_JSON: 'application/json',
    CONTENT_TYPE_APP_PDF: 'application/pdf',
}

export const appThemes = {
    LIGHT_THEME: 'light',
    DARK_THEME: 'dark',
}

export const localStorageVar = {
    THEME_VAR: 'theme',
    TOKEN_VAR: 'token',
    REFRESH_TOKEN: 'refreshToken',
    USER_VAR: 'user',
    I18_LANG_VAR: 'i18nextLng',
    LANG_VAR: 'lng',
}

export const thunkPaths = {
    LOGIN_THUNK: 'auth/login',
    LOGOUT_THUNK: 'auth/logout',
    UPDATEPASSWORD_THUNK: 'auth/updatePassword',
}

export const slices = {
    AUTH_SLICE: 'auth',
    BILLING_SLICE: 'billing',
    COMMON_SLICE: 'common',
    ACCOUNT_SLICE: 'accountDetails',
}

export const billingKeys = {
    INVOICE_NUMBER: 'invoiceNumber',
    CUSTOMER_LE: 'customerLe',
    TATA_ENTITY: 'tataEntity',
    PO_NUMBER: 'poNumber',
    PAYMENT_STATUS: 'paymentStatus',
    INVOICE_AMOUNT: 'invoiceAmount',
    CURRENCY: 'currency',
    INVOICE_DATE: 'invoiceDate',
    DUE_DATE: 'dueDate',
    PAYMENT_DATE_TIME: 'paymentDateTime',
    TIME_ZONE: 'timeZone',
}

export const typeVar = {
    IMAGE_WEBP: 'image/webp',
    IMAGE_PNG: 'image/png',
    IMAGE_SVG: 'image/svg+xml',
    IMAGE_JPG: 'image/jpg',
    TEXT: 'text/plain',
    HTML: 'text/html',
    PDF: 'application/pdf',
    JSON: 'application/json',
    MP4: 'audio/mp4',
    OGG: 'audion/ogg',
    OTF: 'font/opentype',
    WEBM: 'video/webm',
}

export const appRoutes = {
    DEFAULT_PARMS: '?page=1&take=10',
    ROOT: '/',
    LOGIN: '/login',
    CHECK_PROTECTED: '/checkprotected',
    SET_PASSWORD: '/setpassword',
    FORGOT_PASSWORD: '/forgot-password',
    DATE: '/date',
    RESET_PASSWORD: '/password/reset/:token',
    NOT_FOUND: '*',
    BILLING: '/invoices',
    CHANGE_PASSWORD: '/change-password',
    USER_MANAGEMENT: '/user-management',
    SERVICES: '/services',
    SMS: '/sms',
    TICKETS: '/tickets',
    SUPPORT: '/support',
    DASHBOARD: '/dashboard',
    ACCOUNT_DETAILS: '/accountdetails',
    WELCOME: '/welcome',
    CUSTOMER_LE_FILTER: '/customer-le-filter',
    MODAL: '/modal',
    MODAL_LOGIN_ERROR: '/modal-login-error',
    MODAL_MAIL: '/modal-mail',
    MODAL_PASS_CHANGED: '/modal-pass-changed',
    MODAL_TICKET: '/modal-ticket',
    MODAL_TICKET_ERROR: '/modal-ticket-error',
}

export const breadCrums = {
    BILLING: {
        path: [
            { transName: 'dashboard', type: 'link', linkURL: appRoutes.BILLING },
            { transName: 'billingInvoiceshead', type: 'text', linkURL: '' },
        ],
        PageName: 'billingInvoiceshead',
    },
    CHANGE_PASSWORD: {
        path: [
            { transName: 'dashboard', type: 'link', linkURL: appRoutes.CHANGE_PASSWORD },
            { transName: 'changePasswordhead', type: 'text', linkURL: '' },
        ],
        PageName: 'changePasswordhead',
    },
    USER_MANAGEMENT: {
        path: [
            { transName: 'dashboard', type: 'link', linkURL: appRoutes.USER_MANAGEMENT },
            { transName: 'userManagementhead', type: 'text', linkURL: '' },
        ],
        PageName: 'userManagementhead',
    },
    ACCOUNT_DETAILS: {
        path: [
            { transName: 'dashboard', type: 'link', linkURL: appRoutes.ACCOUNT_DETAILS },
            { transName: 'accountDetailshead', type: 'text', linkURL: '' },
        ],
        PageName: 'accountDetailshead',
    },
}

export const dataTables = {
    BILLING: (values: [], masterData = []) => ({
        data: values.map((v: any) => {
            return {
                ...v, icon: v[apiVrbls.BILLING.PAY_STATUS]
            }
        }),
        allMasterData: masterData.map((v: any) => {
            return {
                ...v, icon: v[apiVrbls.BILLING.PAY_STATUS]
            }
        }),
        columns: [
            { eleName: apiVrbls.BILLING.INVOICE_ID, headTrans: 'id', sort: true, filter: false, isActive: true },
            {
                eleName: apiVrbls.BILLING.CUSTOMER_LE,
                headTrans: 'customerLe',
                sort: true,
                search: true,
                filter: false,
                filterData: {
                    element: apiVrbls.BILLING.CUSTOMER_LE,
                    values: masterData.map((e: any) => e[apiVrbls.BILLING.CUSTOMER_LE]).filter((it, i, ar) => ar.indexOf(it) === i)
                },
                isActive: true
            },
            {
                eleName: apiVrbls.BILLING.TATA_ENTITY,
                headTrans: 'entity',
                sort: true,
                search: true,
                filter: false,
                isActive: true
            },
            {
                eleName: apiVrbls.BILLING.PO_NUMBER,
                headTrans: 'poNo',
                sort: true,
                filter: true,
                filterData: {
                    element: apiVrbls.BILLING.PO_NUMBER,
                    values: masterData.map((e: any) => e[apiVrbls.BILLING.PO_NUMBER]).filter((it, i, ar) => ar.indexOf(it) === i)
                },
                isActive: true
            },
            {
                eleName: apiVrbls.BILLING.PAY_STATUS,
                headTrans: 'status',
                sort: true,
                filter: true,
                filterData: {
                    element: apiVrbls.BILLING.PAY_STATUS,
                    values: masterData.map((e: any) => e[apiVrbls.BILLING.PAY_STATUS]).filter((it, i, ar) => ar.indexOf(it) === i)
                },
                isActive: true
            },
            {
                eleName: apiVrbls.BILLING.INVOICE_AMT,
                headTrans: 'invoiceAmount',
                sort: true,
                filter: true,
                filterData: {
                    element: apiVrbls.BILLING.CURENCY,
                    values: masterData.map((e: any) => e[apiVrbls.BILLING.CURENCY]).filter((it, i, ar) => ar.indexOf(it) === i)
                },
                isActive: true
            },
            {
                eleName: apiVrbls.BILLING.INVOICE_DATE,
                headTrans: 'invoiceIssuedDate',
                sort: false,
                filter: false,
                isActive: true
            },
            { eleName: 'Due_date', headTrans: 'dueDate', sort: false, filter: false, isActive: true },
        ],
        tableName: 'billing',
    }),
}

export const apiDefaultrespons = {
    LOGIN_ERRRO: {
        "meta_data": {
            "api_name": "token"
        },
        "data": {
            "data": null,
            "message": "Internal Error",
            "status": 404
        }
    }
}


export const staticErrors = {
    serverInactive: "Opps! Something went wrong"
}


export const apiVrbls = {
    USER: {
        ACCESS_TOKEN: "access_token",
        REFRESH_TOKEN: "refresh_token",
        IS_LOGGED_IN_FIRST: "isLoginFirstTime",
        EMAIL_ID: "emailId"
    },

    BILLING: {
        CURENCY: "Currency",
        INVOICE_AMT: "Invoice_amt",
        INVOICE_ID: "Invoice_no",
        CUSTOMER_LE: "Customer_LE",
        TATA_ENTITY: "Tata_Entity",
        PO_NUMBER: "PO_number",
        PAY_STATUS: "Payment_Status",
        INVOICE_DATE: "Invoice_date"
    }
}
