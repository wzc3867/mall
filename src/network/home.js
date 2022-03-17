import serve from './axios'

export function getHomeData(type, page) {
    return  serve({
        url:"/home/data",
        params:{
            type,
            page
        }
    })
}

export function getHomeMultipleData() {
    return serve({
        url:"/home/multidata"
    })
}