import jwt from 'jsonwebtoken'
import  { UserType } from './base/base.helper'


let createToken = (user: UserType, token_key: string, expire: string):Promise<any> => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            { username: user.username },
            token_key,
            {
                algorithm: "HS256",
                expiresIn: expire,
            },
            (error, token) => {
                if (error) {
                    return reject(error);
                }
                resolve(token);
            });
    });
}

let verifyToken = (token: string, token_key: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, token_key, (error, decoded) => {
            if (error) {
                return reject(error);
            }
            resolve(decoded);
        });
    });
}

export {
    createToken,
    verifyToken
}
