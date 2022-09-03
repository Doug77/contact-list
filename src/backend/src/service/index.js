const { createUser, login } = require('./user.service');
const {
  getAllContact, creteNewContact, updateContact, deleteContact,
} = require('./contact.service');

module.exports = {
  createUser,
  login,
  getAllContact,
  creteNewContact,
  updateContact,
  deleteContact,
};
