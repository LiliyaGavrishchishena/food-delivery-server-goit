const mainRoute = require('./main/mainRoute');
const productsRoute = require('./products/productsRoute');
const signUpRoute = require('./users/sign-up-route');

const router = {
  '/': mainRoute,
  '/signup': signUpRoute,
  '/products': productsRoute,
  default: mainRoute
};

module.exports = router;
