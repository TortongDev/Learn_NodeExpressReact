const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('db_nodejs_react', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres' ,
    logging: false
});
module.exports = sequelize