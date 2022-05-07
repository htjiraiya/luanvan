import { connection } from '../config/database'
import { TransactionDataModel } from './base/base.model'

export default new class TransactionModel {
    getCurrentTime(): string {
        //get current time
        const date = new Date()
        const year = date.getFullYear()

        const month = ( date.getMonth() + 1 ) < 10 ? 
        `0${date.getMonth() + 1}` :
        `${date.getMonth() + 1}`

        const day = ( date.getDate() ) < 10 ?
        `0${date.getDate()}` : 
        `${date.getDate()}`

        return `${year}-${month}-${day}`
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
    
    create( transaction: TransactionDataModel ): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const image = transaction.image || ""
            const createAt = this.getCurrentTime()

            const sql = `INSERT INTO tbl_giaodich (
                id_giaodich, 
                id_lohang, 
                id_thuonglai, 
                date_giaodich, 
                image_giaodich, 
                number_giaodich, 
                status_giaodich, 
                status_htx, 
                status_thuonglai, 
                created_at, 
                updated_at
            ) VALUES (
                '${transaction.cooperateId}', 
                '${transaction.productId}', 
                '${transaction.buyerId}', 
                '${transaction.cooperateDate}', 
                '${image}', 
                '${transaction.transactionNumber}', 
                '${transaction.status}', 
                '${transaction.status_HTX}', 
                '${transaction.status_buyer}', 
                '${createAt}', 
                '${createAt}'
            )`
            
            connection.query(sql, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(true)
                }
            })

        
        })
    }

    getBuyersByFramerId(framerId: number): Promise<{buyerId: number, buyerName: string}> {
        return new Promise((resolve, reject) => {
            const sql = `SELECT c.id_thuonglai, c.fullname_thuonglai
                FROM tbl_xavien as a, tbl_hopdongmuaban as b, tbl_thuonglai as c
                WHERE a.id_hoptacxa = b.id_hoptacxa
                    AND b.id_thuonglai = c.id_thuonglai
                    AND a.id_xavien = ${framerId}`
            
            connection.query(sql, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    const listBuyers = JSON.parse(JSON.stringify(result))
                    
                    resolve(listBuyers.map((element:{id_thuonglai: number, fullname_thuonglai:string}) => {
                        return {buyerId: element.id_thuonglai, fullNameBuyer: element.fullname_thuonglai}
                    }))
                }
            })
        })
    }
}