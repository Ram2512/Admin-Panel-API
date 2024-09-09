// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, "1234Ram", {
//   host: process.env.DB_HOST,
//   dialect: 'postgres',
// });

// module.exports = sequelize;

//just for fun
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_LINK,{
  dialect: 'postgres',
});

module.exports = sequelize;
