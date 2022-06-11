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
