const { product, cart, user, order } = require("../data/data");

module.exports.getAllProduct = (req, res) => {};

module.exports.getDetailProduct = (req, res) => {
	const id = +req.params.id;
	const selectedProduct = product.find((it) => it.id === id);

	if (!selectedProduct) {
		res.status(404).json({
			message: "product not found",
		});
	}

	res.json(selectedProduct);
};

module.exports.searchProduct = (req, res) => {
	const query = req.query.q?.toLowerCase();

  if (!query) {
    res.json(product)
  }

	const selectedProducts = product.filter((it) =>
		it.product.toLocaleLowerCase().includes(query),
	);

	res.json(selectedProducts);
};
