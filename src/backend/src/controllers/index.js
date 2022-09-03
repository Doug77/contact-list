const { createNewUser, loginUser } = require('./user.controller');
const { getContact, newContact, updateContact } = require('./contact.controller');

module.exports = {
  createNewUser,
  loginUser,
  getContact,
  newContact,
  updateContact,
};
