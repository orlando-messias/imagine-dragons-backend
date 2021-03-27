const jwt = require('jsonwebtoken');

const jwtConfig = require('../config/jwtConfig');

// authenticate using email and password
const authenticate = (payload) => {
  const token = jwt.sign({ payload }, jwtConfig.secret, jwtConfig.headers);
  return token;
};

module.exports = authenticate;