const User = require('../../db/schemas/user');

const getUser = (request, response) => {
  const id = request.params.id;

  const sendResponse = user => {
    response.status(200);
    response.json(user);
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'user was not deleted'
    });
  };

  User.findById(id)
    .remove()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getUser;
