import express from 'express';
import TransactionController from '../controllers/transaction.controller'
import UploadHelper from '../helpers/upload.helper';

const route = express.Router()
const upload = new UploadHelper('transactions')

route.get('/', TransactionController.getAll)

route.get('/:id', TransactionController.getById)

route.get('/buyers/:framerId', TransactionController.getBuyersByFramerId)

route.get('/products/:framerId', TransactionController.getProductsByFramerId)

route.post('/', upload.uploadImage('image'), TransactionController.create)

route.put('/', TransactionController.update)

export default route