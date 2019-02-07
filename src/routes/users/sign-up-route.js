const fs = require('fs');
const path = require('path');
const qs = require('querystring');

const saveUser = user => {
  const userName = user.username;
  const filePath = path.join(__dirname, '../../db/users', `${userName}.json`);

  fs.writeFile(filePath, JSON.stringify(user), function(err) {
    if (error) throw error;
    console.log(`${userName}.json was created`);
  });
};

const signUpRoute = (request, response) => {
  if (request.method === 'POST') {
    let body = '';

    request.on('data', function(data) {
      body += data;

      console.log('Incoming data!!!!');
    });

    request.on('end', function() {
      const post = qs.parse(body);
      saveUser(post);
      const response = { status: 'success', user: post };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response));
    });
  }
};

module.exports = signUpRoute;
