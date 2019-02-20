const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '../../', 'db/users', 'all-users.json');

const getUserFromDb = id => {
  const usersJson = fs.readFileSync(filePath, 'utf8');
  const users = JSON.parse(usersJson);
  const userById = users.find(user => user.id === Number(id));

  return userById;
};

const getUser = (request, response) => {
  const id = request.params.id;
  const userById = getUserFromDb(id);

  response.set('Content-Type', 'application/json');

  response.status(200);

  userById
    ? response.json({ user: userById })
    : response.json({ status: 'not found' });
};

module.exports = getUser;
