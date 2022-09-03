const { Contacts } = require('../database/models');
const { User } = require('../database/models');

const getAllContact = async (data) => {
  const { email } = data;
  try {
    const { id } = await User.findOne({ where: { email } });

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

const creteNewContact = async (contactData) => {
  const {
    name, number, email, createEmail,
  } = contactData;
  try {
    const { id } = await User.findOne({ where: { email: createEmail } });

    const newContact = await Contacts.create({
      name, number, email, userId: id,
    });

    if (!newContact) return null;

    return newContact;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllContact,
  creteNewContact,
};
