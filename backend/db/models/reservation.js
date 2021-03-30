'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rentalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull:false,
    },
    end_date: {
      type: DataTypes.DATE,
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