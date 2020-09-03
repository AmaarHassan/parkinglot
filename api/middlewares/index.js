const { jwtMiddleware, getToken } = require('./jwt');
const errorsMiddleware = require('./error');

module.exports = {
  jwtMiddleware,
  getToken,
  errorsMiddleware,
};
