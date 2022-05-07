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

            resolve(true)
        })
    }
}


export default new ProductModel