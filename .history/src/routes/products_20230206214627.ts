/**
 * Router Template
 */
import express from 'express'
import { body } from 'express-validator'
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
router.post('/', [



], store)


export default router