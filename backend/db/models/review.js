'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rentalId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull:false,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull:false,
    },
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Rental, {foreignKey: 'rentalId'})
  };
  return Review;
};