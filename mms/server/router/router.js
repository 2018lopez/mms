const products = require('../controller/products')
const router = require('express').Router()


//Begin Products
router.get('/products',products.get.products)
router.get('/products/:id', products.get.productById)
router.post('/products/add', products.post.productCreate)
router.put('/product/:id', products.put.updateProduct)
router.delete('/products/:id', products.delete.productDelete)

//End Products



module.exports = router

