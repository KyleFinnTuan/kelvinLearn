import express from 'express'
import { productController } from '../controllers/products.controller.js';


const router = express.Router();

router.post('/products', productController.addProduct)
router.get('/products/:id', productController.getProduct)

export default router;