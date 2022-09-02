const { hash } = require('bcrypt');
const jwtGenerator = require('../helpers/jwtGeneration');
const { User } = require('../database/models');

const createUser = async (dataUser) => {
  const { email, password } = dataUser;

  try {
    const alreadyExists = await User.findOne({ where: { email } });

    if (alreadyExists) return null;

    const hashPass = await hash(password, 10);

    const newUser = await User.create({ email, password: hashPass });
    const token = jwtGenerator({ id: newUser.id, password, email });

    return {
      newUser,
      token,
    };
  } catch (error) {
    return error;
  }
};

module.exports = {
  createUser,
};
