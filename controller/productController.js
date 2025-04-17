const { product, cart, user, order } = require("../data/data");

module.exports.getAllProduct = (req, res) => {
  console.log(req.query, "===> ini query");
  res.status(200).json(product);
};
module.exports.getDetailProduct = (req, res) => {};

module.exports.searchProduct = (req, res) => {};
