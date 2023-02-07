/**
 * Router Template
 */
import express from 'express'
import { index, show, store, } from '../controllers/product_controller'
const router = express.Router()

/**
 * GET /resource
 */
router.get('/', index)

/**
 * GET /resource/:resourceId
 */
router.get('/:productId', show)

/**
 * POST /resource
 */
router.post('/', [], store)


export default router