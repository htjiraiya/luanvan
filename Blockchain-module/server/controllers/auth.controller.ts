import {Request, Response} from 'express'
import { login as loginModel } from '../models/auth.models'
import { createToken } from '../helpers/auth.helper'
import bcrypt from 'bcrypt'


const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    console.log(email)

    if(!email || !password)
        return res.status(401).json({
            message: 'Tài khoản không được thành lập.'
        })
    
    const auth = await loginModel(email)

    // (await bcrypt.compare(password, auth.password)
    if(auth) {
        
        const token = await createToken({email}, process.env.TOKEN_KEY as string, '2h')
        return res.status(200).json({
            message: 'Đăng nhập thành công.',
            data: {
                token: token,
                user: {
                    id: auth.id,
                }
            }
        })
    }

    return res.status(401).json({
        message: 'Tài khoản không tồn tại.'
    })
        
 }


export {
    login
}