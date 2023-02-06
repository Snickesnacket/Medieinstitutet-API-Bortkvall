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

router.post('/', 
   const validateOrder = [
    check('customer_first_name')
        .not().isEmpty().withMessage('Customer first name is required')
        .isString().withMessage('Customer first name must be a string'),
    check('customer_last_name')
        .not().isEmpty().withMessage('Customer last name is required')
        .isString().withMessage('Customer last name must be a string'),
    check('customer_address')
        .not().isEmpty().withMessage('Customer address is required')
        .isString().withMessage('Customer address must be a string'),
    check('customer_postcode')
        .not().isEmpty().withMessage('Customer postcode is required')
        .isString().withMessage('Customer postcode must be a string'),
    check('customer_city')
        .not().isEmpty().withMessage('Customer city is required')
        .isString().withMessage('Customer city must be a string'),
    check('customer_email')
        .not().isEmpty().withMessage('Customer email is required')
        .isEmail().withMessage('Customer email is not valid'),
    check('order_total')
        .not().isEmpty().withMessage('Order total is required')
        .isInt({ min: 1 }).withMessage('Order total must be a positive integer'),
    check('order_items')
        .not().isEmpty().withMessage('Order items are required')
        .isArray({ min: 1 }).withMessage('Order items must be an array with at least one item'),
];

const validateOrderItem = [
    check('qty').isInt({ gt: 0 }).withMessage('Quantity must be a positive number'),
    check('item_price').isInt({ gt: 0 }).withMessage('Item price must be a positive number'),
    check('item_total').isInt({ gt: 0 }).withMessage('Item total must be a positive number'),
];
, store)


export default router