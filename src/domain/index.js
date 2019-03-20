const user = require('./user');
const order = require('./order');
const product = require('./product');
const auth = require('./auth');

module.exports = {
  userAPI: user,
  productAPI: product,
  orderAPI: order,
  authAPI: auth
};
