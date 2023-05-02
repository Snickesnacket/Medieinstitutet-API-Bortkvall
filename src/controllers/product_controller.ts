import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'

export const index = async (req: Request, res: Response) => {
    try {
        const products = await prisma.product.findMany()

        res.send({
            status: "success",
            data: products,
        })

    } catch (err) {
        res.status(500).send({ status: "error", message: "Something went wrong" })
    }
}

export const show = async (req: Request, res: Response) => {

    const productId = Number(req.params.productId)

    if (isNaN(productId)) {
        return res.status(400).send({ status: "error", data: "Invalid product ID" })
    }

    try {
        const product = await prisma.product.findUnique({
            where: {
                id: productId,
            }
        })

        res.send({
            status: "success",
            data: product,
        })

    } catch (err) {
        return res.status(404).send({ status: "error", data: "Not found" })
    }
}

export const store = async (req: Request, res: Response) => {

    const { id, name, description, price, images, stock_status, stock_quantity } = req.body

    const validationErrors = validationResult(req)

    if (!validationErrors.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationErrors.array()
        })
    }
    
    try {
        const product = await prisma.product.create({
            data: {
                id,
                name,
                description,
                price,
                images,
                stock_status,
                stock_quantity
            }    
        }) 
    
        res.status(201).send({
            status: "success",
            data: product
        })

    } catch (err) {
        res.status(500).send({ status: "error", message: "Something went wrong" })
    }

}
