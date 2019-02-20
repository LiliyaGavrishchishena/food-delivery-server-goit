const express = require('express');
const mainRoute = require('./main/main');
const getProducts = require('./products/get-products');
const getProductId = require('./products/get-product-id');
const getImageRoute = require('./image/get-image');
const getUser = require('./user/get-user');
const getSaveImageHandlers = require('./image/save-image-multipart');
const createUser = require('./user/create-user');

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
  .get('/image', getImageRoute)
  .get('/products', getProducts)
  .get('/products/:id', getProductId)
  .get('/users/:id', getUser)
  .post('/users', middlewareExample, createUser)
  .post('/image', getSaveImageHandlers());

module.exports = apiRoutes;
