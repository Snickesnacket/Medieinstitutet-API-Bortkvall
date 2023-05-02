import express from "express"
import productsRouter from './products'
import orderRouter from './orders'
import { validateOrder, validateProduct } from '../Validations'

const router = express.Router()

router.get('/', (req, res) => {
	res.send({
		message: "I AM API, BEEP!!! BOOP",
	})
})

router.use('/products', validateProduct, productsRouter)

router.use('/orders', validateOrder, orderRouter)

export default router
