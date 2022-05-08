import { Request, Response } from "express";
import TransactionModel from '../models/transaction.model'
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

    async create(req: Request, res: Response) {
        try {
            //get data
            const cooperateId = req.body.cooperateId
            const productId = req.body.productId
            const buyerId = req.body.buyerId
            const cooperateDate = req.body.cooperateDate
            const transactionNumber = req.body.transactionNumber

            //check data
            if (!cooperateId || !productId || !buyerId || !cooperateDate || !transactionNumber) {
                return res.status(400).json({
                    msg: "Không đúng dữ liệu"
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
                cooperateId: cooperateId,
                productId: productId,
                buyerId: buyerId,
                cooperateDate: cooperateDate,
                transactionNumber: transactionNumber,
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

