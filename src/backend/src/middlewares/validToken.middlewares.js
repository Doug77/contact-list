/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  console.log(req.headers);
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const decoded = jwt.verify(token, process.env.JWT);
    req.tokenData = decoded.data;

    next();
  } catch (error) {
    if (error.name.includes('Token')) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    next(error);
  }
};
