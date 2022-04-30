import express from 'express'
import { 
    getAll,
    getActivityByDate,
    getById,
    create,
 } from '../controllers/product.controller'

const route = express.Router()

route.get('/', getAll)
route.get('/:id', getById)
route.get('/activity/', getActivityByDate)
route.post('/', create)


export default route

