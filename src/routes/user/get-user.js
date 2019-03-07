const User = require('../../db/schemas/user');

const getUser = (request, response) => {
  const id = request.params.id;

  const sendResponse = user => {
    response.set('Content-type', 'application/json');
    response.status(200);
    response.json({ status: 'success', user });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'user was not found'
    });
  };

  const findUser = User.findById(id);

  findUser.then(sendResponse).catch(sendError);
};

module.exports = getUser;
