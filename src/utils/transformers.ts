import { apiVrbls, staticErrors } from "./constants";

export const loginTransformer = (data: any) => {
    const resp = JSON.parse(data);
    const defaultResp = {
        "meta_data": { "api_name": "token" },
        "data": { "data": null, "message": "Incorrect username or password", "status": 200 }
    }
    try {
        if (resp.data && resp.data.message && resp.data.status && resp.data.data) {
            return resp
        } else {
            return defaultResp
        }
    } catch {
        return defaultResp
    }
}

export const userInfoTransformer = (data: any) => {
    const resp = JSON.parse(data);
    const defaultResp = {
        "meta_data": {
            "api_name": "userinfo"
        },
        "data": {
            "data": null,
            "message": "user Not found",
            "status": 200
        }
    }
    try {
        if (resp.data && resp.data.message && resp.data.status && resp.data.data) {
            return resp
        } else {
            return defaultResp
        }
    } catch {
        return defaultResp
    }
}

export const userInfoInternalTransformer = (data: any) => {
    const resp = JSON.parse(data);
    const defaultResp = {
        "meta_data": {
            "api_name": "userinfo"
        },
        "data": {
            "data": null,
            "message": "user Not found",
            "status": 200
        }
    }
    try {
        if (resp) {
            return resp
        } else {
            return defaultResp
        }
    } catch {
        return defaultResp
    }
}

export const resetPasswordTransformer = (data: any) => {
    const resp = JSON.parse(data);
    const defaultResp = {
        "meta_data": {
            "api_name": "resetPassword"
        },
        "data": {
            "data": null,
            "message": staticErrors.serverInactive,
            "status": 200
        }
    }
    try {
        if (resp.data && resp.data.message && resp.data.status && resp.data.data) {
            return resp
        } else {
            return defaultResp
        }
    } catch {
        return defaultResp
    }
}

export const forgotPasswordTransformer = (data: any) => {
    const resp = JSON.parse(data);
    const defaultResp = {
        "meta_data": {
            "api_name": "resetPassword"
        },
        "data": {
            "data": null,
            "message": staticErrors.serverInactive,
            "status": 200
        }
    }
    try {
        if (resp.data && resp.data.message && resp.data.data) {
            return resp
        } else {
            return defaultResp
        }
    } catch {
        return defaultResp
    }
}

export const logoutTransformer = (data: any) => {
    const resp = JSON.parse(data);
    const defaultResp = {
        "meta_data": {
            "api_name": "logout"
        },
        "data": {
            "data": null,
            "message": staticErrors.serverInactive,
            "status": 200
        }
    }
    try {
        if (resp.data && resp.data.message && resp.data.data) {
            return resp
        } else {
            return defaultResp
        }
    } catch {
        return defaultResp
    }
}



export const billingTransformer = (data: any) => {
    const resp = JSON.parse(data);
    const defaultResp = {
        "meta_data": {
            "api_name": "invoice_list"
        },
        "result_data": {
            "Invoices": []
        }
    }
    try {
        if (resp.result_data && resp.result_data.Invoices) {
            return {
                "meta_data": {
                    "api_name": "invoice_list"
                },
                "result_data": {
                    "Invoices": resp.result_data.Invoices.map((e: any) => {
                        return { ...e, "Invoice_amt": `${e[apiVrbls.BILLING.CURENCY]} ${e[apiVrbls.BILLING.INVOICE_AMT]}` }
                    })
                }
            }
        } else {
            return defaultResp
        }
    } catch {
        return defaultResp
    }
}





