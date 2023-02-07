import express from "express"
import productsRouter from './products'
import orderRouter from './orders'
import { validateOrder, validateProduct } from '../Validations'

// instantiate a new router
const router = express.Router()

/**
 * GET /
 */
router.get('/', (req, res) => {
	res.send({
		message: "I AM API, BEEP!!! BOOP",
	})
})

/**
 * [EXAMPLE] /resource
 */
router.use('/products', validateProduct, productsRouter)


router.use('/orders', validateOrder, orderRouter)


export default router

