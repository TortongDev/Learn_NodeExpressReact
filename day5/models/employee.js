const { Sequelize, DataTypes, STRING } = require('sequelize');
const pg = require('../connect')
const EmployeeModel = pg.define('Employee', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255)
    },
    phone: {
        type: DataTypes.STRING(255)
    },
    email: {
        type: DataTypes.STRING(255)
    }


});
EmployeeModel.sync({alter: true})
module.exports = EmployeeModel