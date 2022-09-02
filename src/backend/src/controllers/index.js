const { createNewUser, loginUser } = require('./user.controller');
const { getContact } = require('./contact.controller');

module.exports = {
  createNewUser,
  loginUser,
  getContact,
};
