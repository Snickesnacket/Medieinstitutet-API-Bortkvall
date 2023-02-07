/**
 * Router Template
 */
import express from 'express'
import { index, show, store, } from '../controllers/order_controller'

import orders from './orders'



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

router.post('/', []
    , store)


export default router