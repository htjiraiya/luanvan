import express from 'express';
import TransactionController from '../controllers/transaction.controller'

const route = express.Router()

route.get('/', TransactionController.getAll)

route.get('/:id', TransactionController.getById)

route.get('/buyers/:framerId', TransactionController.getBuyersByFramerId)

route.post('/', TransactionController.create)

route.put('/', TransactionController.update)

export default route