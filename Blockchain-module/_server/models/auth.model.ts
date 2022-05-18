
import { connection } from '../config/database'

class AuthModel {

    getFarmer = async (username: string): Promise<any> => {
        return new Promise((resolve, reject) => {
    
            const query  = `SELECT xv.id_xavien, email_xavien, password, id_role 
                            FROM tbl_xavien xv 
                                INNER JOIN xavien_roles xvr ON xv.id_xavien = xvr.id_xavien 
                            WHERE username = ?`
    
            connection.query(query, [username], (err, result)=> {
                if(err) {
                    reject(err)
                }else {
                    if(result.length > 0) {
                        resolve(result[0])
                    }else
                        resolve(null)
                }
            })
        })
    }

    getBuyer = (username: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            const query  = `SELECT id_thuonglai, email_thuonglai, password 
                            FROM tbl_thuonglai 
                            WHERE username = ?`
                            
            connection.query(query, [username], (err, result)=> {
                if(err) {
                    reject(err)
                }else {
                    if(result.length > 0) {
                        resolve(result[0])
                    }else
                        resolve(null)
                }
            })
        })
    }
}

export default new AuthModel