import {Request, Response, NextFunction} from 'express'
const accessTokenSecret = process.env.TOKEN_KEY as string
import { verifyToken } from '../helpers/auth.helper'

declare global {
    namespace Express {
        interface Request {
            user: object,
        }

    }
}

let isAuth = async (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers['x-access-token'] as string || req.headers['authorization'] as string
    if (token) {
        token = token.replace(/^Bearer\s+/, "")
        try {
            const decoded = await verifyToken(token, accessTokenSecret);
            req.user = decoded
            next()
        } catch (error) {
            return res.status(403).json({
                message: 'Unauthorized',
            });
        }
    } else {
        return res.status(403).json({
            message: 'No token provided.',
        });
    }
}
module.exports = {
    isAuth: isAuth,
};