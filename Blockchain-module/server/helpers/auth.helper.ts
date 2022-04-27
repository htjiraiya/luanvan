import jwt from 'jsonwebtoken'

interface User {
    email: string
}

let createToken = (user: User, token_key: string, expire: string) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            { email: user.email },
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

let verifyToken = (token: string, token_key: string) => {
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
