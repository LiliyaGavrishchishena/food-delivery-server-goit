const path = require('path');
const fs = require('fs');

const filePath = path.join(
  __dirname,
  '../../',
  'db/products',
  'all-products.json'
);

const getProducts = (request, response) => {
  const productsJson = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(productsJson);

  response.set('Content-Type', 'application/json');

  response.status(200);

  products
    ? response.json({ status: 'success', products: products })
    : response.json({ status: 'not found' });
};

module.exports = getProducts;
