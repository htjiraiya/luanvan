import express from 'express'

import { getDataChart } from '../controllers/chart.controller'

const route = express.Router()

route.get('/', getDataChart)

export default route