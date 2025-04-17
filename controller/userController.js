const { product, cart, user, order } = require('../data/data');

module.exports.register = (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password
  }

  // check existing user
  user.forEach(u => {
    if (u.username === data.username) {
      res.status(400).json({
        message: "Username already exist"
      })
    }
  });

  // get id
  const newId = user[user.length - 1] + 1;
  data.id = newId;

  res.status(201).json({
    message: "Register success!",
    data
  });
}

module.exports.login = (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password
  }

  // Check account creds
  user.forEach(u => {
    if (u.username === data.username && u.password === data.password) {
      res.status(200).json({
        message: "Login success!",
        token: "token+" + u.username,
      })
    }
  });

  // return if there are no matching account
  res.status(400).json({
    message: "Wrong username/password"
  })
}

module.exports.addToCart = (req, res) => {

};

module.exports.getCart = (req, res) => {

}