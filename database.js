const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db-foro', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = { sequelize }