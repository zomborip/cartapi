const Sequelize = require("sequelize")
const sequelize = new Sequelize(
  "krisstore",
  "agent",
  "adhdADHD111",
  {
    host: "127.0.0.1",
    dialect: "mysql",
    operatorAliases: false
  }
)

module.exports = sequelize.define("users",{
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },

  uname: {
    type: Sequelize.STRING(255),
    allowNull: false
  },

  pwd: {
    type: Sequelize.STRING(255),
    allowNull: false
  },

  a: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE

});