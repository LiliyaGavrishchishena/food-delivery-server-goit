const mainRoute = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  response.write('<h1>Hello Liliya!</h1>');
  response.end();
};

module.exports = mainRoute;
