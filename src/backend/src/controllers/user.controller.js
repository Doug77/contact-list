const service = require('../service/index');

const createNewUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const myUser = await service.createUser({ email, password });

    if (!myUser) return res.status(409).json({ message: 'User already registered' });

    return res.status(201).json(myUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isLogged = await service.login({ email, password });

    if (!isLogged) return res.status(401).json({ message: 'User or Password wrong' });

    return res.status(200).json(isLogged);
  } catch (error) {
    return error;
  }
};

module.exports = {
  createNewUser,
  loginUser,
};
