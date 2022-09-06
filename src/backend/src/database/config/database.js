require('dotenv').config();

module.exports = {
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOSTNAME,
    port: process.env.PORT_DB,
    jwt_secret: process.env.JWT,
    dialect: 'mysql',
  },
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOSTNAME,
    port: process.env.PORT_DB,
    jwt_secret: process.env.JWT,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOSTNAME,
    port: process.env.PORT_DB,
    jwt_secret: process.env.JWT,
    dialect: 'mysql',
  },
};
