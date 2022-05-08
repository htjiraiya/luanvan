import  { connection } from '../config/database'
import { Product } from './base/base.model'

class ProductModel {
    getAll = (limit: number, offset: number): Promise<any>=> {
        return new Promise((resolve, reject)=> {
            
            const query  = `SELECT *
                            FROM tbl_lohang LIMIT ?, ?`

            connection.query(query, [offset, limit], (err, result) => {
                if(err) 
                    reject(err)
                else if(result.length > 0)
                        resolve(result)
                    else
                        resolve(null)
            })
        })
    }

    getById = (id: number): Promise<any> => {
        return new Promise((resolve, reject) => {
            resolve(true)
        })
    }

    getActivityByDate = (id: number, date: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            resolve(true)
        })
    }

    create  = (product: Product): Promise<boolean> => {

        return new Promise((resolve, reject) => {

            const insertion = `INSERT INTO tbl_lohang SET ?`

            connection.query(insertion, product, (err, result) => {
                if(err)
                    reject(err)
                else
                    resolve(result.insertId)
            })
        })
    }

    getProductYetTransactionByFramerId = (framerId: number): Promise<{productId: number, productName: string}[]> => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT a.id_lohang, a.name_lohang
            FROM tbl_lohang as a
            WHERE a.id_lohang <> ALL (SELECT id_lohang
                                  FROM tbl_giaodich)
            AND a.id_xavien = ${framerId}`

            connection.query(sql, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    const listProducts = JSON.parse(JSON.stringify(result))
                        .map((element: {id_lohang: number, name_lohang: string}) => {
                            return {productId: element.id_lohang, productName: element.name_lohang}
                        })
                    
                    resolve(listProducts)
                }
            })
        })
    }
}


export default new ProductModel