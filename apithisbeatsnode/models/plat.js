'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Plat.belongsTo(models.Restaurant, {
        foreignKey: 'restaurantId',
        as: 'restaurant',
        });
    }
  }
  Plat.init({
    Nom_Plat: DataTypes.STRING,
    Prix: DataTypes.FLOAT,
    Description: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Plat',
  });
  return Plat;
};