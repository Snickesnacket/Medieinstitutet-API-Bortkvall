/**
 * Router Template
 */
import express from 'express'
import { body } from 'express-validator'
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
router.post('/', [
    body("id").isInt(),
    body("customer_first_name").isString().bail().isLength({ min: 2 }),
    body("customer_last_name").isString().bail().isLength({ min: 2 }),
    body("customer_address").isString(),
    body("customer_postcode").isString().bail().isLength({ max: 6 }),
    body("customer_city").isString(),
    body("customer_email").isEmail(),
    body('customer_phone').optional(),
    body("order_total").isInt().isLength({ min: 1 }),
    body("order_items.*.id").isInt().isLength({ min: 1 }),
    body("order_items.*.order_id").isInt().isLength({ min: 1 }),
    body("order_items.*.product_id").isInt().isLength({ min: 1 }),
    body("order_items.*.qty").isInt().isLength({ min: 1 }),
    body("order_items.*.item_price").isInt().isLength({ min: 1 }),
    body("order_items.*.item_total").isInt().isLength({ min: 1 })

], store)


export default router