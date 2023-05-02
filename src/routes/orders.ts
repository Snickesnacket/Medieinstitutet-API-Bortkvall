import express from 'express'
import { index, show, store, } from '../controllers/order_controller'

const router = express.Router()

router.get('/', index)

router.get('/:ordersId', show)

router.post('/', [], store)

export default router
