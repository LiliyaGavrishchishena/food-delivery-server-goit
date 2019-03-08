const Order = require('../../db/schemas/order');

const getOrder = (request, response) => {
  const id = request.params.id;

  const sendResponse = order => {
    response.status(200);
    response.json(order);
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'order was not saved'
    });
  };

  Order.findById(id)
    .remove()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getOrder;
