const User = require('../../../domain/db/schemas/user');
const jwt = require('jsonwebtoken');

const getToken = request =>
  request.body.token ||
  request.query.token ||
  request.headers['x-access-token'] ||
  request.headers['x-auth-token'];

const currentUser = (request, response) => {
  const token = getToken(request);

  const decodedUser = jwt.decode(token);
  const userId = decodedUser.id;

  const sendResponse = user => {
    response.set('Content-type', 'application/json');
    response.status(200);
    if (user === null) {
      return response.json({ status: 'no user' });
    }
    response.json({ status: 'success', user });
  };

  const sendError = error => {
    response.status(400);
    response.json({
      error: error
    });
  };

  User.findById(userId)
    .then(sendResponse)
    .catch(sendError);
};

module.exports = currentUser;
