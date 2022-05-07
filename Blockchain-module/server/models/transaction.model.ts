import { connection } from '../config/database'
interface TransactionDataModel {
    cooperateId: number,
    productId: number,
    buyerId: number,
    cooperateDate: string,
    transactionNumber: number
    image: string,
    status: string,
    status_HTX: string,
    status_thuonglai: string
}

export default new class TransactionModel {
    getCurrentTime(): string {
        //get current time
        return ""
    }
    
    checkBuyerAndHTX(productId: number, buyerId: number): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const sql = `SELECT c.id_thuonglai 
            FROM tbl_xavien as a, tbl_lohang as b, tbl_hopdongmuaban as c 
            WHERE a.id_xavien = b.id_xavien 
                AND a.id_hoptacxa = c.id_hoptacxa 
                AND b.id_lohang = ${productId}`
            connection.query(sql, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    const contractBuyerId = JSON.parse(JSON.stringify(result))[0].id_thuonglai
                    const checkBuyerAndHTX = (contractBuyerId == buyerId) ? true : false
                    resolve(checkBuyerAndHTX)
                }
            })
        })
    }
    
    create(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(true)
        })
    }
}