import serve from './axios'

export async function getHomeData(type, page) {
    return await serve({
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