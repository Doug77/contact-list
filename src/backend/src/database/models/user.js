const { DataTypes } = require('sequelize');

const atributte = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const Users = sequelize.define('Users', atributte, {
    underscored: false,
    timestamps: false,
    tableName: 'Users',
  });

  Users.associate = (models) => {
    Users.hasMany(models.Contacts, {
      as: 'Contacts',
      foreingnKey: 'userId',
    });
  };

  return Users;
};
