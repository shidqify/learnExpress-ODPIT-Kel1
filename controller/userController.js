const { product, cart, user, order } = require('../data/data');

module.exports.register = (req, res) => {

}

module.exports.login = (req, res) => {

}

module.exports.addToCart = (req, res) => {
    const { productId, quantity } = req.body;

    const authHeader = req.headers['authorization'];

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        req.token = token;
    } else {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const userData = user.find(user => user.token === req.token);

    if (userData) {
        const userId = userData.id;
        req.userId = userId;
    } else {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    const existingCartItem = cart.find(item => item.productId === productId && item.userId === req.userId);

    if (existingCartItem) {
        existingCartItem.quantity += quantity;
    } else {
        cart.push({
            id: cart[cart.length - 1].id + 1,
            productId,
            userId: req.userId,
            quantity
        });
    }

    res.status(201).json({
        message: 'Item added to cart successfully',
    });
};

module.exports.getCart = (req, res) => {
    const authHeader = req.headers['authorization'];

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        req.token = token;
    } else {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const userData = user.find(user => user.token === req.token);

    if (userData) {
        const userId = userData.id;
        req.userId = userId;
    } else {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    const cartItems = cart.filter(item => item.userId === req.userId);
    const result = cartItems.map(item => {
        const productData = product.find(product => product.id === item.productId);
        console.log(productData)
        return {
            id: item.id,
            quantity: item.quantity,
            productData: {
                name: productData.product,
                price: productData.price
            }
        }
    })

    res.status(200).json(
        {
            message: "success get cart",
            data: result
        }
    )
}