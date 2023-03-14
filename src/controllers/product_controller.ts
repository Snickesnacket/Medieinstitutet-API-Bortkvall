/**
 * Controller Template
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'

// Create a new debug instance
const debug = Debug('prisma-boilerplate:product_controller')

/**
 * Get all products
 */
export const index = async (req: Request, res: Response) => {
    try {
        const products = await prisma.product.findMany()

        res.send({
            status: "success",
            data: products,
        })

    } catch (err) {
        debug("Error thrown when finding products", err)
        res.status(500).send({ status: "error", message: "Something went wrong" })
    }
}

/**
 * Get a single resource
 */
export const show = async (req: Request, res: Response) => {
    const productId = Number(req.params.productId)

    if (isNaN(productId)) {
        return res.status(400).send({ status: "error", message: "Invalid product ID" })
    }

    try {
        const product = await prisma.product.findUniqueOrThrow({
            where: {
                id: productId,
            }
        })

        res.send({
            status: "success",
            data: product,
        })

    } catch (err) {
        debug("Error thrown when finding product with id %o: %o", req.params.productId, err)
        return res.status(404).send({ status: "error", message: "Not found" })
    }
}


/**
 * Create a resource
 */
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
        debug("Error thrown when posting products", err)
        res.status(500).send({ status: "error", message: "Something went wrong" })
    }

}


