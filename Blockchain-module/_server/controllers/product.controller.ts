import { Request, Response } from 'express'
import ProductModel from '../models/product.model'

class ProductController {
    getAll = async (req: Request, res: Response): Promise<Response> => {

        const limit = Number(req.query.limit ? req.query.limit as string : 25)
        const offset = Number(req.query.offset ? req.query.offset as string : 0)
    
        try {
            const products = await ProductModel.getAll(limit, offset)
            const convertProducts = products?.map(product => {

                const convertHarvestDate = new Date(product.date_thuhoach)

                return {
                    ...product,
                    status_lohang: Number(product.status_lohang),
                    date_thuhoach: `${convertHarvestDate.getDate()} - ${convertHarvestDate.getMonth()} - ${convertHarvestDate.getFullYear()}`
                }
            })

            return res.status(200).json({
                message: 'Lấy dữ liệu thành công.',
                data: convertProducts
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
            
            const product = await ProductModel.getById(Number(id))

            if(product) {

                const protectionProduct = await ProductModel.getProtectionProductByLogId(Number(product.id_nhatkydongruong))

                return res.status(200).json({
                    message: 'Lấy dữ liệu thành công.',
                    data: {
                        ...product,
                        status_lohang: Number(product.status_lohang),
                        thuocbaovethucvat: protectionProduct
                    }
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

            
            console.log(id, date)
    
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

    getActivityDateByFarmerId = async (req: Request, res: Response): Promise<Response> => {
        try {
            const id = req.params.id ? Number(req.params.id) : null

            if(!id)
                return res.status(401).json({
                    message: 'Dữ liệu không được thành lập',
                })

            const activityDates = await ProductModel.getActivityDateByFarmerId(id)

            if(activityDates) {

                const newActivityDates = activityDates.map((value: any, index: number) =>{
                    const convertDate = new Date(value.create_at)
                    return {
                        dateTradition: value.create_at,
                        dateFormat: `${convertDate.getDate()}-${convertDate.getMonth() + 1}-${convertDate.getFullYear()}`
                    }
                })

                return res.status(200).json({
                    message: 'Lấy dữ liệu thành công.',
                    data: newActivityDates
                })
            }

            return res.status(200).json({
                message: 'Lấy dữ liệu thành công.',
                data: []
            })

        }catch(err){
            console.log(err)
            return res.status(500).json({
                message: 'Máy chủ không phản hồi.'
            })
        }
    }

    create = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { productName } = req.body
            const { riceId, riceQuantity } = req.body
            const { logId, farmerId, harvestDate, status } = req.body
            const image = req.file ? req.file.filename : null
    
            if (!productName)
                return res.status(401).json({
                    message: 'Dữ liệu không được thành lập.'
                })
    
            if (!riceQuantity || !riceId)
                return res.status(401).json({
                    message: 'Dữ liệu không được thành lập.'
                })
    
            if (!logId || !farmerId || !harvestDate || !status)
                return res.status(401).json({
                    message: 'Dữ liệu không được thành lập.'
                })
                	
            const product = {
                name_lohang: productName,
                id_gionglua: riceId,
                soluong_lua: riceQuantity,
                id_nhatkydongruong: logId,
                id_xavien: farmerId,
                date_thuhoach: harvestDate,
                image_lohang: image,
                status_lohang: status
            }
    
            const insertId = await ProductModel.create(product)
    
            if (insertId) {
                return res.status(200).json({
                    message: 'Thêm dữ liệu thành công.',
                    data: {
                        productId: insertId,
                        ...product
                    }
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