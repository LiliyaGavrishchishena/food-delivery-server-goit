const fs = require('fs');
const path = require('path');

const foodRoute = (request, response) => {
  const filePath = path.join(__dirname, '../../../', 'assets', 'first-bg.jpg');
  const image = fs.statSync(filePath);

  response.set('Content-Type', 'image/jpeg').set('Content-Length', image.size);

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(response);
};

module.exports = foodRoute;
