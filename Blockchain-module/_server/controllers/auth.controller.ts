import {Request, Response} from 'express'
import AuthModel from '../models/auth.model'
import { createToken } from '../helpers/auth.helper'
import bcrypt from 'bcrypt'


class AuthController {

    login = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { username, password } = req.body
        
            if(!username || !password)
                return res.status(401).json({
                    message: 'Tài khoản không được thành lập.'
                })
            
            let user = await AuthModel.getFarmer(username)
        
            // (await bcrypt.compare(password, auth.password)
            if(user) {    
                const token = await createToken({username}, process.env.TOKEN_KEY as string, '2h')
                return res.status(200).json({
                    message: 'Đăng nhập thành công.',
                    data: {
                        token: token,
                        user: {
                            id: user.id_xavien,
                            role: user.id_role,
                            isFarmer: 1
                        }
                    }
                })
            }else {
                user = await AuthModel.getBuyer(username)
                if(user) {
                    const token = await createToken({username}, process.env.TOKEN_KEY as string, '2h')
                    return res.status(200).json({
                    message: 'Đăng nhập thành công.',
                    data: {
                        token: token,
                        user: {
                            id: user.id_thuonglai,
                            role: null,
                            isFarmer: 0
                        }
                    }
                })
                }
            }
        
            return res.status(401).json({
                message: 'Tài khoản không tồn tại.'
            })
                
        }catch (err) {
            console.log(err)
            return res.status(500).json({
                message: 'Máy chủ không phản hồi.'
            })
        }    
    }
}

export default new AuthController