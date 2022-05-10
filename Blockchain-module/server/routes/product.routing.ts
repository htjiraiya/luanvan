import express from 'express'
import ProductController from '../controllers/product.controller'
import UploadHelper from '../helpers/upload.helper';

const route = express.Router()
const upload = new UploadHelper('products')

route.get('/', ProductController.getAll)
route.get('/activity/', ProductController.getActivityByDate)
route.get('/activity-date/:id', ProductController.getActivityDateByFarmerId)
route.get('/:id', ProductController.getById)
route.post('/', upload.uploadImage('image'), ProductController.create)


export default route

