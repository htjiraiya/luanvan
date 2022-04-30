import  { connection } from '../config/database'

interface Product {
    productId: number
    productName: string
    riceName: string
    riceQuantity: number
    logId: number
    farmerId: number
    harvestDate: string
    image?: string
    status: number
}

const getAll = (limit: number, offset: number): Promise<any>=> {
    return new Promise((resolve, reject)=> {
        resolve(true)
    })
}

const getById = (id: number): Promise<any> => {
    return new Promise((resolve, reject) => {
        resolve(true)
    })
}

const getActivityByDate = (id: number, date: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        resolve(true)
    })
}

const create  = (product: Product): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        resolve(true)
    })
}

export {
    create,
    getAll,
    getById,
    getActivityByDate
}