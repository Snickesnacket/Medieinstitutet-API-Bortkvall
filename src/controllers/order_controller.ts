import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'

export const index = async (req: Request, res: Response) => {

    try {
        const orders = await prisma.order.findMany({
             include: {
                order_items: true
            }
        })

        res.send({
            status: "success",
            data: orders,
        })

    } catch (err) {
        res.status(500).send({ status: "error", message: "Something went wrong" })
    }
}

export const show = async (req: Request, res: Response) => {
    const orderId = Number(req.params.ordersId)

    if (isNaN(orderId)) {
        return res.status(400).send({ status: "fail", data: "Invalid order ID" })
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
        return res.status(500).send({ status: "error", message: "Not found" })
    }
}

export const store = async (req: Request, res: Response) => {

    const { customer_address, customer_phone, customer_city, customer_email, customer_first_name, customer_last_name, customer_postcode, order_items, order_total, } = req.body

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
        res.status(500).send({ status: "error", message: "Something went wrong" })
    }
}
