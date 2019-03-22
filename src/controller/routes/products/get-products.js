const Product = require('../../../domain/db/schemas/product');

const getAllProducts = (request, response) => {
  const query = request.query.categories;
  const category = query ? { categories: query } : {};

  const sendResponse = products => {
    response.set('Content-type', 'application/json');
    response.status(200);
    products.length !== 0
      ? response.json({ status: 'success', products })
      : response.json({ status: 'No such products', products: [] });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'product was not found'
    });
  };

  Product.find(category)
    .populate('Ingredient')
    .exec(function(err, product) {
      if (err) return sendError(err);
      sendResponse(product);
    });
};

module.exports = getAllProducts;
