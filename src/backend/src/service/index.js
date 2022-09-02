const { createUser, login } = require('./user.service');
const { getAllContact } = require('./contact.service');

module.exports = {
  createUser,
  login,
  getAllContact,
};
