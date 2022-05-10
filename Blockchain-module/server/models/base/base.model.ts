
type ProductType = {
    id_lohang?: number,
    name_lohang: string,
    date_thuhoach: string,
    soluong_lua: number,
    id_gionglua?: number,
    id_nhatkydongruong?: number,
    id_xavien?: number,
    image_lohang?: string | null,
    status_lohang?: string
}

type ProductDetailType = {
    id_lohang: number, 
    name_lohang: string,
    date_thuhoach: string, 
    image_lohang: string,
    status_lohang: string,
    soluong_lua: number,  
    name_gionglua: string, 
    name_lichmuavu: string, 
    fullname_xavien: string, 
    address_xavien: string, 
    phone_number_xavien: string, 
    email_xavien: string,
    id_nhatkydongruong: number
}

type ProtectionProductType = {
    name_thuocbaovethucvat: string, 
    qty_thuocbaovethucvat: number,
    price_thuocbaovethucvat: number,
    unit_thuocbaovethucvat: string
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
    ProductType,
    ProductDetailType,
    ProtectionProductType,
    TransactionDataModel
}