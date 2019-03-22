const startServer = require('./src/server');
const connectToDB = require('./src/domain/db/connect-db');
const { port, databaseUrl } = require('./config');

startServer(port);
connectToDB(databaseUrl);
