require('dotenv').config();

module.exports = {
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'myContacts',
    host: process.env.HOSTNAME,
    port: process.env.PORT,
    jwt_secret: process.env.JWT,
    dialect: 'mysql',
  },
};
