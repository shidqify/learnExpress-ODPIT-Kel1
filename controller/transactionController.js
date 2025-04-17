const { product, cart, user, order } = require("../data/data");

module.exports.checkout = (req, res) => {
  const { productId, quantity, price } = req.body;

  if (cart.length !== 0) {
    return res.status(400).json({ message: "Cart anda masih kosong" });
  }

  // Cek apakah data lengkap
  if (!productId || !quantity || !price) {
    return res.status(400).json({ message: "Data tidak lengkap!" });
  }

  //Checkout Item from Cart
  const orderData = product.filter((it) =>
    it.product.toLocaleLowerCase().includes(productId)
  );

  cart.pop();

  // Masukin ke Order
  order.push(orderData);
  res.status(200).json({ message: "Order berhasil dibuat!" });
};

module.exports.payment = (req, res) => {
  const { orderId, paymentMethod } = req.body;

  // Cek apakah ada orderId dan metode pembayaran yang dipilih
  if (!orderId || !paymentMethod) {
    return res
      .status(400)
      .json({
        message: "Data tidak lengkap, orderId dan paymentMethod wajib ada!",
      });
  }

  const orderItem = order.find((order) => order.id === orderId);

  if (!orderItem) {
    return res.status(404).json({ message: "Order tidak ditemukan!" });
  }
  res.status(200).json({ message: "Pembayaran berhasil dilakukan!" });
};

module.exports.getOrders = (req, res) => {
  console.log("==> ini terpanggil");
  let id = +req.params.id;
  let result = order.find((el) => {
    return el.id === id;
  });
  console.log(result);
  res.status(200).json(result);
};
