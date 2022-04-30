import express from 'express';
import {
    getAll,
    getById,
    create,
    update
} from '../controllers/transaction.controller'

const route = express.Router()

route.get('/', getAll)
route.get('/:id', getById)
route.post('/', create)
route.put('/', update)

export default route