import { check, } from 'express-validator'



export const validateOrder = [

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


    check('order_items.*.product_id').isInt(),
    check('order_items.*.qty').isInt({ min: 1 }).withMessage('Quantity must be a positive number'),
    check('order_items.*.item_price').isInt({ min: 1 }).withMessage('Item price must be a positive number'),
    check('order_items.*.item_total').isInt({ min: 1 }).withMessage('Item total must be a positive number')

];

export const validateProduct = [

    check("id").isInt(),
    check('name').isString(),
    check('description').isString(),
    check('price').isInt().isLength({ min: 1 }),
    check('stock_status').isString(),
    check('stock_quantity').isInt().isLength({ min: 0 })

];