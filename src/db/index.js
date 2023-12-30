const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gmr-sm-purva', 'sunay', 'password', {
  host: 'host',
  dialect: 'postgres'
});

module.exports = sequelize;
