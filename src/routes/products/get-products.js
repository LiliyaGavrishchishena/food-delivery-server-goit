const Product = require('../../db/schemas/product');

const getAllProducts = (request, response) => {
  const sendResponse = products => {
    response.set('Content-type', 'application/json');
    response.status(200);
    response.json({ status: 'success', products });
  };

  Product.find()
    .then(sendResponse)
    .catch(err => {
      console.error(err);
    });
};

module.exports = getAllProducts;
