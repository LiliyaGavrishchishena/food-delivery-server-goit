const path = require('path');
const fs = require('fs');

const filePath = path.join(
  __dirname,
  '../../',
  'db/products',
  'all-products.json'
);

const getProductsIds = (products, ids) => {
  const idsToArr = ids.split(',').map(product => Number(product));
  const productsByIds = products.filter(product =>
    idsToArr.includes(product.id)
  );
  return productsByIds;
};

const getProductsCategory = (products, category) => {
  const productByCategory = products.filter(
    product => product.categories[0] === category
  );
  return productByCategory;
};

const getProducts = (request, response) => {
  const productsJson = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(productsJson);
  const query = request.query;

  let filteredProducts = [...products];

  if (query.ids) {
    filteredProducts = getProductsIds(products, query.ids);
  }

  if (query.category) {
    filteredProducts = getProductsCategory(products, query.category);
  }

  response.set('Content-Type', 'application/json');

  response.status(200);

  filteredProducts.length !== 0
    ? response.json({ status: 'success', products: filteredProducts })
    : response.json({ status: 'no products', products: [] });
};

module.exports = getProducts;
