import express from 'express'
import AuthController from '../controllers/auth.controller'

const route = express.Router()

route.get('/login', AuthController.login)


export default route

