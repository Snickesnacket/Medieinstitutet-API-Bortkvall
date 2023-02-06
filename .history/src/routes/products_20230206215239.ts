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

    body("id").isInt(),
    body("name").isString(),
    body("description").isString(),
    body("price").isInt().isLength({ min: 1 }),
    body("images").isJSON(),
    body("stock_status").isString(),
    body("stock_quantity").isInt().isLength({ min: 0 })


], store)


export default router