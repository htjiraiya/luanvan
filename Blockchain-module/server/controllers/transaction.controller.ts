import { Request, Response } from "express";
import TransactionModel from '../models/transaction.model'


export default new class TransactionController {
    async getAll(req: Request, res: Response) {

    }
    
    async getById(req: Request, res: Response) {
    
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
            if ( !(await TransactionModel.checkBuyerAndHTX(productId, buyerId)) ) {
                return  res.status(400).json({
                    msg: "Thương không trùng khớp với hợp đồng của hợp tác xã"
                })
            }
    
            //handle data
    
            //store data to database 
            res.status(200).json({msg: "successfully"})
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }
    
    async update(req: Request, res: Response) {
    
    }
}

