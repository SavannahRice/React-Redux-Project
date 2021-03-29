'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    userId: {
      type: Sequelize.INTEGER,
      references: { model: "Users"},
      allowNull: false,
    },
    rentalId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {model: "Rentals"}
    },
    start_date: {
      type: Sequelize.DATE,
      allowNull:false,
    },
    end_date: {
      type: Sequelize.DATE,
      allowNull:false,
    },
  }, {});
  Reservation.associate = function(models) {
    // associations can be defined here
    Reservation.belongsTo(models.Rental, {foreignKey: 'rentalId'})
    Reservation.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Reservation;
};