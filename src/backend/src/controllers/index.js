const { createNewUser, loginUser } = require('./user.controller');
const { getContact, newContact } = require('./contact.controller');

module.exports = {
  createNewUser,
  loginUser,
  getContact,
  newContact,
};
