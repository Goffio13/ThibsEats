'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    static associate(models) {
      Restaurant.hasMany(models.Plat, {
        foreignKey: 'id',
        as: 'plats',
      });
    }
  }
  Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    note: DataTypes.INTEGER,
    drive_time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};