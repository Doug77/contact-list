const service = require('../service/index');

const getContact = async (req, res) => {
  const { tokenData } = req;

  try {
    const myListContacts = await service.getAllContact(tokenData);

    if (!myListContacts) return res.status(404).json({});

    return res.status(200).json(myListContacts);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const newContact = async (req, res) => {
  const { tokenData } = req;
  const { name, number, email } = req.body;
  try {
    const myNewContact = await service.creteNewContact({
      name, number, email, createEmail: tokenData.email,
    });

    if (!myNewContact) return res.status(400).json({ message: 'Bad Request' });

    return res.status(201).end();
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getContact,
  newContact,
};
