const express = require("express");
const logger = require("../middlewares/utils/logger");
const router = express.Router();
const dataDummy = require("../data/data");
const {
  login,
  register,
  addToCart,
  getCart,
} = require("../controller/userController");
const {
  getAllProduct,
  getDetailProduct,
  searchProduct,
} = require("../controller/productController");
const {
  checkout,
  payment,
  getOrders,
} = require("../controller/transactionController");

// router.get('/greetings', (req, res) => {
//   console.log('halo');
//   logger.info('Accessing /greetings');
//   res.status(200).json({ message: "Halo browser" });
// });

// router.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   const data = {
//     name: username,
//     password,
//   }

//   logger.info('succes login');
//   res.status(202).json({
//     message: "berhasil login",
//     data: data
//   })
// });

// router.patch('/product/:id', (req, res) => {
//   const id = req.params;
//   // const data
// })

router.post("/register", login);
router.post("/login", login);
router.get("/orders/:id", getOrders);
router.get("/products", getAllProduct);

module.exports = router;
