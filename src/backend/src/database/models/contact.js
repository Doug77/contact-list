module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define('Contacts', {
    name: DataTypes.STRING,
    number: DataTypes.STRING,
    email: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    timestamps: false,
    tableName: 'contacts',
  });
  contact.associate = (models) => {
    contact.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };
  return contact;
};
