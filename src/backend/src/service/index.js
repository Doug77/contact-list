const { createUser, login } = require('./user.service');
const { getAllContact, creteNewContact } = require('./contact.service');

module.exports = {
  createUser,
  login,
  getAllContact,
  creteNewContact,
};
