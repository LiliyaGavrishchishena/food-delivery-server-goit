const express = require('express');
const mainRoute = require('./main/main');
const getProducts = require('./products/get-products');
const getProductId = require('./products/get-product-id');
const getUser = require('./user/get-user');
const getSaveImageHandlers = require('./images/save-image-multipart');
const createUser = require('./user/create-user');
const createOrder = require('./orders/create-order');

const apiRoutes = express.Router();

const middlewareExample = (req, resp, next) => {
  if (req.body.userName) {
    next();
    return;
  }

  resp.status(400);
  resp.json({
    error: 'user has no "name" field'
  });
};

apiRoutes
  .get('/', mainRoute)
  .get('/products', getProducts)
  .get('/products/:id', getProductId)
  .get('/users/:id', getUser)
  .post('/users', middlewareExample, createUser)
  .post('/orders', createOrder)
  .post('/images', getSaveImageHandlers());

module.exports = apiRoutes;
