const Product = require('../../db/schemas/product');

const getProduct = (request, response) => {
  const id = request.params.id;

  const sendResponse = product => {
    response.status(200);
    response.json(product);
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'product was not saved'
    });
  };

  Product.findById(id)
    .remove()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getProduct;
