const service = require('../service/index');

const getContact = async (req, res) => {
  const { id } = req.tokenData;
  try {
    const myListContacts = await service.getAllContact(id);

    if (!myListContacts) return res.status(404).json({});

    return res.status(200).json(myListContacts);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getContact,
};
