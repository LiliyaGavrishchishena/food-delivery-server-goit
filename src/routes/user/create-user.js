const fs = require('fs');
const path = require('path');
const util = require('util');

const filePath = path.join(__dirname, '../../', 'db/users', 'all-users.json');
const writeFile = util.promisify(fs.writeFile);

const saveNewUser = data => {
  const userJson = fs.readFileSync(filePath, 'utf8');
  const users = JSON.parse(userJson);

  const dataStr = JSON.stringify([...users, data]);

  return writeFile(filePath, dataStr);
};

const createUser = (request, response) => {
  const user = request.body;
  const userData = Object.assign({}, user, { id: Date.now() });

  const sendResponse = () => {
    response.json({
      status: 'success',
      user: userData
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'user was not saved'
    });
  };

  saveNewUser(userData)
    .then(sendResponse)
    .catch(sendError);
};

module.exports = createUser;
