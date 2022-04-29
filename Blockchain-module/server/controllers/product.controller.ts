import { Request, Response } from 'express'
import {
    getActivityByDate as getActivityByDateModel,
    getById as getByIdModel,
    getAll as getAllModel,
    create as createModel
} from '../models/product.model'


const getAll = async (req: Request, res: Response) => {

    const limit = parseInt(req.query.limit as string)
    const offset = parseInt(req.query.offset as string)

    try {
        const products = await getAllModel(limit, offset) as any
        return res.status(200).json({
            message: 'Lấy dữ liệu thành công.',
            data: products
        })
    } catch (err) {
        return res.status(500).json({
            message: 'Máy chủ không phản hồi.'
        })
    }

}

const getById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        if(!id)
            return res.status(401).json({
                message: 'Dữ liệu không được thành lập'
            })
        
        const product = await getByIdModel(parseInt(id))
        if(product) {
            return res.status(200).json({
                message: 'Lấy dữ liệu thành công.',
                data: product
            })
        }

        return res.status(401).json({
            message: 'Dữ liệu không được thành lập.'
        })

    }catch (err) {
        return res.status(500).json({
            message: 'Máy chủ không phản hồi.'
        })
    }
}

const getActivityByDate = async (req: Request, res: Response) => {
    try {
        const { id, date } = req.query

        if(!id || !date)
            return res.status(401).json({
                message: 'Dữ liệu không được thành lập.'
            })

        const activity = await getActivityByDateModel(parseInt(id as string), date as string)

        if(activity) {
            return res.status(200).json({
                message: 'Lấy dữ liệu thành công.',
                data: activity
            })
        }

        return res.status(401).json({
            message: 'Dữ liệu không được thành lập.'
        })

    }catch (err) {
        return res.status(500).json({
            message: 'Máy chủ không phản hồi.'
        })
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const { productId, productName } = req.body
        const { riceName, riceQuantity } = req.body
        const { logId, farmerId, harvestDate, image, status } = req.body

        if (!productId || !productName)
            return res.status(401).json({
                message: 'Dữ liệu không được thành lập.'
            })

        if (!riceQuantity || !riceName)
            return res.status(401).json({
                message: 'Dữ liệu không được thành lập.'
            })

        if (!logId || !farmerId || !harvestDate || !image || !status)
            return res.status(401).json({
                message: 'Dữ liệu không được thành lập.'
            })

        const product = {
            productId,
            productName,
            riceName,
            riceQuantity,
            logId,
            farmerId,
            harvestDate,
            image,
            status
        }

        const isAddition = await createModel(product)

        if (isAddition) {
            return res.status(200).json({
                message: 'Thêm dữ liệu thành công.',
                data: product
            })
        }

        return res.status(401).json({
            message: 'Dữ liệu không được thêm.'
        })
    } catch (err) {
        return res.status(500).json({
            message: 'Máy chủ không phản hồi.'
        })
    }
}

export  {
    getAll,
    getById,
    getActivityByDate,
    create,

}