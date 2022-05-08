
interface Product {
    productId: number
    productName: string
    riceName: string
    riceQuantity: number
    logId: number
    farmerId: number
    harvestDate: string
    image?: string
    status: number
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