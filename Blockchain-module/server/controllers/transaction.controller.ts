import { Request, Response } from "express";
import TransactionModel from '../models/transaction.model'
import productModel from "../models/product.model";
import { TransactionDataModel } from '../models/base/base.model'

export default new class TransactionController {
    async getAll(req: Request, res: Response) {

    }

    async getById(req: Request, res: Response) {

    }

    async getBuyersByFramerId(req: Request, res: Response) {
        try {
            //get data
            const framerId = req.params.framerId ? parseInt(req.params.framerId) : null

            //check data
            if (framerId == null) 
                return res.status(400).json({
                    msg: "Không đinh kèm dữ liệu"
                })
            
            //get list buyers
            const listBuyers = await TransactionModel.getBuyersByFramerId(framerId)

            //return data
            res.status(200).json({
                msg: 'Thành công',
                data: listBuyers
            })
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }

    async getProductsByFramerId(req: Request, res: Response) {
        try {
            //get data
            const framerId = req.params.framerId ? parseInt(req.params.framerId) : null

            //check data
            if (!framerId) 
                return res.status(400).json({
                    msg: "Không đính kèm dữ liệu"
                })

            //get list products
            const listProducts = await productModel.getProductYetTransactionByFramerId(framerId)

            //return data for client
            return res.status(200).json({
                msg: "Thành công",
                data: listProducts
            })
        } catch (error) {
            console.log(error)
            res.status(400)
        }
    }

    async create(req: Request, res: Response) {
        try {
            //get data
            const productId = req.body.productId
            const buyerId = req.body.buyerId
            const cooperateDate = req.body.cooperateDate
            const transactionNumber = req.body.transactionNumber
            const imageName = req.file ? req.file.filename : null;

            //check data
            if (!productId || !buyerId || !cooperateDate || !transactionNumber || !imageName) {
                return res.status(400).json({
                    msg: "Không đính kèm dữ liệu"
                })
            }

            //check constraint data
            //check buyer and HTX
            let status = '1';
            if (!(await TransactionModel.checkBuyerAndHTX(productId, buyerId))) {
                status = '0';
            }

            //handle data
            const transaction: TransactionDataModel = {
                productId: productId,
                buyerId: buyerId,
                cooperateDate: cooperateDate,
                transactionNumber: transactionNumber,
                image: imageName,
                status: status,
                status_HTX: '0',
                status_buyer: '0'
            }
            //store data to database 
            TransactionModel.create(transaction);

            //return data for client
            res.status(200).json({ 
                msg: "successfully" ,
                data: transaction
            })
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }

    async update(req: Request, res: Response) {

    }
}

