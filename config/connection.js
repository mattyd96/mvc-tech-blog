const Sequelize = require('sequelize');
const config = require('./db_heroku_config.json');
require('dotenv').config();

let sequelize;

// If NODE_ENV is set (deployed on heroku) -> deploy jawsDB connection
// else use local setup defined in .env
if(process.env.NODE_ENV) {
  sequelize = new Sequelize(process.env[config.heroku_db]);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}



module.exports = sequelize;
