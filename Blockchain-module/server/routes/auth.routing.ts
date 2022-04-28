import express from 'express'
import { login } from '../controllers/auth.controller'

const route = express.Router()

route.get('/login', login)


export default route

