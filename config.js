const dbUser = 'liliya';
const dbPassword = 'qwezxc123';

const config = {
  secret: 'key123',
  port: 8080,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@foody-lljkr.mongodb.net/test?retryWrites=true`
};

module.exports = config;
