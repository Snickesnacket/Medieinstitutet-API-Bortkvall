import express from 'express'
import { index, show, store, } from '../controllers/product_controller'

const router = express.Router()

router.get('/', index)

router.get('/:productId', show)

router.post('/', [], store)

export default router
