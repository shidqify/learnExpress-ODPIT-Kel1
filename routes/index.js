const express = require("express");
const logger = require("../middlewares/utils/logger");
const router = express.Router();
const cartRouter = require("./cartRoutes");
const dataDummy = require('../data/data');
const { getAllProduct, getDetailProduct, searchProduct } = require('../controller/productController');
const { checkout, payment, getOrders } = require('../controller/transactionController')
const userRouter = require('./userRoutes');


router.use('/user', userRouter)
router.use('/cart', cartRouter);
router.get('/products/:id', getDetailProduct)
router.get('/products', searchProduct)
router.get("/orders/:id", getOrders);
router.get("/products", getAllProduct);

module.exports = router;