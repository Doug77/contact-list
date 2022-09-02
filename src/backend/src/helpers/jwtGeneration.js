const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '3d',
};

const SECRET = process.env.JWT;

module.exports = (data = {}) => jwt.sign({ data }, SECRET, jwtConfig);
