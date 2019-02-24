const path = require('path');
const fs = require('fs');
const filePath = path.join(
  __dirname,
  '../../',
  'db/products',
  'all-products.json'
);

const getProductFromDb = id => {
  const productsJson = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(productsJson);
  const productId = products.find(product => product.id === Number(id));

  return productId;
};

const getProductId = (request, response) => {
  const id = request.params.id;
  const productId = getProductFromDb(id);

  response.set('Content-Type', 'application/json');

  response.status(200);

  productId
    ? response.json({ status: 'success', product: productId })
    : response.json({ status: 'no product', product: [] });
};

module.exports = getProductId;
