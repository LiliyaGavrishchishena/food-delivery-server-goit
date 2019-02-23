const fs = require('fs');
const path = require('path');
const util = require('util');
const uuidv4 = require('uuid/v4');

const dirPath = path.join(__dirname, '../../', 'db/users');
const filePathProducts = path.join(
  __dirname,
  '../../',
  'db/products',
  'all-products.json'
);

const writeFile = util.promisify(fs.writeFile);

const getProductsIds = ids => {
  const productsJson = fs.readFileSync(filePathProducts, 'utf8');
  const products = JSON.parse(productsJson);

  const productsByIds = products
    .filter(product => ids.includes(product.id))
    .map(item => item.id);

  return productsByIds;
};

const saveNewOrder = data => {
  if (!fs.existsSync(dirPath + '/orders')) {
    fs.mkdirSync(dirPath + '/orders');
  }
  const src = path.resolve(dirPath + '/orders', data.id + '.json');
  const dataSrc = JSON.stringify(data);

  writeFile(src, dataSrc);
};

const createOrder = (request, response) => {
  const order = request.body;
  const products = getProductsIds(order.products);
  const orderData = Object.assign(
    {},
    { id: uuidv4(), ...order, products: products }
  );

  const sendResponse = () => {
    saveNewOrder(orderData);
    response.json({
      status: 'success',
      order: orderData
    });
  };

  const sendError = () => {
    response.json({
      status: 'failed',
      order: null
    });
  };

  products.length !== 0 ? sendResponse() : sendError();
};

module.exports = createOrder;
