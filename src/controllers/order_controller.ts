/**
 * Controller Template
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'
// Create a new debug instance
const debug = Debug('prisma-boilerplate:order_controller')

/**
 * Get all orders
 */
export const index = async (req: Request, res: Response) => {
    try {
        const orders = await prisma.order.findMany()

        res.send({
            status: "success",
            data: orders,
        })

    } catch (err) {
        debug("Error thrown when making order", err)
        res.status(500).send({ status: "error", message: "Something went wrong" })
    }
}

/**
 * Get a single resource
 */
export const show = async (req: Request, res: Response) => {
    const orderId = Number(req.params.ordersId)

    if (isNaN(orderId)) {
        return res.status(400).send({ status: "error", message: "Invalid order ID" })
    }

    try {
        const order = await prisma.order.findUniqueOrThrow({

            where: {
                id: orderId,
            },
            include: {
                order_items: true
            }
        })

        res.send({
            status: "success",
            data: order,
        })

    } catch (err) {
        debug("Error thrown when finding order with id %o: %o", req.params.orderId, err)
        return res.status(404).send({ status: "error", message: "Not found" })
    }
}


/**
 * Create a resource
 */
export const store = async (req: Request, res: Response) => {
    console.log("req.body.order_items", req.body.order_items)
    const { id, customer_address, customer_phone, customer_city, customer_email, customer_first_name, customer_last_name, customer_postcode, order_items, order_total, orderId } = req.body
    console.log('orderId', id)

    const validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationErrors.array()
        })
    }

    try {
        const order = await prisma.order.create({
            data: {
                id: req.body.id,
                customer_first_name,
                customer_last_name,
                customer_address,
                customer_postcode,
                customer_city,
                customer_email,
                customer_phone,
                order_total,
                order_items: {
                    create: order_items
                },
            },
            include: {
                order_items: true
            }
        })
        res.status(201).send({
            status: "success",
            data: order,
        })
    } catch (err) {
        debug("Error thrown when posting products", err)
        res.status(500).send({ status: "error", message: "Something went wrong" })
    }
}


