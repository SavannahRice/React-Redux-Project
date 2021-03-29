'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Rentals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      numBeds: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      numBaths: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nightPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(12),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      latitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      mainPhoto: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
      photoOne: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
      photoTwo: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
      photoThree: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
      photoFour: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Rentals');
  }
};