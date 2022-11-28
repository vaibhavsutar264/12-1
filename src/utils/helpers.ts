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
    try {
        const take = (params.get('take')) || 0
        const page = (params.get('page')) || 0
        return { curr: +page, take: +take, total: count }
    } catch (e) {
        return { curr: 0, take: 0, total: count }
    }
}