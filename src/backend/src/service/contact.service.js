const { Contacts } = require('../database/models/contact');

const getAllContact = async (id) => {
  try {
    const myContacts = await Contacts.findAll({
      where:
      { userId: id },
      attributes: {
        exclude: ['userId', 'UserId'],
      },
    });

    if (!myContacts) return null;

    return myContacts;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllContact,
};
