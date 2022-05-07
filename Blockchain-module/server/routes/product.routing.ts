import express from 'express'
import ProductController from '../controllers/product.controller'

const route = express.Router()

route.get('/', ProductController.getAll)
route.get('/:id', ProductController.getById)
route.get('/activity/', ProductController.getActivityByDate)
route.post('/', ProductController.create)


export default route

