require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '1234Ram',
    database: process.env.DB_NAME || 'mydatabase',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '1234Ram',
    database: process.env.DB_NAME || 'mydatabase_test',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '1234Ram',
    database: process.env.DB_NAME || 'mydatabase_prod',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  }
};
