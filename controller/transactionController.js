const { product, cart, user, order } = require("../data/data");

module.exports.checkout = (req, res) => {};

module.exports.payment = (req, res) => {};

module.exports.getOrders = (req, res) => {
  console.log("==> ini terpanggil");
  let id = +req.params.id;
  let result = order.find((el) => {
    return el.id === id;
  });
  console.log(result);
  res.status(200).json(result);
};
