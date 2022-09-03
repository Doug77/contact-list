const { createUser, login } = require('./user.service');
const { getAllContact, creteNewContact, updateContact } = require('./contact.service');

module.exports = {
  createUser,
  login,
  getAllContact,
  creteNewContact,
  updateContact,
};
