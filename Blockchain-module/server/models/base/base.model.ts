
interface Product {
    name_lohang: string,
    id_gionglua: number,
    soluong_lua: number,
    id_nhatkydongruong: number,
    id_xavien: number,
    date_thuhoach: string,
    image_lohang: string,
    status_lohang: string
}

interface TransactionDataModel {
    cooperateId?: number,
    productId: number,
    buyerId: number,
    cooperateDate: string,
    transactionNumber: number,
    image?: string,
    status: string,
    status_HTX: string,
    status_buyer: string
}


export {
    Product,
    TransactionDataModel
}