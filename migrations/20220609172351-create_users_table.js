'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("users",{
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
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("users")
  }
};
