const fs = require('fs');
const path = require('path');

const productsRoute = (request, response) => {
  const filePath = path.join(__dirname, '../../../', 'assets', 'first-bg.jpg');
  const image = fs.statSync(filePath);

  response.writeHead(200, {
    'Content-Type': 'image/jpeg',
    'Content-Length': image.size
  });

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
};

module.exports = productsRoute;
