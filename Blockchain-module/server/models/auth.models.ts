
import { connection } from '../config/database'

const login = async (email: string): Promise<any> => {
    return new Promise((resolve, reject) => {

        const query  = `select id, email, password from users where email = ?`

        connection.query(query, [email], (err, result)=> {
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

export {
    login
}