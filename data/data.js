
module.exports.product = [{
  "id": 1,
  "product": "Roasted Vegetable Medley",
  "descProduct": "A mix of frozen roasted vegetables for an easy side dish."
}, {
  "id": 2,
  "product": "Watercolor Paint Set",
  "descProduct": "Vibrant watercolor paints that come with brushes and palettes."
}, {
  "id": 3,
  "product": "Herb Garlic Butter",
  "descProduct": "A flavorful garlic butter blend, perfect for cooking or baking."
}, {
  "id": 4,
  "product": "Cabbage",
  "descProduct": "Fresh green cabbage, great for salads and slaws."
}, {
  "id": 5,
  "product": "Peanut Butter Granola",
  "descProduct": "Crunchy granola full of peanut butter flavor and oats."
}]

module.exports.user = [
  {
      "id": 1,
      "username": "admin",
      "password": "admin"
  }, {
      "id": 2,
      "username": "user",
      "password": "user"
  }
]

module.exports.cart = [
  {
      "id": 1,
      "productId": 1,
      "userId": 1,
      "quantity": 2
  },
  {
      "id": 2,
      "productId": 3,
      "userId": 2,
      "quantity": 5
  }
]

module.exports.order = [
  {
      "id": 1,
      "products": [
          {
              "productId": 3,
              "quantity": 5
          },
          {
              "productId": 4,
              "quantity": 1
          },
          {
              "productId": 5,
              "quantity": 3
          }
      ],
      "userId": 2,
      "status": "completed"
  },
  {
      "id": 2,
      "products": [
          {
              "productId": 1,
              "quantity": 2
          },
          {
              "productId": 2,
              "quantity": 1
          }
      ],
      "userId": 1,
      "status": "pending"
  }
]