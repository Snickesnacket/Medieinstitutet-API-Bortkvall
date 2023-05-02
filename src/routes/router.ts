import express from 'express'
import { index, show, store, update, destroy } from '../controllers/_controller'
const router = express.Router()

router.get('/', index)

router.get('/:resourceId', show)

router.post('/', store)

router.patch('/:resourceId', update)

router.delete('/:resourceId', destroy)

export default router
