const Comment = require('../../../domain/db/schemas/comment');

const getAllProducts = (request, response) => {
  const query = request.query.productId;

  const sendResponse = comments => {
    response.set('Content-type', 'application/json');
    response.status(200);
    comments.length !== 0
      ? response.json({ status: 'success', comments })
      : response.json({ status: 'success', comments: [] });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'comment was not found'
    });
  };

  Comment.find({ product: query })
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getAllProducts;
