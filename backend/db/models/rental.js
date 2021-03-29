'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rental = sequelize.define('Rental', {
    title: {
      type:DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    numBeds: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numBaths: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nightPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    mainPhoto: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    photoOne: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photoTwo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photoThree: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photoFour: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
  }
  }, {});
  Rental.associate = function(models) {
    // associations can be defined here
  };
  return Rental;
};