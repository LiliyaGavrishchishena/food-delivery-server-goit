const fs = require('fs');
const path = require('path');

const productsRoute = (request, response) => {
  const AllProducts = path.join(
    __dirname,
    '../../',
    'db/products',
    'all-products.json'
  );

  response.writeHead(200, {
    'Content-Type': 'application/json'
  });

  const readStream = fs.createReadStream(AllProducts);

  readStream.pipe(response);
};

module.exports = productsRoute;
