import  { connection } from '../config/database'
import { ProductType, ProductDetailType, ProtectionProductType } from './base/base.model'

class ProductModel {
    getAll = (limit: number, offset: number): Promise<ProductType[] | null>=> {
        return new Promise((resolve, reject)=> {
            
            const query  = `SELECT id_lohang, name_lohang, date_thuhoach, soluong_lua, status_lohang
                            FROM tbl_lohang LIMIT ?, ?`

            connection.query(query, [offset, limit], (err, result) => {
                if(err) 
                    reject(err)
                else if(result.length > 0)
                        resolve(result as ProductType[])
                    else
                        resolve(null)
            })
        })
    }

    getById = (id: number): Promise<ProductDetailType | null> => {
        return new Promise((resolve, reject) => {
            
            const query = `SELECT id_lohang, name_lohang, date_thuhoach, image_lohang, status_lohang, lh.id_nhatkydongruong,
                                  soluong_lua, name_gionglua, name_lichmuavu, fullname_xavien, address_xavien, phone_number_xavien, email_xavien
                           FROM tbl_lohang lh
                                INNER JOIN tbl_gionglua gl ON lh.id_gionglua = gl.id_gionglua
                                INNER JOIN tbl_nhatkydongruong nkdr ON lh.id_nhatkydongruong = nkdr.id_nhatkydongruong
                                INNER JOIN tbl_lichmuavu lmv ON nkdr.id_lichmuavu = lmv.id_lichmuavu
                                INNER JOIN tbl_xavien xv ON lh.id_xavien = xv.id_xavien
                           WHERE id_lohang = ?
                           `

            connection.query(query, [id], (err, result)=>{
                if(err) {
                    reject(err)
                }else {
                    if(result.length > 0) {
                        resolve(result[0] as ProductDetailType)
                    }else{
                        resolve(null)
                    }
                }
            })
        })
    }

    getProtectionProductByLogId = (logId: number): Promise<ProtectionProductType[]> => {
        return new Promise((resolve, reject) => {
            
            const query = `SELECT name_thuocbaovethucvat, qty_thuocbaovethucvat,
                                  price_thuocbaovethucvat, unit_thuocbaovethucvat
                           FROM tbl_thuocbaovethucvat tbvtv
                                INNER JOIN tbl_nhatkyhoatdong nkhd ON nkhd.id_thuocbaovethucvat = tbvtv.id_thuocbaovethucvat
                           WHERE id_nhatkydongruong = ?`
            
            connection.query(query, [logId], (err, result)=> {
                if(err) {
                    reject(err)
                }else{
                    resolve(result as ProtectionProductType[])
                }
            })

        })
    }

    getActivityByDate = (id: number, date: string): Promise<any> => {
        return new Promise((resolve, reject) => {

            const query = `SELECT name_nhatkyhoatdong, name_thuocbaovethucvat,
                                  qty_thuocbaovethucvat, price_thuocbaovethucvat,
                                  tinhhinhsinhtruong
                           FROM tbl_lohang lh
                                INNER JOIN tbl_nhatkydongruong nkdr ON nkdr.id_nhatkydongruong = lh.id_nhatkydongruong
                                INNER JOIN tbl_nhatkyhoatdong nkhd ON nkdr.id_nhatkydongruong = nkhd.id_nhatkydongruong
                                INNER JOIN tbl_thuocbaovethucvat tbvtv ON nkhd.id_thuocbaovethucvat = tbvtv.id_thuocbaovethucvat
                            WHERE nkdr.id_xavien = ? AND nkhd.create_at LIKE ?`
            connection.query(query, [id, date+'%'], (err, result)=> {
                if(err) {
                    reject(err)
                }else {
                    if(result.length > 0)
                        resolve(result)
                    else
                        resolve(null)
                }
            })
        })
    }

    getActivityDateByFarmerId = (id: number): Promise<any> => {
        return new Promise((resolve, reject)=>{
            
            const query = `SELECT DISTINCT SUBSTRING(nkhd.create_at, 1, 10) create_at
                           FROM tbl_nhatkyhoatdong nkhd
                                INNER JOIN tbl_nhatkydongruong nkdr ON nkhd.id_nhatkydongruong = nkdr.id_nhatkydongruong
                           WHERE id_xavien = ?`
            
            connection.query(query, [id], (err, result)=> {
                if(err) {
                    reject(err)
                }else{
                    if(result.length > 0){
                        resolve(result)
                    }else
                        resolve(null)
                }
            })

        })
    }

    create  = (product: ProductType): Promise<number> => {

        return new Promise((resolve, reject) => {

            const insertion = `INSERT INTO tbl_lohang SET ?`

            connection.query(insertion, product, (err, result) => {
                if(err)
                    reject(err)
                else
                    resolve(result.insertId as number)
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