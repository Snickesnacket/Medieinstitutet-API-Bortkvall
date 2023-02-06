/**
 * Router Template
 */
import express from 'express'
import { check, validationResult } from 'express-validator'
import { index, show, store, } from '../controllers/order_controller'
const router = express.Router()


/**
 * GET /resource
 */
router.get('/', index)

/**
 * GET /resource/:resourceId
 */
router.get('/:ordersId', show)

/**
 * POST /resource
 */

router.post('/', [validateOrderRequest]
    , store)


export default router