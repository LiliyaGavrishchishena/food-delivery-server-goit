const dbUser = 'liliya';
const dbPassword = 'qwezxc123';

const config = {
  port: 8080,
  dbUser,
  dbPassword,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@foody-lljkr.mongodb.net/test?retryWrites=true`
};

module.exports = config;
