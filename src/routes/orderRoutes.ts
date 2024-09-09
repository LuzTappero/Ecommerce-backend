import express from 'express'
import OrderController from '../controllers/orderControllers'
const orderRoutes = express.Router()
import { verifyToken } from '../middlewares/verifyToken'

orderRoutes.get('/', verifyToken, OrderController.getUserPurchases)

orderRoutes.post('/saveCart', verifyToken, OrderController.saveCart)

export default orderRoutes