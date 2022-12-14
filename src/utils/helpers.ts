export const GetShowPages = (curr: any, take: any, total: any) => {
    let show = [];
    const totalPages = Math.ceil(total / take);
    if (totalPages <= 5) {
        for (let index = 0; index < totalPages; index++) { show.push(index + 1) }
    } else {
        if ((curr == 1) || (curr == 2) || (curr == 3)) {
            show = [1, 2, 3, 4, "..", totalPages]
        } else if ((curr == totalPages) || (curr == totalPages - 1) || (curr == totalPages - 2)) {
            show = [1, "..", totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
        } else {
            show = [1, "..", curr - 1, curr, curr + 1, "..", totalPages]
        }
    }
    return show
}

export const getPageParms = (count: any) => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('take') && params.get('page')) {
        const take = (params.get('take')) || 0
        const page = (params.get('page')) || 0
        return { curr: +page, take: +take, total: count }
    } else {
        setUlrParms(1, 10)
        return { curr: 1, take: 10, total: count }
    }
}

export const setUlrParms = (page: any, take: any) => {
    if ((<any>window).history.pushState) {
        const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?take=${take}&page=${page}`;
        window.history.pushState({ path: newurl }, '', newurl);
    }
}


export const sortArray = (array: any, element: any, dir: any) => {
    return array.sort((a: any, b: any) => {
        if (dir === -1) {
            return (a[element] > b[element]) ? -1 : ((b[element] < a[element]) ? 1 : 0)
        } else {
            return (a[element] < b[element]) ? -1 : ((b[element] > a[element]) ? 1 : 0)
        }
    })
}

export const searchArray = (array: any, value: any) => {
    if (value == "") {
        return array
    } else {
        return array.filter((d: any) => `${Object.values(d).join(",")}`.toLowerCase().includes(`${value}`.toLowerCase()))

    }
}

export const getFilterConditons = (filters: any) => {
    return filters.map((d: any) => {
        const m = JSON.parse(JSON.stringify(d.values.filter((l: any) => (l != ""))))
        if (m.length == 0) { return null }
        if (d.values.length != 0) {
            return `(${d.values.map((g: any) => `(f.${d.element} == "${g}")`).join(" || ")})`
        } else {
            return null;
        }
    }).filter((v: any) => v != null).join(" && ")
}

export const getCardCount = (array: any, element: any, value: any) => {
    if (value === "") {
        return array.length
    } else {
        return array.filter((s: any) => s[element] == value).length;
    }
}

// const data = {
//     "meta_data": {
//         "api_name": "invoice_list"
//     },
//     "result_data": {
//         "invoices": [{
//             id: 123,
//             text: "value"
//         }]
//     }
// }
// const schema = {
//     "meta_data": {
//         "type": "Object",
//         "required": true,
//         "properties": {
//             "api_name": {
//                 "type": "string",
//                 "required": true
//             }
//         }
//     },
//     "result_data": {
//         "type": "Object",
//         "required": true,
//         "properties": {
//             "invoices": {
//                 "type": "array",
//                 "required": true,
//                 "properties": {
//                     "id": {
//                         "type": "string",
//                         "required": true
//                     },
//                     "text": {
//                         "type": "string",
//                         "required": true
//                     },

//                 }
//             }
//         }
//     },
// }
