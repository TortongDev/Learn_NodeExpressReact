const pg = require('../connect')    
const { Sequelize, DataTypes } = require('sequelize');
const UserModel = pg.define('user_model', {
  id:{
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(255)
  },
  password: {
    type: DataTypes.STRING(100)
  },
  status_user: {
    type: DataTypes.CHAR(2)
  }
});
UserModel.sync({alter: true})
module.exports = UserModel