const { Contacts } = require('../database/models');

const getAllContact = async (userId) => {
  try {
    const myContacts = await Contacts.findAll({
      where:
      { userId },
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
    name, number, email, userId,
  } = contactData;
  try {
    const newContact = await Contacts.create({
      name, number, email, userId,
    });

    if (!newContact) return null;

    return newContact;
  } catch (error) {
    return error;
  }
};

const updateContact = async (dataContact) => {
  const {
    id, name, number, email,
  } = dataContact;
  try {
    const checkContact = await Contacts.findOne({ where: { id } });

    if (!checkContact) return null;

    return await Contacts.update({
      name, number, email,
    }, { where: { id } });
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line no-return-await
const deleteContact = async (id) => {
  await Contacts.destroy({ where: { id } });
};

module.exports = {
  getAllContact,
  creteNewContact,
  updateContact,
  deleteContact,
};
