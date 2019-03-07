const express = require('express');

const mainRoute = require('./main/main');

const createProduct = require('./products/create-product');
const getProduct = require('./products/get-product');
const getProducts = require('./products/get-products');
const updateProduct = require('./products/update-product');
const deleteProduct = require('./products/delete-product');

const createUser = require('./user/create-user');
const getUser = require('./user/get-user');
const getUsers = require('./user/get-users');
const updateUser = require('./user/update-user');
const deleteUser = require('./user/delete-user');

const createOrder = require('./orders/create-order');
const getOrder = require('./orders/get-order');
const getOrders = require('./orders/get-orders');
const updateOrder = require('./orders/update-order');
const deleteOrder = require('./orders/delete-order');

const apiRoutes = express.Router();

apiRoutes
  .get('/', mainRoute)

  .post('/products', createProduct)
  .get('/products', getProducts)
  .get('/products/:id', getProduct)
  .put('/products/:id', updateProduct)
  .delete('/products/:id', deleteProduct)

  .post('/users', createUser)
  .get('/users', getUsers)
  .get('/users/:id', getUser)
  .put('/users/:id', updateUser)
  .delete('/users/:id', deleteUser)

  .post('/orders', createOrder)
  .get('/orders', getOrders)
  .get('/orders:id', getOrder)
  .put('/orders/:id', updateOrder)
  .delete('/orders/:id', deleteOrder);

module.exports = apiRoutes;
