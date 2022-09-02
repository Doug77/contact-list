module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define('Contacts', {
    name: DataTypes.STRING,
    number: DataTypes.BIGINT,
    email: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    underscored: false,
    timestamps: false,
    tableName: 'Contacts',
  });

  contact.associate = (models) => {
    contact.belongsTo(models.user, {
      as: 'user',
      foreignKey: 'userId',
    });
  };
  return contact;
};
