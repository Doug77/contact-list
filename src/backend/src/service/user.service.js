const { User } = require('../database/models');
const jwtGenerator = require('../helpers/jwtGeneration');

const createUser = async (dataUser) => {
  const { email, password } = dataUser;

  try {
    const alreadyExists = await User.findOne({ where: { email } });

    if (alreadyExists) return null;

    const newUser = await User.create(dataUser);

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
