import serve from './axios';

export function getDetail(iid) {
    console.log(iid);
    return serve({
        url: '/detail',
        params: {
          iid
        }
    })
}

export class Goods {
    constructor(itemInfo,columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.swiperImg = itemInfo.topImages
        this.columns = columns;
        this.services = services;
        this.nowPrice = itemInfo.highNowPrice;
    }
}