import { Request, Response } from 'express'
import ProductModel from '../models/product.model'

class ProductController {
    getAll = async (req: Request, res: Response): Promise<Response> => {

        const limit = Number(req.query.limit as string)
        const offset = Number(req.query.offset as string)
    
        try {
            const products = await ProductModel.getAll(limit, offset)
            return res.status(200).json({
                message: 'Lấy dữ liệu thành công.',
                data: products
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                message: 'Máy chủ không phản hồi.'
            })
        }
    }

    getById = async (req: Request, res: Response): Promise<Response> => {
        try {
            const id = req.params.id
    
            if(!id)
                return res.status(401).json({
                    message: 'Dữ liệu không được thành lập'
                })
            
            const product = await ProductModel.getById(parseInt(id))
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
            console.log(err)
            return res.status(500).json({
                message: 'Máy chủ không phản hồi.'
            })
        }
    }

    getActivityByDate = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id, date } = req.query
    
            if(!id || !date)
                return res.status(401).json({
                    message: 'Dữ liệu không được thành lập.'
                })
    
            const activity = await ProductModel.getActivityByDate(Number(id as string), date as string)
    
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
            console.log(err)
            return res.status(500).json({
                message: 'Máy chủ không phản hồi.'
            })
        }
    }

    create = async (req: Request, res: Response): Promise<Response> => {
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
    
            const isAddition = await ProductModel.create(product)
    
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
            console.log(err)
            return res.status(500).json({
                message: 'Máy chủ không phản hồi.'
            })
        }
    }
}


export default new ProductController