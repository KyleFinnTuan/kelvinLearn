import express from 'express'
import { productController } from '../controllers/products.controller.js'
import { userController } from '../controllers/users.controller.js'


const router = express.Router()

router.get('/', (req,res)=> {
    console.log('javascrip calss')
    res.send ("hi")
    
})

router.post('/products' , productController.addProduct)
router.put('/products/:id', productController.updateProduct)
router.delete('/products/:id', productController.removeProduct)
router.get('/users/:id/products', userController.getUsers)

export default router