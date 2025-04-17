const express = require("express");
const cartRouter = express.Router();
const { addToCart, getCart } = require('../controller/userController');

cartRouter.post('/', addToCart);
cartRouter.get('/', getCart);

module.exports = cartRouter;