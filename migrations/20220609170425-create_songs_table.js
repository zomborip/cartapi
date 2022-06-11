'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("songs", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
    
      note: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
    
      img: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
    
      demo: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
    
      song: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
    
      price: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
    
      free: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
    
      prod: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
    
      note1: {
        type: Sequelize.STRING(254),
        allowNull: true
      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("songs")
  }
};
